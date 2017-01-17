(function(){
    var svg = d3.select('#graph')
        .append("svg")
        .style({
            width: "100%",
            height: 500
        });
    
    d3.json("ufo-types.json");
})();