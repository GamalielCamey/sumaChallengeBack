const app = require("./app.js");
const db = require("./models");

const PORT = process.env.PORT || 3001;

db.sequelize
  .sync()
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
