import { templateMaker } from "./utils.mjs";
import templates from "./templateList.mjs";

export default class searchList{
    constructor(dataSource){
        this.dataSource = dataSource
    }
    async findSearch(){
        console.log("1")
        document.querySelector("#submit").addEventListener("click",() =>{
            let value = document.querySelector("#search");

        
            let data = this.dataSource.searchName(value.value) 
            if (data != "") {
                value.style = "border-bottom: none";
                
                console.log(data)
            }else{
    
                value.style = "border-bottom: red solid 10px";
            } 
        });
        
        
    }
}