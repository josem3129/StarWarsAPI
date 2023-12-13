

export default class searchList{
    constructor(dataSource){
        this.dataSource = dataSource
    }
    async findSearch(){
        let list = [];
        console.log("1")
        document.querySelector("#submit").addEventListener("click",() =>{
            const mainElement = document.querySelector(".search-results");        
            let value = document.querySelector("#search");
            let data = this.dataSource.searchName(value.value);

            if (data != "") {
                value.style = "border-bottom: none";
                data.forEach(element => {
                    let name = element.name;
                    if (name == undefined) {
                        name = element.title;
                    }
                    list.push(`<a href="./foundSearch/index.html?search=${name}">
                    <div class="result">
                    <p>${name}</p>
                    </div>
                    </a>`)
                });
                
                console.log(data)
            }else{
    
                value.style = "border-bottom: red solid 10px";
                mainElement.innerHTML = `${value.value} not found`
            } 
            mainElement.innerHTML = "";
            for (let i = 0; i < 3; i++) {
                mainElement.innerHTML += list[i];
                
            }
            list = [];
        });
        
    }
    
}