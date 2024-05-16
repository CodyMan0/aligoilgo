import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import authAPI from "@/api/auth/apis";
import { ROUTER_PATHS } from "@/constants/routerPath";
import STORAGE_KEYS from "@/constants/storageKeys";
import useAuthStore from "@/store/authStore";
import useToast from "../useToast";

const useAuth = () => {
  const toast = useToast()
  const navigate = useNavigate()
  const {isLoggedIn, setIsLoggedIn} = useAuthStore()
  const { mutateAsync } = useMutation({ mutationFn: authAPI.postKakaoCode });

  const kakaoLogin = useCallback(
    async (authorizeCode: string) => {
      if (!authorizeCode) {
        navigate(ROUTER_PATHS.ROOT);
        return;
      }
      try {
        const data = await mutateAsync(authorizeCode);
        localStorage.setItem(STORAGE_KEYS.accessToken, data.accessToken as string);
        localStorage.setItem(STORAGE_KEYS.refreshToken, data.refreshToken as string);
        setIsLoggedIn(true)
        setTimeout(() => 
        {
          navigate(ROUTER_PATHS.TARGET)
          toast({message:'LOGIN_SUCCESS'})
        }, 1000);
        
      } catch {
        setTimeout(() => {
          navigate(ROUTER_PATHS.ROOT)
          toast({message:'LOGIN_FAIL'})
        }, 1000); 
      }
    },
    [mutateAsync, navigate, setIsLoggedIn, toast],
  );

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEYS.accessToken);
    localStorage.removeItem(STORAGE_KEYS.refreshToken);
    setIsLoggedIn(false)
    navigate(ROUTER_PATHS.ROOT);
    toast({message:'LOGOUT_SUCCESS'})
  };
    
  return {isLoggedIn, login:kakaoLogin , logout : handleLogout}
}

export default useAuth