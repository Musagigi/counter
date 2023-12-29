import { useLocation } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Login } from "../../components/login/Login";
import { SignUp } from "../../components/signup/SignUp";
import { Box } from "@mui/material";

export const Auth = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {location.pathname === "/login" ? <Login /> : <SignUp />}
      </Box>
    </>
  );
};
