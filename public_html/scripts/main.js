var $;
var Main = /** @class */ (function () {
    function Main() {
        this.Init();
    }
    Main.prototype.Init = function () {
        var recipeOutput = $("#recipeOutput");
        $.getJSON("/recipes.json", function (data) {
            recipeOutput.text(JSON.stringify(data));
        });
    };
    return Main;
}());
var main;
$(function () {
    main = new Main();
});
