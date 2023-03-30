import { sql } from "../database/database.js";

const deactivateById = async (id) => {
  await sql`UPDATE shopping_lists SET active = false WHERE id = ${ id }`;
};

const create = async (name) => {
  await sql`INSERT INTO shopping_lists (name) VALUES (${ name })`;
};

const findAllActiveLists = async () => {
  return await sql`SELECT * FROM shopping_lists WHERE active = true ORDER BY name ASC`;
};

const totalLists = async () => {
  const row = await sql`SELECT COUNT(id) AS x FROM shopping_lists`;
  if (row && row[0]) {
    return row[0].x;  
  } else return 0;
};

const totalItems = async () => {
  const row = await sql`SELECT COUNT(id) AS x  FROM shopping_list_items`;
  if (row && row[0]) {
    return row[0].x;  
  } else return 0;
};
const deleteAllItems = async () => {
  return await sql`DELETE FROM shopping_list_items;`;
};
const deleteAllLists = async () => {
  await sql`DELETE FROM shopping_list_items;`;
  return await sql`DELETE FROM shopping_lists;`;
};
export { totalItems, totalLists, deactivateById, create, findAllActiveLists, deleteAllLists, deleteAllItems};
