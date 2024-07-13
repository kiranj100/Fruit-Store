import React, { useState, useEffect, useContext } from "react";
import ComponentContext from "../Contaxt/ComponentProvider.jsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Data from "../../Data.js";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function All() {
  const { searchParam, setSearchParam, addFavorite } =
    useContext(ComponentContext);
  const [loading, setLoading] = useState(true);

  const filteredData = Data.filter((item) =>
    item.fruit.toLowerCase().includes(searchParam.toLowerCase())
  );

  useEffect(() => {
    setLoading(false);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <form id="top" className="text-center py-5" onSubmit={submitHandler}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="Search Fruit"
          className="py-2 px-2 ring-1 sm:w-1/3 md:max-w-5xl 
          rounded-md shadow-lg focus:ring-blue-600"
        />
      </form>
      <div
        className="grid xl:grid-cols-4 
      lg:grid-cols-3 md:grid-cols-2 
      justify-items-center text-center gap-16 py-8 font-bold"
      >
        {loading ? (
          Array(12)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="w-full">
                <Skeleton height={20} width={100} className="mb-2" />
                <Skeleton
                  height={200}
                  width={200}
                  className="xl:size-60 lg:size-60 md:size-60
                     sm:size-10 size-60  rounded-2xl 
                     shadow-xl"
                />
              </div>
            ))
        ) : filteredData.length === 0 ? (
          <p className="text-center text-2xl text-red-600">
            No results found for "{searchParam}"
          </p>
        ) : (
          filteredData.map((item) => (
            <Card key={item.id} className="w-64 h-[20rem]">
              <CardContent className="text-center">
                <Typography
                  variant="h5"
                  component="div"
                  style={{
                    fontWeight: "bold",
                    marginBottom: "5px",
                  }}
                >
                  {item.fruit}
                </Typography>
                <CardMedia
                  component="img"
                  image={item.photo}
                  className="text-center size-48 "
                />
                <Link to="/favourite">
                  <Button
                    size="medium"
                    variant="contained"
                    className="bg-blue-400 hover:bg-blue-600"
                    style={{ marginTop: "12px" }}
                    onClick={() => addFavorite(item)}
                  >
                    Add Favourite
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </main>
  );
}

export default All;
