import { Box, Grid } from "@mui/material";
import { Product } from "../components/Product";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { AllProductsInterface } from "../interfaces/AllProductsInterface";
import { ProductInterface } from "../interfaces/ProductInterface";
import { GET_ALL_PRODUCTS } from "../../global/apollo/queries/apolloQueries";
import LoadingPage from "../../global/pages/LoadingPage";
import ErrorPage from "../../global/pages/ErrorPage";
import { Navigation } from "../../global/layout/components/Navigation";

const RequestsPage = () => {
  const {
    data: allProducts,
    loading,
    error,
  } = useQuery<AllProductsInterface>(GET_ALL_PRODUCTS);

  const [requests, setRequests] = useState<ProductInterface[]>([]);

  useEffect(() => {
    if (allProducts) {
      setRequests(allProducts.allProducts.requests);
    }
  }, [allProducts]);

  if (loading) return <LoadingPage />;
  if (error) return <ErrorPage />;
  return (
    <>
      <Navigation />
      {requests && (
        <Box sx={{ padding: "15px" }}>
          <Grid container rowSpacing={4} columnSpacing={2}>
            {requests.map((request, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <Product
                  _id={request._id!}
                  details={request.details}
                  image={request.image}
                  name={request.image}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default RequestsPage;
