// from data.js
var tableData = data;

// assign variable to the table body element
var tbody = d3.select("tbody");


// for each element within the data
data.forEach(function(sightings) {
  // console.log(sightings);

  // append a row to the table
  var row = tbody.append("tr");
  // for each item within the element
  Object.entries(sightings).forEach(function([key, value]) {
  // console.log(key, value);
    // assign a variable to the new cells in the new row
    var cell = row.append("td");
    // input the value of the item into the cell
    cell.text(value);
  });
});



// Select the button
var button = d3.select("#filter-btn");
 
// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Remove the existing rows
  // Citation: https://stackoverflow.com/questions/7271490/delete-all-rows-in-an-html-table
  d3.selectAll("tbody tr").remove();
  

  // Select the input element and get the raw HTML node
  var inputdate = d3.select("#datetime");
  var inputcity = d3.select("#city");
  var inputstate = d3.select("#state");
  var inputcountry = d3.select("#country");
  var inputshape = d3.select("#shape");

  // Get the value property of the input element
  var inputdateValue = inputdate.property("value");
  var inputcityValue = inputcity.property("value");
  var inputstateValue = inputstate.property("value");
  var inputcountryValue = inputcountry.property("value");
  var inputshapeValue = inputshape.property("value");


  // var filteredData = tableData.filter(tableData => tableData.datetime === inputdateValue; tableData.city === inputcityValue);

  var filteredData = tableData.filter(function(rows) {
    return rows.datetime === inputdateValue && rows.city === inputcityValue && rows.state === inputstateValue && rows.country === inputcountryValue && rows.shape === inputshapeValue
  });

  console.log(filteredData);

  // for each element within the data
  filteredData.forEach(function(sightings) {
    // console.log(sightings);
    var tbody = d3.select("tbody");
    // append a row to the table
    var row = tbody.append("tr");
    // for each item within the element
    Object.entries(sightings).forEach(function([key, value]) {
      // console.log(key, value);
      // assign a variable to the new cells in the new row
      var cell = row.append("td");
      // input the value of the item into the cell
      cell.text(value);

      
    });
    
  });
}
