const express = require("express");
const v1CouncilRouter = require("./v1/routes/councilRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1/councils", v1CouncilRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
