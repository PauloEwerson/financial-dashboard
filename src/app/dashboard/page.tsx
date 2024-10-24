import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isLoggedIn, logout } from '@/utils/auth';

const DashboardPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div>
      <h1>Bem-vindo à Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashboardPage;