import { templateMaker, toLocalStorage } from "./utils.mjs";
import templates from "./templateList.mjs";

const template = new templates;
export default class  listTemplate{

    constructor(dataSource, param, element){
        this.dataSource = dataSource;
        this.param = param;
        this.element = element;
        this.pageNum = 0;
    }

    async intoIt(){
        const list = await this.dataSource.getData(this.param)
        // console.log(list)
        toLocalStorage(this.param)
        this.renderList(list[this.pageNum]);
        document.querySelector("#next").addEventListener("click", this.getNextPage.bind(this))
        
    }

    async getNextPage(){
        this.pageNum++;
        if (this.element != "") {
           this.element.innerHTML = "";
        }
        const list = await this.dataSource.getData(this.param)
        this.renderList(list[this.pageNum]);
    }
    renderList(list){
        if (this.param === "people") {
            templateMaker(template.templatePeople, this.element, list);            
        }else if(this.param === "films"){
            templateMaker(template.templateFilm, this.element, list);
        }else if(this.param === "species"){
            templateMaker(template.templateSpecies, this.element, list);
        }else if(this.param === "vehicles" || this.param === "starships"){
            templateMaker(template.templateShipVehicle, this.element, list);
        }else if(this.param === "planets"){
            templateMaker(template.templatePlanets, this.element, list);
        }else {
            console.error("not found");
        }
    }
}