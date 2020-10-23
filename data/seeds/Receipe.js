
exports.seed = async function(knex) {
await knex("Receipe").insert([
  { name:"Chocolate Cake Graveyard",receipeOwner:"Tasty Team"},
  { name:"Bloody Cupcakes",receipeOwner:"Tasty Team"},
])
};
