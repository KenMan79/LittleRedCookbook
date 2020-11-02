var $;
var angular;
var Main = /** @class */ (function () {
    function Main() {
        this.Init();
    }
    Main.prototype.Init = function () {
        var recipeOutput = $("#recipeOutput");
        $.getJSON("/recipes.json", function (data) {
            for (var i = 0; i < data.length; i++) {
                recipeOutput.append(data[i].recipe_name + "<br/>");
            }
        });
    };
    return Main;
}());
var main;
$(function () {
    main = new Main();
});
