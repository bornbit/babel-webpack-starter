export default class Starter {
    constructor(selector = null) {
        this.init(selector);
    }

    init(selector) {
        var el = document.querySelector(selector);

        el.innerHTML = "<h1>babel-webpack-starter</h1>";
    }
}
