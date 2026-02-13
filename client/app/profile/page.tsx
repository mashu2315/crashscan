import Layout from '../components/Layout';
import ProfilePage from '../components/ProfilePage';

export const metadata = {
  title: 'Profile - VehicleDetect',
  description: 'Manage your VehicleDetect account profile',
};

export default function Profile() {
  return (
    <Layout>
      <ProfilePage />
    </Layout>
  );
}
