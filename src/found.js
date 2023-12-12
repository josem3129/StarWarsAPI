import foundCard from "./foundList.mjs";
import gerExternalAPI from "./outsideResorces.mjs";
import { getParams, querySelect } from "./utils.mjs";
import searchList from "./searchList.mjs";


// loadHeaderFooter()
const param = getParams("search")
const element = querySelect("#main-list-search");
const findData = new gerExternalAPI;
const infoCards = new foundCard(element, findData, param);
const search = new searchList(findData)

search.findSearch();
infoCards.inToIt();
