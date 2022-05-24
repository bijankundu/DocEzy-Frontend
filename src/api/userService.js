import api, { authHeader } from "./index";
import { useMutation, useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setUserDetails } from "./../store/userSlice";

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    isLoading,
    isError,
    mutate: handleLogin,
  } = useMutation((registerData) => api.post("/auth/login/user", registerData), {
    onSuccess: ({ data }) => {
      const { accessToken, user } = data;
      dispatch(setUserDetails(user));
      localStorage.setItem("token", accessToken.token);
      navigate("/");
    },
    onError: () => {},
  });

  return { isLoading, isError, handleLogin };
};

const useAutoLogin = () => {
  const dispatch = useDispatch();

  const {
    isError,
    isLoading,
    mutate: autoLogin,
  } = useMutation(() => api.get("/auth/user/doctor", authHeader()), {
    onSuccess: ({ data }) => {
      dispatch(setUserDetails(data));
    },
  });
  return { isError, isLoading, autoLogin };
};
export { useLogin, useAutoLogin };
