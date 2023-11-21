const createDefaultKnexClient = () => {
  const Knex = require("knex");
  const config = require("./knexfile");

  return Knex(config["development"]);
};

const createDbModels = (knex = createDefaultKnexClient()) => {
  return {
    // quotes: require("./quotes")(knex),
    // authors: require("./authors")(knex),
  };
};

module.exports = {
  createDbModels,
};
