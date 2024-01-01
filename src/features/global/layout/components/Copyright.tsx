import { Link, Typography } from "@mui/material";

export const Copyright = () => {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mt: 10, mb: 4 }}
      >
        {"Copyright © "}
        <Link color="inherit" href="www.linkedin.com/in/yossef-tuvian-796a90214">
          Yosy Tuvy
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }