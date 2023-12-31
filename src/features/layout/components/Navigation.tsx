import { Stack, Button } from "@mui/material";
import ROUTES from "../../../routers/RouterModel";
import { useLocation } from "react-router-dom";

export const Navigation = () => {
  const { pathname } = useLocation();
  return (
    <Stack
      direction={"row"}
      spacing={3}
      justifyContent="center"
      alignItems="center"
      borderBottom={3}
      borderColor="divider"
      mb={4}
    >
      <Button
        variant="text"
        sx={{
          ...(pathname === "/donations" && { textDecoration: "underline" }),
          fontSize: "1.2rem",
        }}
        href={ROUTES.donations}
      >
        Donations
      </Button>
      <Button
        variant="text"
        sx={{
          ...(pathname === "/requests" && { textDecoration: "underline" }),
          fontSize: "1.2rem",
        }}
        href={ROUTES.requests}
      >
        Requests
      </Button>
    </Stack>
  );
};
