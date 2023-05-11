import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"


function savePlayer() {

}



class PlayerService {
    setActivePlayer(playerId) {
        let foundPlayer = appState.players.find(p => p.id == playerId)
        // @ts-ignore
        console.log(foundPlayer)
        // @ts-ignore
        appState.activePlayer = foundPlayer
    }

    addPlayer(formData) {
        let newPlayer = new Player(formData)
        appState.players.push(newPlayer)
        appState.emit('players')


    }


}


export const playerService = new PlayerService()