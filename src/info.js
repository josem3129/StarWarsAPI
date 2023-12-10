import { loadHeaderFooter, getParams, querySelect } from "./utils.mjs";
import infoCard from "./infoCard.mjs";
import gerExternalAPI from "./outsideResorces.mjs";

loadHeaderFooter();

const param = getParams("search")
const element = querySelect("#main-list");
const infoTemp = new gerExternalAPI;
const infoCards = new infoCard(element, infoTemp, param);

infoCards.inToIt();
