import gerExternalAPI from "./outsideResorces.mjs";
import { progressBar } from "./utils.mjs";
import searchList from "./searchList.mjs";

window.onload = progressBar();
const getData = new gerExternalAPI
const search = new searchList(getData);
search.findSearch();
const category = ["people", "films", "vehicles", "species", "starships", "planets"]
category.forEach((e)=>{
    getData.getData(e)
})