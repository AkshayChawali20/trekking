const { Pool } = require("pg")
const config = require("./config")

const db = new Pool({
    connectionString: config.DATABASE_URL
})

// const db = new Pool({
//     host: "localhost",
//     user: "postgres",
//     database: "tms",
//     password: "root",
//     port: "5432"
// })
module.exports = db