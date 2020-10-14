var rIndex;
        
function addRow() {
  var name = document.getElementById("name").value;
  var gender = document.getElementsByName("gender");

  var gender_v;

  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      gender_v = gender[i].value;
    }
  }

  var age = document.getElementById("age").value;
  var city = document.getElementById("city").value;

  var table = document.getElementsByTagName("table")[0];

  var newRow = table.insertRow(table.rows.length);

  // add cells to the row
  var cel1 = newRow.insertCell(0);
  var cel2 = newRow.insertCell(1);
  var cel3 = newRow.insertCell(2);
  var cel4 = newRow.insertCell(3);
  var cel5 = newRow.insertCell(4);

  // add values to the cells
  cel1.innerHTML = name;
  cel2.innerHTML = gender_v;
  cel3.innerHTML = age;
  cel4.innerHTML = city;
  cel5.innerHTML =
    "<button onclick='removeRow()' id='but1'>Delete</button> / <button onclick='selectRow()' id='but2'>Select</button>";
}

function removeRow() {
  var index,
    table = document.getElementById("table");
  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].cells[4].onclick = function () {
      var c = confirm("do you want to delete this row");
      if (c === true) {
        index = this.parentElement.rowIndex;
        table.deleteRow(index);
      }

      //console.log(index);
    };
  }
}

function selectRow() {
  var table = document.getElementById("table");

  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      rIndex = this.rowIndex; 
      document.getElementById("name").value = this.cells[0].innerHTML;
      document.getElementById("gender").value = this.cells[1].innerHTML;
      document.getElementById("age").value = this.cells[2].innerHTML;
      document.getElementById("city").value = this.cells[3].innerHTML;
    };
  }
}

function updateRow() {
  
  var table = document.getElementById("table");
  var name = document.getElementById("name").value;
  var gender = document.getElementsByName("gender");
  var gender_value = null;
  if(gender[0].checked){
      gender_value = gender[0].value;
  }
  else if(gender[1].checked){
      gender_value = gender[1].value;
  }
  var age = document.getElementById("age").value;
  var city = document.getElementById("city").value;

  table.rows[rIndex].cells[0].innerHTML = name;
  table.rows[rIndex].cells[1].innerHTML = gender_value;
  table.rows[rIndex].cells[2].innerHTML = age;
  table.rows[rIndex].cells[3].innerHTML = city;
}

function resetAll() {
  document.getElementById("myform").reset();
}