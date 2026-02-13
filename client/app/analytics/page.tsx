import Layout from '../components/Layout';
import Analytics from '../components/Analytics';

export const metadata = {
  title: 'Analytics - VehicleDetect',
  description: 'View your vehicle damage inspection analytics and statistics',
};

export default function AnalyticsPage() {
  return (
    <Layout>
      <Analytics />
    </Layout>
  );
}
