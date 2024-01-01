import { Box, Grid } from "@mui/material";
import { Product } from "../../general/components/Product";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../../../apollo/queries/apolloQueries";
import { Navigation } from "../../layout/components/Navigation";
import { useEffect, useState } from "react";
import { AllProductsInterface } from "../../general/interfaces/AllProductsInterface";
import { ProductInterface } from "../../general/interfaces/ProductInterface";

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
      console.log(requests);
    }
  }, [allProducts]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
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
