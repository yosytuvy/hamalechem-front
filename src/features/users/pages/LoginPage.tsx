import { useForm } from "react-hook-form";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoginInterface } from "../interfaces/LoginInterface";
import useLogin from "../services/useLogin";
import { To, useNavigate } from "react-router-dom";
import ROUTES from "../../global/routers/RouterModel";
import { Email_validation, Password_validation } from "../helpers/validation";
import { Copyright } from "../../global/layout/components/Copyright";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginInterface>({ mode: "onChange", criteriaMode: "all" });
  const loginReq = useLogin();
  const navigate = useNavigate();
  const navigateTo = (to: To) => navigate(to);
  const onSubmit = (data: LoginInterface) => {
    loginReq(data)
      .then(() => {
        const details = JSON.parse(localStorage.getItem("User_Details")!);
        if (details.userType === "solider") navigateTo(ROUTES.donations);
        if (details.userType === "contributor") navigateTo(ROUTES.requests);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            helperText={errors.email?.message}
            error={errors.email ? true : false}
            {...register("email", Email_validation)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            helperText={errors.password?.message}
            error={errors.password ? true : false}
            {...register("password", Password_validation)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!isValid}
          >
            Login
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2" align="center">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
}
