import gerExternalAPI from "./outsideResorces.mjs"
const finder = new gerExternalAPI;

function getName(url){
  let nameList = [];
  
  if (typeof url === "string") {
    return finder.DataNameFinder(url)
  }else if( url === null){
    return "unknown"
  }else{
    url.forEach(element => {
      const listItem = finder.DataNameFinder(element)
      nameList.push(listItem);
    });
    return nameList;
  }
}

function objectName(comaString){
  const nameList = comaString.split(",");
  return nameList;
}
export default class infoTemplates {

    infoTemplatePeople(object){
        return`
        <div class="card">
        <h2 class="indent">${object.name}</h2>
        <div class="mainDiv">
        <div class = "firstPart">
        <p class="card-footer">Birth Year: ${object.birth_year}</p>
        <p class="card-footer">Eye color: ${object.eye_color}</p>
        <p class="card-footer">Gender: ${object.gender}</p>
        <p class="card-footer">Hair color: ${object.hair_color}</p>
        <p class="card-footer">Height: ${object.height}</p>
        <p class="card-footer">Mass: ${object.mass}</p>
        <p class="card-footer">Skin color: ${object.skin_color}</p>
        </div>
        <div class = "secondPart">
        <p class ="card-footer">Home world: ${getName(object.homeworld)}</p>
        <p class="card-footer">Films: ${getName(object.films)}</p>
        <p class="card-footer">species: ${getName(object.species)}</p>
        <p class="card-footer" id="test">Star Ships: ${getName(object.starships)}</p>
        <p class="card-footer">Vehicles: ${getName(object.vehicles)}</p>
        </div>
        </div>`
        

    }
    infoTemplateFilm(object){
        return `
        <div class="card">
        <h2 class="indent">${object.title}</h2>
        <div class="mainDiv">
        <div class = "firstPart">
        <p class="card-footer">Episode: ${object.episode_id}</p>
        <p class="card-footer">Director Name: ${object.director}</p>
        <p class="card-footer">Producer name: ${object.producer}</p>
        <p class="card-footer">Release date: ${object.release_date}</p>
        </div>
        <div class = "secondPart">
        <p class="card-footer">species: ${getName(object.species)}</p>
        <p class="card-footer">Star Ships: ${getName(object.starships)}</p>
        <p class="card-footer">Vehicles: ${getName(object.vehicles)}</p>
        <p class="card-footer">Home World: ${getName(object.characters)}</p>
        <p class="card-footer">Planets: ${getName(object.planets)}</p>
        </div>
        </div>`
        
    }
    infoTemplateShipVehicle(object){
        return `
        <div class="card">
        <h2 class="indent">${object.name}</h2>
        <div class="mainDiv">
        <div class = "firstPart">
        <p class="card-footer">Model: ${object.model}</p>
        <p class="card-footer">Manufacture: ${object.manufacturer}</p>
        <p class="card-footer">Cost in credits: ${object.cost_in_crdits}</p>
        <p class="card-footer">Length: ${object.length}</p>
        <p class="card-footer">crew: ${object.crew}</p>
        </div>
        <div class = "secondPart">
        <p class="card-footer">Passengers: ${getName(object.passengers)}</p>
        <p class="card-footer">Max Speed: ${getName(object.max_atmosphering_speed)}</p>
        <p class="card-footer">species: ${getName(object.cargo_capacity)}</p>
        <p class="card-footer">Star Ships: ${getName(object.consumables)}</p>
        <p class="card-footer">Vehicles: ${getName(object.films)}</p>
        </div>
        </div>`
    }
    infoTemplateSpecies(object){
        return `
        <div class="card">
        <h2 class="indent">${object.name}</h2>
        <div class="mainDiv">
        <div class = "firstPart">
        <p class="card-footer">Classification: ${object.classification}</p>
        <p class="card-footer">Designation: ${object.designation}</p>
        <p class="card-footer">Average Height: ${object.average_height}</p>
        <p class="card-footer">Average Lifespan: ${object.average_lifespan}</p>
        <p class="card-footer">Eye color: ${object.eye_colors}</p>
        <p class="card-footer">Hair color: ${object.hair_colors}</p>
        <p class="card-footer">Language: ${object.language}</p>
      </div>
      <div class = "secondPart">
        <p class="card-footer">Home World: ${getName(object.homeworld)}</p>
        <p class="card-footer">People: ${getName(object.people)}</p>
        <p class="card-footer">Films : ${getName(object.films)}</p>
      </div>
      </div>`
      
    }
    infoTemplatePlanets(object){
        return `
        <div class="card">
        <h2 class="indent">${object.name}</h2>
        <div class="mainDiv">
        <div class = "firstPart">
        <p class="card-footer">Diameter: ${object.diameter}</p>
        <p class="card-footer">Rotation Speed: ${object.rotation_speed}</p>
        <p class="card-footer">Orbital Period: ${object.orbital_period}</p>
        <p class="card-footer">Gravity: ${object.gravity}</p>
        <p class="card-footer">Population: ${object.population}</p>
        <p class="card-footer">Climate: ${object.climate}</p>
        <p class="card-footer">Terrain: ${object.terrain}</p>
      </div>
      <div class = "secondPart">
        <p class="card-footer">species: ${getName(object.surface_water)}</p>
        <p class="card-footer">Star Ships: ${getName(object.residents)}</p>
        <p class="card-footer">Vehicles: ${getName(object.films)}</p>
        </div>
        </div>`
    }
}