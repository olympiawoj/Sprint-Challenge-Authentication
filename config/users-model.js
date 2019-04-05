const db = require("../database/dbConfig");

module.exports = {
  add
};

async function add(user) {
  const [id] = await db("users").insert(user);
  console.log(id);
  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
