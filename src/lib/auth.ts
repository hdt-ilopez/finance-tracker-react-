import { toast } from 'react-toastify';

export async function Login(values: { email: string; password: string }) {
  const { email, password } = values;

  if (!email || !password) {
    toast.error('Email and password required');
    console.error('Email or password is missing');
    return;
  }

  toast.success('Logging in...');
}
