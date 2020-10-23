
exports.seed = async function(knex) {
 await knex("Instructions").insert([
   {quantity:"10.00",ingredients_id:"1"},
   {quantity:"10.00",ingredients_id:"2"},
   {quantity:"20.00",ingredients_id:"3"},
   {quantity:"15.00",ingredients_id:"4"},
   {quantity:"10.00",ingredients_id:"5"},
 ])
};
