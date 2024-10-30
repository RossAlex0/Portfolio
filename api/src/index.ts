require("dotenv").config();

import config from "./config";

const app = config;

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
