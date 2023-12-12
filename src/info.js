import { loadHeaderFooter, getParams, querySelect } from "./utils.mjs";
import infoCard from "./infoCard.mjs";
import gerExternalAPI from "./outsideResorces.mjs";
import searchList from "./searchList.mjs";

// loadHeaderFooter();

const param = getParams("search")
const element = querySelect("#main-list-info");
const infoTemp = new gerExternalAPI;
const infoCards = new infoCard(element, infoTemp, param);
const search = new searchList(infoTemp)
search.findSearch();
infoCards.inToIt();
