import Layout from '../components/Layout';
import ForgotPassword from '../components/auth/ForgotPassword';

export const metadata = {
  title: 'Forgot Password - VehicleDetect',
  description: 'Reset your VehicleDetect password',
};

export default function ForgotPasswordPage() {
  return (
    <Layout>
      <ForgotPassword />
    </Layout>
  );
}
