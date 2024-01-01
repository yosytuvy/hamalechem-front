import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CardActionArea } from "@mui/material";

interface ProductProp {
  _id: string;
  name: string;
  image: string;
  details: string;
}

export const Product = ({ _id, details, image, name }: ProductProp) => {
  const handleClick = (_id: string) => {
    console.log(_id);
  };

  return (
    <Card onClick={() => handleClick(_id)}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {details}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
