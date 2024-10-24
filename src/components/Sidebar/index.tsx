import React from 'react';
import { Menu } from 'antd';
import { DashboardOutlined, LogoutOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { logout } from '@/utils/auth';
import { SidebarContainer } from './styles';

const Sidebar: React.FC = () => {
  const router = useRouter();

  const handleMenuClick = (e: any) => {
    if (e.key === 'dashboard') {
      router.push('/dashboard');
    } else if (e.key === 'logout') {
      logout();
      router.push('/login');
    }
  };

  return (
    <SidebarContainer>
      <Menu
        mode="inline"
        defaultSelectedKeys={['dashboard']}
        onClick={handleMenuClick}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="logout" icon={<LogoutOutlined />}>
          Sair
        </Menu.Item>
      </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;