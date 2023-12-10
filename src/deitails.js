import gerExternalAPI from "./outsideResorces.mjs";
import { loadHeaderFooter, getParams, querySelect } from "./utils.mjs";
import listTemplate from "./daetailList.mjs";

loadHeaderFooter();

const category = getParams("category");
const element = querySelect("#main-list");
const data = new gerExternalAPI();
const makeList = new listTemplate(data, category, element)

makeList.intoIt();