import gerExternalAPI from "./outsideResorces.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();
const getData = new gerExternalAPI
const category = ["people", "films", "vehicles", "species", "starships", "planets"]
category.forEach((e)=>{
    getData.getData(e)
})