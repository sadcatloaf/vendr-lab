import { munniesService } from "../services/MunniesService.js"

export class MunniesController {

    constructor() {
        console.log('this is munnies')
    }

    addMunny() {
        console.log('add munnies')
        munniesService.addMunny()
    }
}