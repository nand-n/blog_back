// neo4j.js

const neo4j = require('neo4j-driver');

const connectNeo4j = async () => {
  const driver = neo4j.driver(process.env.NEO4J_URI, neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD));
  const session = driver.session();
  console.log('Connected to Neo4j');
  return session;
};

module.exports = connectNeo4j;