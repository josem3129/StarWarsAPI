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

    if (nameList == "") {
      return "none"
    }
    return nameList;
  }
}

export default class infoTemplates {

    infoTemplatePeople(object){
        return`
        <div class="cardInfo">
        <h2 class="indent">${object.name}</h2>
        <div class="mainDiv">
        <div class = "firstPart">
        <p class="card-footer"><u>Birth Year:</u> ${object.birth_year}</p>
        <p class="card-footer"><u>Eye color:</u> ${object.eye_color}</p>
        <p class="card-footer"><u>Gender:</u> ${object.gender}</p>
        <p class="card-footer"><u>Hair color:</u> ${object.hair_color}</p>
        <p class="card-footer"><u>Height:</u> ${object.height}</p>
        <p class="card-footer"><u>Mass:</u> ${object.mass}</p>
        <p class="card-footer"><u>Skin color:</u> ${object.skin_color}</p>
        </div>
        <div class = "secondPart">
        <p class ="card-footer"><u>Home world:</u> ${getName(object.homeworld)}</p>
        <p class="card-footer"><u>Films:</u> ${getName(object.films)}</p>
        <p class="card-footer"><u>species:</u> ${getName(object.species)}</p>
        <p class="card-footer" id="test"><u>Star Ships:</u> ${getName(object.starships)}</p>
        <p class="card-footer"><u>Vehicles:</u> ${getName(object.vehicles)}</p>
        </div>
        </div>`
        

    }
    infoTemplateFilm(object){
        return `
        <div class="cardInfo">
        <h2 class="indent">${object.title}</h2>
        <div class="mainDiv">
        <div class = "firstPart">
        <p class="card-footer"><u>Episode:</u> ${object.episode_id}</p>
        <p class="card-footer"><u>Director Name:</u> ${object.director}</p>
        <p class="card-footer"><u>Producer name:</u> ${object.producer}</p>
        <p class="card-footer"><u>Release date:</u> ${object.release_date}</p>
        </div>
        <div class = "secondPart">
        <p class="card-footer"><u>species:</u> ${getName(object.species)}</p>
        <p class="card-footer"><u>Star Ships:</u> ${getName(object.starships)}</p>
        <p class="card-footer"><u>Vehicles:</u> ${getName(object.vehicles)}</p>
        <p class="card-footer"><u>characters:</u> ${getName(object.characters)}</p>
        <p class="card-footer"><u>Planets:</u> ${getName(object.planets)}</p>
        </div>
        </div>`
        
    }
    infoTemplateShipVehicle(object){
        return `
        <div class="cardInfo">
        <h2 class="indent">${object.name}</h2>
        <div class="mainDiv">
        <div class = "firstPart">
        <p class="card-footer"><u>Model:</u> ${object.model}</p>
        <p class="card-footer"><u>Manufacture:</u> ${object.manufacturer}</p>
        <p class="card-footer"><u>Cost in credits:</u> ᖬ${object.cost_in_credits}</p>
        <p class="card-footer"><u>Length:</u> ${object.length}</p>
        <p class="card-footer"><u>crew:</u> ${object.crew}</p>
        </div>
        <div class = "secondPart">
        <p class="card-footer"><u>Passengers:</u> ${object.passengers}</p>
        <p class="card-footer"><u>Max Speed:</u> ${object.max_atmosphering_speed}</p>
        <p class="card-footer"><u>species:</u> ${object.cargo_capacity}</p>
        <p class="card-footer"><u>Star Ships:</u> ${object.consumables}</p>
        <p class="card-footer"><u>Films:</u> ${getName(object.films)}</p>
        <p class="card-footer"><u>Vehicles:</u> ${getName(object.pilots)}</p>
        </div>
        </div>`
    }
    infoTemplateSpecies(object){
        return `
        <div class="cardInfo">
        <h2 class="indent">${object.name}</h2>
        <div class="mainDiv">
        <div class = "firstPart">
        <p class="card-footer"><u>Classification:</u> ${object.classification}</p>
        <p class="card-footer"><u>Designation:</u> ${object.designation}</p>
        <p class="card-footer"><u>Average Height:</u> ${object.average_height}</p>
        <p class="card-footer"><u>Average Lifespan:</u> ${object.average_lifespan}</p>
        <p class="card-footer"><u>Eye color:</u> ${object.eye_colors}</p>
        <p class="card-footer"><u>Hair color:</u> ${object.hair_colors}</p>
        <p class="card-footer"><u>Language:</u> ${object.language}</p>
      </div>
      <div class = "secondPart">
        <p class="card-footer"><u>Home World:</u> ${getName(object.homeworld)}</p>
        <p class="card-footer"><u>People:</u> ${getName(object.people)}</p>
        <p class="card-footer"><u>Films:</u> ${getName(object.films)}</p>
      </div>
      </div>`
      
    }
    infoTemplatePlanets(object){
        return `
        <div class="cardInfo">
        <h2 class="indent">${object.name}</h2>
        <div class="mainDiv">
        <div class = "firstPart">
        <p class="card-footer"><u>Diameter:</u> ${object.diameter}</p>
        <p class="card-footer"><u>Rotation Speed:</u> ${object.rotation_speed}</p>
        <p class="card-footer"><u>Orbital Period:</u> ${object.orbital_period}</p>
        <p class="card-footer"><u>Gravity:</u> ${object.gravity}</p>
        <p class="card-footer"><u>Population:</u> ${object.population}</p>
        <p class="card-footer"><u>Climate:</u> ${object.climate}</p>
        <p class="card-footer"><u>Terrain:</u> ${object.terrain}</p>
      </div>
      <div class = "secondPart">
        <p class="card-footer"><u>species:</u> ${getName(object.surface_water)}</p>
        <p class="card-footer"><u>Star Ships:</u> ${getName(object.residents)}</p>
        <p class="card-footer"><u>Vehicles:</u> ${getName(object.films)}</p>
        </div>
        </div>`
    }
}
