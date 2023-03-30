import * as singleListService from "../services/singleListService.js";
import * as requestUtils from "../utils/requestUtils.js";
import { renderFile } from "../deps.js";

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const create_item = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  const formData = await request.formData();
  const name = formData.get('name');
  await singleListService.createItem(urlParts[2],name);
  return requestUtils.redirectTo(`/lists/${urlParts[2]}`);
};

const item_collected = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  await singleListService.itemCollect(urlParts[4]);

  return requestUtils.redirectTo(`/lists/${urlParts[2]}`);
};

const viewList = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  const data = {
    list_id: urlParts[2],
    list_name: await singleListService.listName(urlParts[2]),
    uncollectedlist: await singleListService.uncollected(urlParts[2]),
    collectedlist: await singleListService.collected(urlParts[2]),
  };

  return new Response(await renderFile("list.eta", data), responseDetails);
};


export { viewList, create_item, item_collected };
