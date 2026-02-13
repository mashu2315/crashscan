import Layout from '../components/Layout';
import ResultPage from '../components/ResultPage';

export const metadata = {
  title: 'Inspection Result - VehicleDetect',
  description: 'View your vehicle damage inspection results',
};

export default function Result() {
  return (
    <Layout>
      <ResultPage />
    </Layout>
  );
}
