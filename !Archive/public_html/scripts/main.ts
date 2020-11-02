let $: any;
let angular: any;

class Main {
    constructor() {
        this.Init();
    }

    public Init(): void {
        let recipeOutput: any = $("#recipeOutput");
        $.getJSON("/recipes.json", (data: any) =>
        {
            for (let i = 0; i < data.length; i++)
            {
                recipeOutput.append(data[i].recipe_name + "<br/>");
            }
        });
    }
}

let main: Main;

$(() => {
    main = new Main();
});