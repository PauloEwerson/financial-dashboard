export const isLoggedIn = (): boolean => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('loggedIn') === 'true';
  }
  return false;
};

export const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('loggedIn');
  }
};
