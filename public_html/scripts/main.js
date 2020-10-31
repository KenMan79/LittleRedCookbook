var $;
var Main = /** @class */ (function () {
    function Main() {
        this.Init();
    }
    Main.prototype.Init = function () {
        var recipeOutput = $("#recipeOutput");
        var recipes = $.getJSON("/recipes.json");
        recipeOutput.text(JSON.parse(recipes));
    };
    return Main;
}());
var main;
$(function () {
    main = new Main();
});
