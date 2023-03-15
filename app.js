const express = require("express");
const { connect } = require("./config/mongoConnection");
const app = express()
const port = 4001;
// const router = require("./routes");
// const cors = require("cors");

// app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  const waktu = new Date()
  console.log( typeof waktu.getHours());
});

// app.use("/user", router);

connect().then(() => {
  app.listen(port, () => {
    console.log(`App Ready to Run on port ${port}`);
  });
});
