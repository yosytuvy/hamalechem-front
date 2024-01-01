import { Box, Grid } from "@mui/material";
import { Product } from "../components/Product";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { AllProductsInterface } from "../interfaces/AllProductsInterface";
import { ProductInterface } from "../interfaces/ProductInterface";
import { GET_ALL_PRODUCTS } from "../../global/apollo/queries/apolloQueries";
import ErrorPage from "../../global/pages/ErrorPage";
import LoadingPage from "../../global/pages/LoadingPage";
import { Navigation } from "../../global/layout/components/Navigation";

const DonationPage = () => {
  const {
    data: allProducts,
    loading,
    error,
  } = useQuery<AllProductsInterface>(GET_ALL_PRODUCTS);

  const [donations, setRequests] = useState<ProductInterface[]>([]);

  useEffect(() => {
    if (allProducts) {
      setRequests(allProducts.allProducts.donations);
    }
  }, [allProducts]);

  if (loading) return <LoadingPage />;
  if (error) return <ErrorPage />;
  return (
    <>
      <Navigation />
      <Box sx={{ padding: "15px" }}>
        <Grid container rowSpacing={4} columnSpacing={2}>
          {donations.map((donation, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Product
                _id={donation._id!}
                details={donation.details}
                image={donation.image}
                name={donation.image}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default DonationPage;
