import { Grid, Skeleton } from "@mui/material";
import { Navigation } from "../layout/components/Navigation";

const LoadingPage = () => {
  return (
    <>
      <Navigation />
      <Grid container rowSpacing={4} columnSpacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Skeleton variant="rectangular" height={200} />
          <Skeleton variant="text" height={40} />
          <Skeleton variant="text" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Skeleton variant="rectangular" height={200} />
          <Skeleton variant="text" height={40} />
          <Skeleton variant="text" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Skeleton variant="rectangular" height={200} />
          <Skeleton variant="text" height={40} />
          <Skeleton variant="text" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Skeleton variant="rectangular" height={200} />
          <Skeleton variant="text" height={40} />
          <Skeleton variant="text" />
        </Grid>
      </Grid>
    </>
  );
};

export default LoadingPage;
