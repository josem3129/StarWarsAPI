export default class templates {

    templatePeople(object){
        return `
        <a href="./info pages/index.html?search=${object.name}">
        <div class="card">
        <h2 class="indent">${object.name}</h2>
        <p class="card-footer"> ${object.birth_year}</p>
        <p class="card-footer"> ${object.eye_color}</p>
        <p class="card-footer"> ${object.gender}</p>
        </div>        
        </a>`
    }
    templateFilm(object){
        return `
        <a href="./info pages/index.html?search=${object.title}">
        <div class="card">
        <h2 class="indent">${object.title}</h2>
        <p class="card-footer"> ${object.episode_id}</p>
        <p class="card-footer"> ${object.director}</p>
        <p class="card-footer"> ${object.release_date}</p>
        </div>`
    }
    templateShipVehicle(object){
        return `
        <a href="./info pages/index.html?search=${object.name}">
        <div class="card">
        <h2 class="indent">${object.name}</h2>
        <p class="card-footer"> ${object.model}</p>
        <p class="card-footer"> ${object.manufacturer}</p>
        <p class="card-footer"> ${object.cost_in_crdits}</p>
      </div>`
    }
    templateSpecies(object){
        return `
        <a href="./info pages/index.html?search=${object.name}">
        <div class="card">
        <h2 class="indent">${object.name}</h2>
        <p class="card-footer"> ${object.classification}</p>
        <p class="card-footer"> ${object.designation}</p>
        <p class="card-footer"> ${object.average_height}</p>
      </div>`
    }
    templatePlanets(object){
        return `
        <a href="./info pages/index.html?search=${object.name}">
        <div class="card">
        <h2 class="indent">${object.name}</h2>
        <p class="card-footer"> ${object.population}</p>
        <p class="card-footer"> ${object.gravity}</p>
        <p class="card-footer"> ${object.climate}</p>
      </div>
      </a>`
    }
}