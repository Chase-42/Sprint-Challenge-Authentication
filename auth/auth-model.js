const db = require("../database/dbConfig.js");

function find() {
  return db("users").select("id", "username");
}

function findBy(filter) {
  return db("users")
    .where(filter)
    .first();
}

function findById(id) {
  return db("users")
    .where({ id })
    .first()
    .select("id", "username");
}

async function add(user) {
  const [id] = await db("users").insert(user);
  return findById(id);
}

module.exports = {
  find,
  findBy,
  findById,
  add
};
