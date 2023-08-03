import { useState, useEffect } from "react";

interface LoginStatusData {
  login: boolean;
  checking: boolean;
}

export const LoginStatus = (): LoginStatusData => {
  const [login, setLogin] = useState<boolean>(false);
  const [checking, setChecking] = useState<boolean>(true);

  //set auth when have be
  const user: string | null = localStorage.getItem('token');

  useEffect(() => {
    if (user) {
      setLogin(true);
    } else {
      setLogin(false);
    }
    setChecking(false);
  }, [user]);

  return { login, checking };
};
