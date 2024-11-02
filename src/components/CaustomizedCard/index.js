import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

export default function CaustomizedCard(props) {
  console.log(props);
  return (
    <Card sx={{ maxWidth: 345, margin: "20px 10px", widows: 400 }}>
      <CardMedia
        component="img"
        height="220"
        image={props.urls.small}
        alt="green iguana"
      />
      <CardActions>
        <Button size="small" onClick={() => window.open(props.urls.full)}>
          Full Resolution
        </Button>
        <Button
          size="small"
          onClick={() =>
            window.open(`https://unsplash.com/@${props.user.username}`)
          }
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
