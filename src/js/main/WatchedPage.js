import { selectDOM, loadDataFromLocalStorage } from "../utils.js";
import { buildResultSection } from "../DOM.js";

export default class WatchedPage {
  $selectedResult;
  constructor() {
    this.$selectedResult = selectDOM("#selected-result");
    this.$watchedButton = selectDOM("#watched-videos");


    this.state = {
      watchedVideos: []
    }

    this.setState('');
  }

  render() {
    this.$selectedResult.innerHTML = "None 😥"
  }

  setState() {
    
    this.render();
  }
}
