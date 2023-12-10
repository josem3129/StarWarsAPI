const url = "https://swapi.dev/api/"


export default class gerExternalAPI{

    async getData (category){
        const storage = localStorage.getItem(category)
        if ( storage === null) {
            const response = await fetch(`${url}${category}`);
            try {
                const data = await response.json()
                // const docs = data.docs
                localStorage.setItem(`${category}`, JSON.stringify(data.results))
                return data.results
            } catch (error) {
                
            }
            
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
            let ObjectName = object.name;

            if (ObjectName === undefined) {
                ObjectName = object.title;
            } 

            if(ObjectName.toLowerCase() == name.toLowerCase()){
                nameInfo.push(object);
            }else{
                return {Name: `Not found`}
            }
            
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
                let objectUrl = object.url

                if (typeof name == "string") {
                    if(objectUrl == name){
                        nameFound = object.name;
                        if (nameFound === undefined) {
                            nameFound = object.title;
                        }
                    }
                } else {
                    name.forEach(element => {
                        if(objectUrl == element){
                            const foundName = object.name
                            if (foundName === undefined) {
                            nameList.push(object.title);
                            }
                            nameList.push(object.name);
                        }
                    });
                };
               
            })
        }
        
        category.forEach((e)=>{
            filter(e);
        })

        return nameFound;
    }  
}