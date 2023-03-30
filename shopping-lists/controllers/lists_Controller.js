import { renderFile } from "../deps.js";
import * as listsService from "../services/listsService.js";
import * as requestUtils from "../utils/requestUtils.js"

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};


const addShoppingList = async (request) => {
  const formData = await request.formData();
  const name = formData.get("name");  
  await listsService.create(name);  
  return requestUtils.redirectTo("/lists");
};

const resetLists = async () => {
  await listsService.deleteAllLists();
  return requestUtils.redirectTo("/lists");
};

const resetItems = async (request) => {
  await listsService.deleteAllItems();
  return requestUtils.redirectTo("/lists");
};

const viewShoppingLists = async () => {
  const data = {
    lists: await listsService.findAllActiveLists(),
  };
  return new Response(await renderFile("lists.eta", data), responseDetails);
};

const deactivateList = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  await listsService.deactivateById(urlParts[2]);

  return requestUtils.redirectTo("/lists");
};

export { addShoppingList, deactivateList, viewShoppingLists, resetItems, resetLists };
