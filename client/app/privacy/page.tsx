import Layout from '../components/Layout';

export const metadata = {
  title: 'Privacy Policy - VehicleDetect',
  description: 'Privacy Policy for VehicleDetect',
};

export default function Privacy() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>

          <div className="prose prose-sm max-w-none space-y-6 text-slate-700">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, upload images for analysis, or contact us for support. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Account information (name, email, password)</li>
                <li>Vehicle images and inspection data</li>
                <li>Remarks and notes you add to inspections</li>
                <li>Communication data when you contact support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and improve our services</li>
                <li>Process your inspection requests</li>
                <li>Send you updates and notifications</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Analyze usage patterns to improve our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Third-Party Disclosure</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share information when required by law or to protect our rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal information at any time. You can do this by logging into your account or contacting us directly.
              </p>
            </section>

            <p className="text-sm text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
