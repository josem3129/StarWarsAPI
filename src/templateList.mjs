export default class templates {

    templatePeople(object){
        return `
        <a href="../info pages/index.html?search=${object.name}">
        <div class="card">
        <h2 class="indent">${object.name}</h2>
        <p class="card-footer">Birth Year: ${object.birth_year}</p>
        <p class="card-footer">Eye Color: ${object.eye_color}</p>
        <p class="card-footer">Gender: ${object.gender}</p>
        </div>        
        </a>`
    }
    templateFilm(object){
        return `
        <a href="../info pages/index.html?search=${object.title}">
        <div class="card">
        <h2 class="indent">${object.title}</h2>
        <p class="card-footer">Episode: ${object.episode_id}</p>
        <p class="card-footer">Director ${object.director}</p>
        <p class="card-footer">Release Date: ${object.release_date}</p>
        </div>`
    }
    templateShipVehicle(object){
        return `
        <a href="../info pages/index.html?search=${object.name}">
        <div class="card">
        <h2 class="indent">${object.name}</h2>
        <p class="card-footer">Model: ${object.model}</p>
        <p class="card-footer">Manufactured: ${object.manufacturer}</p>
        <p class="card-footer">Cost in credits: ᖬ${object.cost_in_credits}</p>
      </div>`
    }
    templateSpecies(object){
        return `
        <a href="../info pages/index.html?search=${object.name}">
        <div class="card">
        <h2 class="indent">${object.name}</h2>
        <p class="card-footer">Classification: ${object.classification}</p>
        <p class="card-footer">Designation: ${object.designation}</p>
        <p class="card-footer">Average height: ${object.average_height}</p>
      </div>`
    }
    templatePlanets(object){
        return `
        <a href="../info pages/index.html?search=${object.name}">
        <div class="card">
        <h2 class="indent">${object.name}</h2>
        <p class="card-footer">Population: ${object.population}</p>
        <p class="card-footer">Gravity: ${object.gravity}</p>
        <p class="card-footer">Climate: ${object.climate}</p>
      </div>
      </a>`
    }
}