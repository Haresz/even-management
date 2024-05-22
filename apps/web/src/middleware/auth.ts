import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const withAuth = () => {
  const AuthComponent = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const token = sessionStorage.getItem('token');

      if (!token || isTokenExpired(token)) {
        router.push('/login');
      }
    }, []);

    return null;
  };

  const isTokenExpired = (token: any) => {
    const creationTime: any = sessionStorage.getItem('created');
    const expirationTime: any = new Date(
      creationTime.getTime() + 60 * 60 * 1000,
    );

    return expirationTime < Date.now();
  };

  return AuthComponent;
};
