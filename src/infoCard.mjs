import gerExternalAPI from "./outsideResorces.mjs";
import { templateMaker, getLocalStorage } from "./utils.mjs";
import infoTemplates from "./infoTemplate.mjs";
const getAPI = new gerExternalAPI;
const infoTemplate = new infoTemplates

export default class infoCard{
    constructor(element, dataSource, name){
        this.element = element;
        this.dataSource = dataSource;
        this.name =  name;
        this.category = "";
    }

    inToIt(){
        this.category = getLocalStorage("category")
        const object =  getAPI.getSpanData(this.name, this.category)
        this.displayTemplate(object, this.category)
    }

    displayTemplate(list, param){
        if (param === "people") {
            templateMaker(infoTemplate.infoTemplatePeople, this.element,list)
        }else if(param === "films"){
            templateMaker(infoTemplate.infoTemplateFilm, this.element,list)
        }else if(param === "species"){
            templateMaker(infoTemplate.infoTemplateSpecies, this.element,list)
        }else if(param === "vehicles" || param === "starships"){
            templateMaker(infoTemplate.infoTemplateShipVehicle, this.element,list)
        }else if (param === "planets") {
            templateMaker(infoTemplate.infoTemplatePlanets, this.element,list)
        }else {
            console.error("not found");
        }
    }

    
}