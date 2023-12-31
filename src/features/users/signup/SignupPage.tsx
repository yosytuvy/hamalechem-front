import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Copyright } from "../../layout/components/Copyright";
import { RadioGroup, FormControlLabel, Radio, FormLabel } from "@mui/material";
import { useForm } from "react-hook-form";
import { To, useNavigate } from "react-router-dom";
import useSignUp from "./service/useSignup";
import { SignupInterface } from "../interfaces/SignupInterface";
import ROUTES from "../../../routers/RouterModel";
import {
  Email_validation,
  FullName_validation,
  Password_validation,
  Roll_validation,
} from "../helpers/validation";

export const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignupInterface>({ mode: "onChange", criteriaMode: "all" });

  const navigate = useNavigate();
  const navigateTo = (to: To) => navigate(to);
  const signUpReq = useSignUp();

  const onSubmit = (data: SignupInterface) => {
    signUpReq(data)
      .then(() => navigateTo(ROUTES.login))
      .catch((error) => console.log(error));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="fullName"
                label="Full Name"
                autoFocus
                helperText={errors.fullName?.message}
                error={errors.fullName ? true : false}
                {...register("fullName", FullName_validation)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                helperText={errors.email?.message}
                error={errors.email ? true : false}
                {...register("email", Email_validation)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                helperText={errors.password?.message}
                error={errors.password ? true : false}
                {...register("password", Password_validation)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel>User type:</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                sx={{ justifyContent: "center" }}
              >
                <FormControlLabel
                  value="solider"
                  control={<Radio />}
                  label="solider"
                  {...register("userType", Roll_validation)}
                />
                <FormControlLabel
                  value="contributor"
                  control={<Radio />}
                  label="contributor"
                  {...register("userType", Roll_validation)}
                />
              </RadioGroup>
              {errors.userType && (
                <Typography sx={{color:"red"}}>{errors.userType?.message}</Typography>
              )}
            </Grid>
          </Grid>
          <Button
            disabled={!isValid}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 3 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-start">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
};
