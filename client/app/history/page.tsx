import Layout from '../components/Layout';
import HistoryPage from '../components/HistoryPage';

export const metadata = {
  title: 'Inspection History - VehicleDetect',
  description: 'View your inspection history and manage past reports',
};

export default function HistoryPageRoute() {
  return (
    <Layout>
      <HistoryPage />
    </Layout>
  );
}
