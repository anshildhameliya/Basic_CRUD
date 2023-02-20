const router = require("./src/router/route");
const db = require("./src/db/db.config");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());

mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //  useCreateIndex: true,
    //  useFindAndModify: false
})
      .then(() => {
            console.log(`successfully connected on port no ${PORT}`);
      }).catch((e) => {
            console.log("Connection error", e);
      });
app.use(router);
app.listen(PORT, () => {
      console.log(`Connected at port ${PORT}`)
});