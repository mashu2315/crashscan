import Layout from '../components/Layout';
import Login from '../components/auth/Login';

export const metadata = {
  title: 'Login - VehicleDetect',
  description: 'Login to your VehicleDetect account',
};

export default function LoginPage() {
  return (
    <Layout>
      <Login />
    </Layout>
  );
}
