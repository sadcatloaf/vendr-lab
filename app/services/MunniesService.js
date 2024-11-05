import { AppState } from "../AppState.js"




class MunniesService {
    addMunny() {
        console.log('add munny');
        AppState.Munnies++
        console.log('munny is' + AppState.Munnies);
    }


}
export const munniesService = new MunniesService()