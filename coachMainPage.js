// Function to handle row deletion
function removeRow(row) {
    row.remove(); // Remove the row from the table
  }
  
  // Function to handle Save Progress button click
  document.getElementById('saveProgressBtn').addEventListener('click', function() {
    var table = document.getElementById('memberTable'); // Get the table
    var rows = table.querySelectorAll('tbody tr'); // Select all rows in the table body
  
    rows.forEach(function(row) {
      var checkbox = row.querySelector('.remove-checkbox'); // Get the checkbox in the current row
      if (checkbox.checked) {
        removeRow(row); // Remove the row if the checkbox is checked
      }
    });
  });
  