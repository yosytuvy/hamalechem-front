import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { AvatarComponent } from "../MUI/AvatarComponent";

export const NavBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography pl={5} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hamalechem
          </Typography>
          {localStorage.getItem("HAMALECHEM_TOKEN") && <AvatarComponent />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
