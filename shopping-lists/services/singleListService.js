import { sql } from "../database/database.js";

const createItem = async (id,name) => {
  await sql`INSERT INTO
    shopping_list_items (shopping_list_id,name)
    VALUES (${id},${name})`;
};

const itemCollect = async (id) => {
  await sql`UPDATE shopping_list_items
    SET collected = true WHERE id = ${id}`;
};

const listName = async (id) => { 
  const row = await sql`SELECT name AS ten FROM shopping_lists WHERE id = ${id}`;
  return row[0].ten;  

};

const collected = async (id) => {
  return await sql`SELECT * FROM shopping_list_items WHERE shopping_list_id = ${id} AND collected = true ORDER BY name ASC`;
};

const uncollected = async (id) => {
  return await sql`SELECT * FROM shopping_list_items WHERE shopping_list_id = ${id} AND collected = false ORDER BY name ASC`;
};

export { listName, collected, uncollected, createItem, itemCollect };
