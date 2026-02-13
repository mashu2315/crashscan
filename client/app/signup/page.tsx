import Layout from '../components/Layout';
import Signup from '../components/auth/Signup';

export const metadata = {
  title: 'Sign Up - VehicleDetect',
  description: 'Create a new account on VehicleDetect',
};

export default function SignupPage() {
  return (
    <Layout>
      <Signup />
    </Layout>
  );
}
