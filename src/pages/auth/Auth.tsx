import { useLocation } from "react-router-dom";
import { Login } from "../../components/login/Login";
import { SignUp } from "../../components/signup/SignUp";
import { Box } from "@mui/material";

export const Auth = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box component="form">
        {location.pathname === "/login" ? <Login /> : <SignUp />};
      </Box>
    </Box>
  );
};
