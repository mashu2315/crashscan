import Layout from '../components/Layout';
import Dashboard from '../components/Dashboard';

export const metadata = {
  title: 'Dashboard - VehicleDetect',
  description: 'Upload and analyze vehicle damage images',
};

export default function DashboardPage() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}
