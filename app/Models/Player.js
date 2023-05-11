import { generateId } from "../Utils/generateId.js"
import { appState } from "../AppState.js"






export class Player {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.score = 0

    }

    get ListTemplate() {
        return `<li>${this.name}</li>`
    }

    get PlayerTemplate() {
        return `<div class="d-flex justify-content-around" ${this.id}>
            <p>${this.name}</p>
            <p>SCORE: ${this.score}</p>
        </div>`
    }
    get ActiveTemplate() {
        return `<div class="d-flex justify-content-around">
            <p onclick=" app.PlayersController._drawActivePlayer('${this.name}')">hello</p>
            <p>SCORE: ${this.score}</p>
        </div>`
    }
}