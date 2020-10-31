let $: any;

class Main {
    constructor() {
        this.Init();
    }

    public Init(): void {
        let recipeOutput: any = $("#recipeOutput");
        $.getJSON("/recipes.json", (data: any) =>
        {
            recipeOutput.text(JSON.stringify(data));
        });
    }
}

let main: Main;

$(() => {
    main = new Main();
});