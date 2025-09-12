const express = require("express");
const sequelize = require("./config/database");
const bookRoutes = require("./routes/bookRoutes");
const logger = require("./middleware/logger");    

const app = express();
app.use(express.json());
app.use(logger);

app.use("/books", bookRoutes);

const PORT = 3000;

sequelize.sync().then(() => {
  console.log("Database connected and synced");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error("DB connection error:", err);
});
