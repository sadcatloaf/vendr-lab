import { AppState } from "../AppState.js"
import { munniesService } from "../services/MunniesService.js"

export class MunniesController {

    constructor() {
        console.log('this is munnies')
    }

    addMunny() {
        console.log('add munnies')
        munniesService.addMunny()
    }

    drawMunnies() {
        const munnyElm = document.getElementById('Munny-count')
        munnyElm.innerText = AppState.Munnies.toString()
    }

}
