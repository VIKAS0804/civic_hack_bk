require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

const apiRoutes = require("./routes/index");
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
