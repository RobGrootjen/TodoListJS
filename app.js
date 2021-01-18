var entry = document.getElementById("entry");
entry.addEventListener("click",displayDetails);

var row = 1;

function displayDetails(){
    var taskNow = document.getElementById("task").value;
    var timeNow = document.getElementById("time").value;
    var dateNow = document.getElementById("date").value;

    if (!taskNow || !timeNow || !dateNow) {
        alert("Please fill all the boxes!")
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = taskNow;
    cell2.innerHTML = timeNow;
    cell3.innerHTML = dateNow;

    row++;
}