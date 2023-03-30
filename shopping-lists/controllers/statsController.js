import * as listsService from "../services/listsService.js";
import { renderFile } from "../deps.js";

const responseDetails = {
    headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const counter = async () => {
    const data = {
      totalLists: await listsService.totalLists(),
      totalItems: await listsService.totalItems(),
    };

    return new Response(await renderFile("mainpage.eta", data), responseDetails);
};

export {counter};