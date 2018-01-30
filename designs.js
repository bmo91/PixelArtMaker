// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

  //Get nb of rows and cols input
  var rows = $("#input_height").val();
  var cols = $("#input_width").val();

  //Get table
  var table = $("#pixel_canvas");

  //Reset to empty table --- in case one already created
  table.children().remove();

  //Create rows
  for (var i = 0; i < rows; i++) {
    table.append("<tr></tr>");
    //Create cols
    for (var j = 0; j < cols; j++) {
      table.children().last().append("<td></td>");
    }
  }

  //Listen for cell clicks
  table.on("click", "td", function() {
    //Get color from color picker
    var color = $("input[type='color']").val();
    //Apply color to cell
    $(this).attr("bgcolor", color);
  });
}

// Listen for button clicks to trigger makeGrid()
$("input[type='submit']").click(function(e) {
  e.preventDefault(); //Required to avoid submit and page reload
  makeGrid();
});
