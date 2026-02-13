import Layout from '../components/Layout';

export const metadata = {
  title: 'Terms of Service - VehicleDetect',
  description: 'Terms of Service for VehicleDetect',
};

export default function Terms() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>

          <div className="prose prose-sm max-w-none space-y-6 text-slate-700">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using VehicleDetect, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on VehicleDetect for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on VehicleDetect</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Disclaimer</h2>
              <p>
                The materials on VehicleDetect are provided on an 'as is' basis. VehicleDetect makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Limitations</h2>
              <p>
                In no event shall VehicleDetect or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on VehicleDetect, even if VehicleDetect or a VehicleDetect authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on VehicleDetect could include technical, typographical, or photographic errors. VehicleDetect does not warrant that any of the materials on its website are accurate, complete, or current. VehicleDetect may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <p className="text-sm text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
