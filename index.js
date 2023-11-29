const express = require("express");
const app = express();
const { hotels } = require("./data");
app.get("/api/id/:id", (req, res) => {
  //console.log(hotel)
  const { id } = req.params;
  console.log(id);
  const singlehotel = hotels.find((hotel) => hotel.id === Number(id)); //Number(ID)
  console.log(singlehotel);
  res.json(singlehotel);
});
//get with id
app.get("/api/hotel/query", (req, res) => {
  ///api/hotel/query?name=Luxu
  const { name } = req.query;
  let list = [...hotels];
  console.log(name, req.query);
  list = list.filter((hotel) => {
    return hotel.name.startsWith(name);
  });
  if (list.length < 1) {
    return res.status(200).json("hotel not found");
  } else {
    res.status(200).json(list);
  }
});
//get all hotel
app.get("/api/all", (req, res) => {
  const hotel = hotels;
  res.json(hotel);
});
//get by price
app.get("/api/priceunder/:price/bed/:bed", (req, res) => {
  const userPrice = parseInt(req.params.price);
  let userBed = req.params.bed;
  userBed = userBed.toString() + "bed";

  if (userBed !== "1bed" && userBed !== "2bed") {
    return res
      .status(400)
      .json({ error: "Invalid bed type. Please provide '1' or '2'." });
  }

  const sortedHotels = hotels
    .filter((hotel) => hotel.price[userBed] <= userPrice)
    .sort((hotelA, hotelB) => {
      const priceA = hotelA.price[userBed];
      const priceB = hotelB.price[userBed];

      if (priceA < priceB) {
        return -1;
      } else if (priceA > priceB) {
        return 1;
      }
      return hotelA.id - hotelB.id;
    });
  if (sortedHotels.length < 1) {
    return res.status(200).json("hotel not found in your price range lol");
  }

  res.json(sortedHotels);
});
app.listen(5000, () => {
  console.log("hi");
});
