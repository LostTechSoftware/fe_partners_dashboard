export const isAuthenticated = () => {
  const token = sessionStorage.getItem('token');

  if(!token)
    return false;

  return true;
};
