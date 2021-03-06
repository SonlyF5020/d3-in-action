(function(d3, document) {
  var dataset = [50, 43, 120, 87, 99, 167, 142];
  var width = 400;
  var height = 400;
  var svg = d3.select("body").append("svg").attr("width", width).attr("height", height);
  var padding = { top: 20, right: 20, bottom: 20, left: 20};
  var rectStep = 35;
  var rectWidth = 30;

  var rect = svg.selectAll("rect").data(dataset).enter().append("rect")
  .attr("fill", "steelblue").attr("x", function(d, i){
    return padding.left + i * rectStep;
  }).attr("y", function(d){
    return height - padding.bottom - d;
  }).attr("width", rectWidth).attr("height", function(d){
    return d;
  });

  var text = svg.selectAll("text").data(dataset).enter().append("text")
  .attr("fill", "white").attr("font-size", "14px")
  .attr("text-anchor", "middle").attr("x", function(d, i){
    return padding.left + i * rectStep;
  }).attr("y", function (d) {
    return height - padding.bottom - d;
  }).attr("dx", rectWidth/2).attr("dy", "1em").text(function (d){
    return d;
  });

  function draw() {
    var updateRect = svg.selectAll("rect").data(dataset);
    var enterRect = updateRect.enter();
    var exitRect = updateRect.exit();
    var updateText = svg.selectAll("text").data(dataset);
    var enterText = updateText.enter();
    var exitText = updateText.exit();

    updateRect.attr("fill", "steelblue").attr("x", function(d, i) {
      return padding.left + i * rectStep;
    }).attr("y", function (d) {
      return height - padding.bottom - d;
    }).attr("width", rectWidth).attr("height", function(d){
      return d;
    });

    enterRect.append("rect").attr("fill", "steelblue").attr("x", function (d, i) {
      return padding.left + i * rectStep;
    }).attr("y", function(d) {
      return height - padding.bottom - d;
    }).attr("width", rectWidth).attr("height", function (d) {
      return d;
    });

    exitRect.remove();
  }

  function sortData() {
    dataset.sort(d3.ascending);
    draw();
  }

  function addData() {
    dataset.push(Math.floor(Math.random() * 100));
    draw();
  }

  document.getElementById('sortButton').addEventListener('click', function() {sortData();});
  document.getElementById('addButton').addEventListener('click', function() {addData();});
})(d3, document);
