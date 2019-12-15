// from data.js
var tableData = data;

// Select table body from html
var tbody = d3.select("tbody");

// Add data rows to html table
function sightingTable(d) {
    d.forEach(function(sighting) {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
          // Append a cell to the row for each value
          // in the sighting object
          var cell = row.append("td");
          cell.text(value);    
    });
});
};

sightingTable(tableData);

// Select button from html
var button = d3.select("button");

// Add event listener
button.on("click", function() {

    // Prevent page from re-loading
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select(".form-control");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
  
    var filteredData = tableData.filter(date => date.datetime === inputValue);

    console.log(filteredData);

   // Delete table rows
    tbody.selectAll("tr").remove();
    // Add filtered data to table
    sightingTable(filteredData);

 });
