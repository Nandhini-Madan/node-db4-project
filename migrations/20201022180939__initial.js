
exports.up = async function(knex) {
  await knex.schema.createTable("Receipe",(table)=>{
      table.increments("id")
      table.text("name").notNull().unique()
      table.text("receipeOwner").defaultTo("Anonymous")
  })
  await knex.schema.createTable("Ingredients",(table)=>{
      table.increments("id")
      table.text("name").notNull().unique()
  })
  await knex.schema.createTable("Instructions",(table)=>{
      table.increments("id")
      table.float("quantity")
      table
            .integer("ingredients_id")
            .references("id")
            .inTable("Ingredients")
            .onDelete("SET NULL")
            .onUpdate("CASCADE")
  })
  await knex.schema.createTable("Receipe_Ingredients",(table)=>{
      table
            .integer("Receipe_id")
            .references("id")
            .inTable("Receipe")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
            .notNull()
      table 
            .integer("Ingredients_id")
            .references("id")
            .inTable("Ingredients")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
            .notNull()
      table.text("stepsToFollow").notNull()
        table.time("duration")
        table.integer("serveQuantity")
        table.date("created").notNull()
        // defaults to the current date at the time the row is inserted
        .defaultTo(knex.raw("current_timestamp"))
        table.primary(["Receipe_id","Ingredients_id"])


  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("Receipe_Ingredients")
    await knex.schema.dropTableIfExists("Instructions")
    await knex.schema.dropTableIfExists("Ingredients")
    await knex.schema.dropTableIfExists("Receipe")
  
};
