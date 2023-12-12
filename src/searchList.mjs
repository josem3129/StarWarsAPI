

export default class searchList{
    constructor(dataSource){
        this.dataSource = dataSource
    }
    async findSearch(){
        console.log("1")
        document.querySelector("#submit").addEventListener("click",() =>{
            let value = document.querySelector("#search");
            const mainElement = document.querySelector(".search-results");        
            let data = this.dataSource.searchName(value.value);

            if (data != "") {
                value.style = "border-bottom: none";
                data.forEach(element => {
                    let name = element.name;
                    if (name == undefined) {
                        name = element.title;
                    }
                    mainElement.innerHTML = `<a href="../foundSearch/index.html?search=${name}">
                    <div class="search-result">
                    <p>${name}</p>
                    </div>
                    </a>`
                });
                
                console.log(data)
            }else{
    
                value.style = "border-bottom: red solid 10px";
                mainElement.innerHTML = `${value.value} not found`
            } 
        });
        
        
    }
    
}