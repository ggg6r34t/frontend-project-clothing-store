import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import { Box, Container, Grid, Typography } from "@mui/material";
import { v4 as uuid } from "uuid";

import { AppDispatch, RootState } from "../../redux/store";
import { fetchProductData } from "../../redux/thunk/products";
import ProductItem from "./ProductItem";
import SearchForm from "../form/SearchForm";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box
      sx={{
        position: "relative",
        top: "300px",
        display: "inline-flex",
      }}
    >
      <CircularProgress size={300} variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function ProductList() {
  const products = useSelector((state: RootState) => state.products.products);
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const [progress, setProgress] = useState(10);

  const fetchDispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    fetchDispatch(fetchProductData());

    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, [fetchDispatch]);

  if (isLoading) {
    return <CircularProgressWithLabel value={progress} />;
  }

  return (
    <Container sx={{ mt: 6 }}>
      <SearchForm />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((product) => (
          <Grid item xs={2} sm={4} md={4} key={uuid()}>
            <ProductItem key={uuid()} product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}