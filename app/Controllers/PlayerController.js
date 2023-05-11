import { playerService } from "../Services/PlayerService.js";
import { appState } from "../AppState.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";





function _drawPlayer() {
    let player = appState.players
    let template = ''
    player.forEach(player => template += player.PlayerTemplate)
    setHTML('player', template)
}

function _drawActivePlayer() {
    let activePlayer = appState.activePlayer

}


export class PlayerController {
    constructor() {
        // NOTE if you want something to happen as soon as the page loads do it here
        appState.on('activePlayer', _drawActivePlayer)
    }

    // NOTE if you want something to happen from an event such as an onclick or onsumbit...place it OUTSIDE the constructor so then we can access

    addPlayer() {

        // @ts-ignore
        window.event.preventDefault()
        // get the form
        // get the formData
        // send the formData to the service
        const form = event?.target
        console.log('FORM', form)
        let formData = getFormData(form)
        console.log('this is my form data', formData);

        playerService.addPlayer(formData)
        _drawPlayer()

    }

    setActivePlayer(playerId) {
        playerService.setActivePlayer(playerId)
    }

}



