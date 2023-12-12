import { templateMaker } from "./utils.mjs";
import infoTemplates from "./infoTemplate.mjs";
const infoTemplate = new infoTemplates


export default class foundCard{
    constructor(element, dataSource, name){
        this.element = element;
        this.dataSource = dataSource;
        this.name =  name;
    }

    inToIt(){
        const object =  this.dataSource.findSearch(this.name)
        object.map((e)=>{
            this.displayTemplate(object, e.category)

        })
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