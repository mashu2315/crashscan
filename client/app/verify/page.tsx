'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { verifyOtpService } from "@/services/authServices";

export default function VerifyOtp() {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userData, setUserData] = useState<any>(null);
  const router = useRouter();

  // Load the signup data we saved in the previous step
  useEffect(() => {
    const savedData = localStorage.getItem('signupData');
    if (!savedData) {
      router.push('/signup'); // Redirect back if no data found
    } else {
      setUserData(JSON.parse(savedData));
    }
  }, [router]);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (otp.length < 4) {
      setError('Please enter a valid OTP');
      return;
    }

    setLoading(true);

    try {
      // Step 1: Call verification service
      // We send the email from localStorage and the OTP from the input
      const res = await verifyOtpService({
        email: userData?.email,
        otp: otp,
      });

      if (res?.data && res.data.success) {
        // Step 2: Clear temp signup data and save the real token
        localStorage.removeItem('signupData');
        localStorage.setItem('jwt_token', res.data.token);
        localStorage.setItem('user_name', userData.name);

        // Step 3: Redirect to dashboard
        router.push('/dashboard');
      } else {
        setError(res?.data?.message || 'Invalid OTP. Please try again.');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Verification failed. Please check your connection.');
      console.error("Verification Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
              <ShieldCheck size={32} />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Verify Email</h1>
            <p className="text-slate-600 mt-2">
              We've sent a code to <br />
              <span className="font-semibold text-slate-800">{userData?.email}</span>
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm text-center">{error}</p>
            </div>
          )}

          <form onSubmit={handleVerify} className="space-y-6">
            <div>
              <input
                type="text"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 6-digit OTP"
                className="w-full text-center text-2xl tracking-[1em] font-bold py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-sm placeholder:tracking-normal placeholder:font-normal"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition disabled:opacity-50"
            >
              {loading ? 'Verifying...' : 'Verify & Create Account'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link 
              href="/signup" 
              className="inline-flex items-center text-sm text-slate-500 hover:text-blue-600 transition"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}