let $: any;

class Main {
    constructor() {
        this.Init();
    }

    public Init(): void {
        let recipeOutput: any = $("#recipeOutput");
        let recipes: any = $.getJSON("/recipes.json");
        recipeOutput.text(JSON.parse(recipes));
    }
}

let main: Main;

$(() => {
    main = new Main();
});