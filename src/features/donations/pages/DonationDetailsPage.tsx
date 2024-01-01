import { Grid, Paper } from "@mui/material";



const DonationDetailsPage = () => {
  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item xs={12} sm={4} md={7}></Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        ></Grid>
      </Grid>
    </>
  );
};

export default DonationDetailsPage;
