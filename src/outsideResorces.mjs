
const url = "https://swapi.dev/api/"


export default class gerExternalAPI{

    async getData (category){
        const storage = localStorage.getItem(category)
        if ( storage === null) {
            let count = "";
            let next = "";
            let pageNum = 0;
            let objectArray = [];
             while (count != undefined) {
                pageNum++
                let response;
                if (next != null) {
                    response = await fetch(`${url}${category}/?page=${pageNum}`);
                    try {
                        const data = await response.json()
                        // const docs = data.docs
                        console.log(data)
                        if (count != undefined) {
                            objectArray.push(data.results)
                           }
                           count = data.count;
                           next = data.next;
   
                        
                       } catch (error) {
                           console.log("file not written")
                       }
                }else{
                    count = undefined;
                }
                    
                }
                localStorage.setItem(`${category}`, JSON.stringify(objectArray))
            
        }else{
            return JSON.parse(storage)
        }
        
    }

    getSpanData(name, category){

        var nameInfo = []; 
        
        let API = JSON.parse(localStorage.getItem(category));

        if (API === null) {
            return alert("error no data found")
        }

        API.filter((object)=>{
            object.forEach(element => {
                let ObjectName = element.name;
    
                if (ObjectName === undefined) {
                    ObjectName = element.title;
                } 
    
                if(ObjectName.toLowerCase() == name.toLowerCase()){
                    nameInfo.push(object);
                }else{
                    return {Name: `Not found`}
                }
                
            });
            
        })
        
        return nameInfo
    }  

    DataNameFinder(name){
        let nameFound = "";
        let nameList = [];
        const category = ["people", "films", "vehicles", "species", "starships", "planets"]
        function filter(category){

            let API = JSON.parse(localStorage.getItem(category));
            if (API === null) {
               console.log(`error unable to find info`)
            }
            API.filter((object)=>{
                object.forEach(element => {
                    let objectUrl = element.url
    
                    if (typeof name == "string") {
                        if(objectUrl == name){
                            nameFound = element.name;
                            if (nameFound === undefined) {
                                nameFound = element.title;
                            }
                        }
                    } else {
                        name.forEach(element => {
                            if(objectUrl == element){
                                const foundName = element.name
                                if (foundName === undefined) {
                                nameList.push(element.title);
                                }
                                nameList.push(element.name);
                            }
                        });
                    };

                });

               
            })
        }
        
        category.forEach((e)=>{
            filter(e);
        })

        return nameFound;
    }  

    searchName(search){
        if (search!= "") {
            
            const category = ["people", "films", "vehicles", "species", "starships", "planets"]
    
            var objectList = []; 
    
            function filter(category){
    
                let API = JSON.parse(localStorage.getItem(category));
                if (API === null) {
                   console.log(`error unable to find info`)
                }
                API.filter((object)=>{

                    
                    object.forEach(element => {
                        let ObjectName = element.name;
                        if (ObjectName === undefined) {
                            ObjectName = element.title;
                        } 
                        if(ObjectName.toLowerCase().includes(search.toLowerCase())){
                            element.category = category;
                            objectList.push(element)
                        }
        
                       
                    });
                   
                })
            }
            
            category.forEach((e)=>{
                filter(e);
            })

            return objectList;
        }
    } 

    findSearch(name){
        
        const category = ["people", "films", "vehicles", "species", "starships", "planets"]

        var objectList = []; 

        function filter(category){

            let API = JSON.parse(localStorage.getItem(category));
            if (API === null) {
                console.log(`error unable to find info`)
            }
            API.filter((object)=>{

                
                object.forEach(element => {
                    let ObjectName = element.name;
                    if (ObjectName === undefined) {
                        ObjectName = element.title;
                    } 
                    if(ObjectName.toLowerCase() === (name.toLowerCase())){
                        element.category = category;
                        objectList.push(element)
                    }
    
                    
                });
                
            })
        }
        
        category.forEach((e)=>{
            filter(e);
        })

        return objectList;
        
    } 

}