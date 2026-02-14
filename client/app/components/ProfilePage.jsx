// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { User, Mail, Edit2, Save, X, LogOut, Trash2 } from 'lucide-react';

// export default function ProfilePage() {
//   const [profile, setProfile] = useState({
//     name: '',
//     email: '',
//     joinDate: '',
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editData, setEditData] = useState({ ...profile });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem('jwt_token');
//     if (!token) {
//       router.push('/login');
//       return;
//     }

//     const name = localStorage.getItem('user_name') || 'User';
//     const email = localStorage.getItem('user_email') || 'user@example.com';
//     const joinDate = localStorage.getItem('join_date') || new Date().toLocaleDateString();

//     const profileData = { name, email, joinDate };
//     setProfile(profileData);
//     setEditData(profileData);
//   }, [router]);

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSaveProfile = async () => {
//     setError('');
//     setSuccess('');

//     if (!editData.name || !editData.email) {
//       setError('Name and email are required');
//       return;
//     }

//     try {
//       // Simulate API call
//       localStorage.setItem('user_name', editData.name);
//       localStorage.setItem('user_email', editData.email);
//       setProfile(editData);
//       setIsEditing(false);
//       setSuccess('Profile updated successfully!');
//       setTimeout(() => setSuccess(''), 3000);
//     } catch (err) {
//       setError('Failed to update profile');
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('jwt_token');
//     localStorage.removeItem('user_email');
//     localStorage.removeItem('user_name');
//     router.push('/');
//   };

//   const handleDeleteAccount = () => {
//     if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
//       localStorage.clear();
//       router.push('/');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-12">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-4xl font-bold text-slate-900 mb-2">My Profile</h1>
//         <p className="text-xl text-slate-600 mb-12">Manage your account information</p>

//         <div className="space-y-6">
//           {/* Profile Card */}
//           <div className="bg-white rounded-lg shadow-xl p-8">
//             {/* Header */}
//             <div className="flex items-start justify-between mb-8 pb-8 border-b border-slate-200">
//               <div className="flex items-center space-x-4">
//                 <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
//                   <User className="text-white" size={32} />
//                 </div>
//                 <div>
//                   <h2 className="text-2xl font-bold text-slate-900">{profile.name}</h2>
//                   <p className="text-slate-600">{profile.email}</p>
//                 </div>
//               </div>
//               {!isEditing && (
//                 <button
//                   onClick={() => setIsEditing(true)}
//                   className="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
//                 >
//                   <Edit2 size={18} />
//                   <span>Edit</span>
//                 </button>
//               )}
//             </div>

//             {/* Messages */}
//             {error && (
//               <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
//                 <p className="text-red-700 text-sm">{error}</p>
//               </div>
//             )}

//             {success && (
//               <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
//                 <p className="text-green-700 text-sm">{success}</p>
//               </div>
//             )}

//             {/* Profile Information */}
//             {isEditing ? (
//               <div className="space-y-4 mb-8">
//                 <div>
//                   <label className="block text-sm font-medium text-slate-900 mb-2">Full Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={editData.name}
//                     onChange={handleEditChange}
//                     className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-slate-900 mb-2">Email Address</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={editData.email}
//                     onChange={handleEditChange}
//                     className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div className="flex space-x-2 pt-4">
//                   <button
//                     onClick={handleSaveProfile}
//                     className="flex items-center space-x-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
//                   >
//                     <Save size={18} />
//                     <span>Save Changes</span>
//                   </button>
//                   <button
//                     onClick={() => {
//                       setIsEditing(false);
//                       setEditData(profile);
//                       setError('');
//                     }}
//                     className="flex items-center space-x-2 px-6 py-2 bg-slate-400 hover:bg-slate-500 text-white font-semibold rounded-lg transition"
//                   >
//                     <X size={18} />
//                     <span>Cancel</span>
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div className="space-y-4 mb-8">
//                 <div className="pb-4 border-b border-slate-200">
//                   <p className="text-sm text-slate-600 mb-1">Full Name</p>
//                   <p className="text-lg font-semibold text-slate-900">{profile.name}</p>
//                 </div>
//                 <div className="pb-4 border-b border-slate-200">
//                   <p className="text-sm text-slate-600 mb-1">Email Address</p>
//                   <p className="text-lg font-semibold text-slate-900">{profile.email}</p>
//                 </div>
//                 <div className="pb-4">
//                   <p className="text-sm text-slate-600 mb-1">Member Since</p>
//                   <p className="text-lg font-semibold text-slate-900">{profile.joinDate}</p>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Stats Card */}
//           <div className="bg-white rounded-lg shadow-lg p-8">
//             <h3 className="text-xl font-bold text-slate-900 mb-6">Activity Summary</h3>
//             <div className="grid md:grid-cols-3 gap-6">
//               <div className="text-center p-4 bg-slate-50 rounded-lg">
//                 <p className="text-sm text-slate-600 mb-2">Total Inspections</p>
//                 <p className="text-3xl font-bold text-blue-600">
//                   {JSON.parse(localStorage.getItem('inspections') || '[]').length}
//                 </p>
//               </div>
//               <div className="text-center p-4 bg-slate-50 rounded-lg">
//                 <p className="text-sm text-slate-600 mb-2">Account Status</p>
//                 <p className="text-xl font-bold text-green-600">Active</p>
//               </div>
//               <div className="text-center p-4 bg-slate-50 rounded-lg">
//                 <p className="text-sm text-slate-600 mb-2">Plan</p>
//                 <p className="text-xl font-bold text-slate-900">Free Tier</p>
//               </div>
//             </div>
//           </div>

//           {/* Security Section */}
//           <div className="bg-white rounded-lg shadow-lg p-8">
//             <h3 className="text-xl font-bold text-slate-900 mb-6">Security</h3>
//             <div className="space-y-3">
//               <button className="w-full text-left px-4 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition flex items-center justify-between">
//                 <span className="font-semibold text-slate-900">Change Password</span>
//                 <span className="text-slate-400">&gt;</span>
//               </button>
//               <button className="w-full text-left px-4 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition flex items-center justify-between">
//                 <span className="font-semibold text-slate-900">Two-Factor Authentication</span>
//                 <span className="text-slate-400">&gt;</span>
//               </button>
//             </div>
//           </div>

//           {/* Danger Zone */}
//           <div className="bg-red-50 border border-red-200 rounded-lg p-8">
//             <h3 className="text-xl font-bold text-red-900 mb-6">Danger Zone</h3>
//             <div className="space-y-3">
//               <button
//                 onClick={handleLogout}
//                 className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition flex items-center space-x-2 justify-center"
//               >
//                 <LogOut size={18} />
//                 <span>Logout</span>
//               </button>
//               <button
//                 onClick={handleDeleteAccount}
//                 className="w-full px-4 py-3 border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold rounded-lg transition flex items-center space-x-2 justify-center"
//               >
//                 <Trash2 size={18} />
//                 <span>Delete Account</span>
//               </button>
//             </div>
//           </div>

//           {/* Help Section */}
//           <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
//             <h3 className="text-xl font-bold text-blue-900 mb-4">Need Help?</h3>
//             <p className="text-blue-800 mb-4">
//               Have questions or need support? Contact our team or check out our documentation.
//             </p>
//             <div className="flex space-x-3">
//               <Link href="/contact" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
//                 Contact Support
//               </Link>
//               <Link href="/terms" className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-100 font-semibold rounded-lg transition">
//                 Documentation
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { User, Mail, Edit2, Save, X, LogOut, Trash2, ShieldCheck, HelpCircle } from 'lucide-react';
import { 
  getUserProfileService, 
  updateUserProfileService, 
  deleteUserProfileService 
} from "@/services/profileServices";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    joinDate: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = Cookies.get('token');
      if (!token) {
        router.push('/login');
        return;
      }

      try {
        setLoading(true);
        const response = await getUserProfileService(token);
        
        if (response?.data?.success) {
          const userData = response.data.user || response.data.data;
          const formattedData = {
            name: userData.name,
            email: userData.email,
            joinDate: userData.createdAt ? new Date(userData.createdAt).toLocaleDateString() : 'N/A',
          };
          setProfile(formattedData);
          setEditData({ name: userData.name, email: userData.email });
        }
      } catch (err) {
        if (err.response?.status === 401) router.push('/login');
        setError('Failed to load profile data.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = async () => {
    setError('');
    setSuccess('');
    const token = Cookies.get('token');

    if (!editData.name || !editData.email) {
      setError('Name and email are required');
      return;
    }

    try {
      const response = await updateUserProfileService(token, editData);
      if (response?.data?.success) {
        setProfile((prev) => ({ ...prev, ...editData }));
        setIsEditing(false);
        setSuccess('Profile updated successfully!');
        setTimeout(() => setSuccess(''), 3000);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update profile');
    }
  };

  const handleLogout = () => {
    Cookies.remove('token');
    router.push('/login');
  };

  const handleDeleteAccount = async () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      const token = Cookies.get('token');
      try {
        const response = await deleteUserProfileService(token);
        if (response?.data?.success) {
          Cookies.remove('token');
          router.push('/signup');
        }
      } catch (err) {
        setError('Failed to delete account.');
      }
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">My Profile</h1>
        <p className="text-xl text-slate-600 mb-12">Manage your account information</p>

        <div className="space-y-6">
          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="flex items-start justify-between mb-8 pb-8 border-b border-slate-200">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <User className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{profile.name}</h2>
                  <p className="text-slate-600">{profile.email}</p>
                </div>
              </div>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                >
                  <Edit2 size={18} />
                  <span>Edit</span>
                </button>
              )}
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                {success}
              </div>
            )}

            {isEditing ? (
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={handleEditChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={editData.email}
                    onChange={handleEditChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div className="flex space-x-2 pt-4">
                  <button onClick={handleSaveProfile} className="flex items-center space-x-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition">
                    <Save size={18} /> <span>Save Changes</span>
                  </button>
                  <button onClick={() => { setIsEditing(false); setError(''); }} className="flex items-center space-x-2 px-6 py-2 bg-slate-400 hover:bg-slate-500 text-white font-semibold rounded-lg transition">
                    <X size={18} /> <span>Cancel</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4 mb-8">
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-sm text-slate-600 mb-1">Full Name</p>
                  <p className="text-lg font-semibold text-slate-900">{profile.name}</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-sm text-slate-600 mb-1">Email Address</p>
                  <p className="text-lg font-semibold text-slate-900">{profile.email}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Member Since</p>
                  <p className="text-lg font-semibold text-slate-900">{profile.joinDate}</p>
                </div>
              </div>
            )}
          </div>

          {/* Stats Card */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Activity Summary</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600 mb-2">Total Inspections</p>
                <p className="text-3xl font-bold text-blue-600">0</p>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600 mb-2">Account Status</p>
                <p className="text-xl font-bold text-green-600">Active</p>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600 mb-2">Plan</p>
                <p className="text-xl font-bold text-slate-900">Free Tier</p>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Security</h3>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition flex items-center justify-between">
                <span className="font-semibold text-slate-900">Change Password</span>
                <span className="text-slate-400">&gt;</span>
              </button>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-8">
            <h3 className="text-xl font-bold text-red-900 mb-6">Danger Zone</h3>
            <div className="space-y-3">
              <button
                onClick={handleLogout}
                className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition flex items-center space-x-2 justify-center"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
              <button
                onClick={handleDeleteAccount}
                className="w-full px-4 py-3 border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold rounded-lg transition flex items-center space-x-2 justify-center"
              >
                <Trash2 size={18} />
                <span>Delete Account</span>
              </button>
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Need Help?</h3>
            <p className="text-blue-800 mb-4">
              Have questions or need support? Contact our team or check out our documentation.
            </p>
            <div className="flex space-x-3">
              <Link href="/contact" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}