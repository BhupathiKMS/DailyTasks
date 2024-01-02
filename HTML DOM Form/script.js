function updateData() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let inputAddress = document.getElementById("inputAddress").value;
  let pincode = document.getElementById("pincode").value;
  let inputState = document.getElementById("inputState").value;
  let inputCountry = document.getElementById("inputCountry").value;
  let gender = getCheckedRadioValue("gender");
  const select = document.getElementById('favFood');
  let favFood = [];
  for (const option of select.options) {
    if (option.selected) {
        favFood.push(option.value);
    }
  }
  addRow(firstName,lastName,inputAddress,pincode,inputState,inputCountry,gender,favFood)
  document.getElementById("firstName").value='';
  document.getElementById("lastName").value='';
  document.getElementById("inputAddress").value='';
  document.getElementById("pincode").value='';
  document.getElementById("inputState").value='';
  document.getElementById("inputCountry").value='';
  document.getElementById("male").checked=true;
  document.getElementById('favFood').value='';
}



function getCheckedRadioValue(radioGroupName) {
  var rads = document.getElementsByName(radioGroupName),
    i;
  for (i = 0; i < rads.length; i++) if (rads[i].checked) return rads[i].value;
  return null; // or undefined, or your preferred default for none checked
}

function addRow(firstName,lastName,inputAddress,pincode,gender,favFood,inputState,inputCountry){
   

var table = document.getElementById("table-data");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  cell1.innerHTML = firstName;
  cell2.innerHTML = lastName;
  cell3.innerHTML = inputAddress;
  cell4.innerHTML = pincode;
  cell5.innerHTML = inputState;
  cell6.innerHTML = inputCountry;
  cell7.innerHTML = gender;
  cell8.innerHTML = favFood;
}