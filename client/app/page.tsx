import Layout from './components/Layout';
import LandingPage from './components/LandingPage';

export const metadata = {
  title: 'VehicleDetect - AI Vehicle Damage Detection',
  description: 'Instant AI-powered vehicle damage detection for insurance claims, dealer intake, and inspections',
};

export default function Page() {
  return (
    <Layout>
      <LandingPage />
    </Layout>
  );
}
