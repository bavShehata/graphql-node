const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const app = express();

app.listen(4000, () => {
  console.log("Listening for requests on port 4000");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
  })
);
