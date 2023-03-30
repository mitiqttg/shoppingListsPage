import { serve } from "./deps.js";
import { configure } from "./deps.js";
import * as single_list_Controller from "./controllers/single_list_Controller.js";
import * as lists_Controller from "./controllers/lists_Controller.js";
import * as statsController from "./controllers/statsController.js";

configure({
  views: `${Deno.cwd()}/views/`,
});

const handleRequest = async (request) => {
  const url = new URL(request.url);
  if (url.pathname === "/" && request.method === "GET") {
    return await statsController.counter();
  } else if (url.pathname === "/lists" && request.method === "POST") {
    return await lists_Controller.addShoppingList(request);
  } else if (url.pathname === "/lists" && request.method === "GET") {
    return await lists_Controller.viewShoppingLists(request);
  } else if (url.pathname.match("lists/[0-9]+") && request.method === "GET") {
    return await single_list_Controller.viewList(request);
  } else if (url.pathname.match("lists/[0-9]+/items/[0-9]+/collect") && request.method === "POST") {
    return await single_list_Controller.item_collected(request);
  } else if (url.pathname.match("lists/resetItems") && request.method === "POST") {
    return await lists_Controller.resetItems(request);
  } else if (url.pathname.match("lists/resetLists") && request.method === "POST") {
    return await lists_Controller.resetLists(request);
  } else if (url.pathname.match("lists/[0-9]+/deactivate") && request.method === "POST") {
    return await lists_Controller.deactivateList(request);
  } else if (url.pathname.match("lists/[0-9]+") && request.method === "POST") {
    return await single_list_Controller.create_item(request);
  } else {
    return new Response("Not found", { status: 404 });
  }
};
serve(handleRequest, { port: 7777 });
