import React, { useContext } from "react";
import ComponentContext from "../Contaxt/ComponentProvider.jsx";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Favourite = () => {
  const { favorites, removeFavorite } = useContext(ComponentContext);

  return (
    <div
      className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center
     text-center gap-10 py-8 font-bold"
    >
      {favorites.length === 0 ? (
        <div
          className="
            text-center text-4xl 
            font-bold text-red-500
          "
        >
          <p> Cart is empty.</p>
        </div>
      ) : (
        favorites.map((item) => (
          <Card key={item.id} className="w-64 h-[19rem]">
            <CardContent className="text-center">
              <Typography variant="h5" component="div">
                {item.fruit}
              </Typography>
              <CardMedia
                component="img"
                image={item.photo}
                alt={`Image of ${item.fruit}`}
                className="text-center size-48 bg-slate-600"
              />
              <Button
                size="medium"
                variant="contained"
                className="bg-red-400 hover:bg-red-600"
                style={{ marginTop: "12px" }}
                onClick={() => removeFavorite(item.id)}
              >
                Remove Favourite
              </Button>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default Favourite;
