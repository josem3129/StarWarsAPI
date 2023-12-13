import { templateMaker, toLocalStorage } from "./utils.mjs";
import templates from "./templateList.mjs";

const template = new templates;
export default class  listTemplate{

    constructor(dataSource, param, element){
        this.dataSource = dataSource;
        this.param = param;
        this.element = element;
        this.pageNum = 0;
        this.length = 0;
    }

    async intoIt(){
        const list = await this.dataSource.getData(this.param)
        // console.log(list)
        console.log(list.length)
        this.length = list.length;
        if (this.length <= 1) {
            document.querySelector(".buttonDiv").style = "display: none"
            document.querySelector(".nextTwo").style = "display: none"
        }
        document.querySelector(".pageNumNext").textContent = `Page- ${this.pageNum + 1}/${this.length}`
        document.querySelector(".nextPre").style = "display: none"
        document.querySelector(".nextPreTwo").style = "display: none"
        toLocalStorage(this.param)
        this.renderList(list[this.pageNum]);
        document.querySelector(".next").addEventListener("click", this.getNextPage.bind(this))
        document.querySelector(".nextTwo").addEventListener("click", this.getNextPage.bind(this))
        document.querySelector(".nextPre").addEventListener("click", this.getPrevPage.bind(this))
        document.querySelector(".nextPreTwo").addEventListener("click", this.getPrevPage.bind(this))
        
    }

    async getNextPage(){
        this.pageNum++;
        document.querySelector(".pageNumNext").textContent = `Page- ${this.pageNum + 1}/${this.length}`
        if (this.pageNum + 1 == this.length) {
            document.querySelector(".next").style = "display: none"
            document.querySelector(".nextTwo").style = "display: none"
            
        }
        if (this.element != "") {
           this.element.innerHTML = "";
           
        }
        document.querySelector(".nextPre").style = "display: block"
        document.querySelector(".nextPreTwo").style = "display: block"
        const list = await this.dataSource.getData(this.param)
        this.renderList(list[this.pageNum]);
    }   
    async getPrevPage(){
        this.pageNum--;
        document.querySelector(".pageNumNext").textContent = `Page- ${this.pageNum + 1}/${this.length}`
        if (this.pageNum  == 0) {
            document.querySelector(".nextPre").style = "display: none"
            document.querySelector(".nextPreTwo").style = "display: none"
        }else if(this.pageNum - 1  < this.length){
            document.querySelector(".next").style = "display: block"
            document.querySelector(".nextTwo").style = "display: block"
        }
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