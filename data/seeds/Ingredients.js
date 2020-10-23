
exports.seed = async function(knex) {
 await knex("Ingredients").insert([
   {name:"5 oval-shaped chocolate-filled sandwich cookies"},
   {name:"1 tube black gel icing"},
   {name:"1 chocolate iced sheet cake, 9 x 13 (22x33 cm)"},
   {name:"1 ½ cups chocolate sandwich cookies, crumbs"},
   {name:"¼ cup coconut flakes, green-dyed"},
 ])
};
