
function addEmployee() {
  let id = document.getElementById("idInput").value;
  let name = document.getElementById("NameInput").value;
  let role = document.getElementById("RoleInput").value;
  let salary = document.getElementById("salaryInput").value;

  if (id === "" || name === "" || role === "" || salary === "") {
    alert("Please fill all fields!");
    return;
  }

  let empData = name + " | " + role + " | " + salary;
  localStorage.setItem(id, empData);
  alert("Employee Added!");
  clearInputs();
}


function searchEmployee() {
  let id = document.getElementById("IdOutput").value;
  let result = localStorage.getItem(id);

  if (result) {
    document.getElementById("ResultBtn").innerText = "ID: " + id + " → " + result;
  } else {
    document.getElementById("ResultBtn").innerText = "Employee Not Found!";
  }
}


function deleteEmployee() {
  let id = document.getElementById("IdOutput").value;
  if (localStorage.getItem(id)) {
    localStorage.removeItem(id);
    alert("Employee Deleted!");
  } else {
    alert("Employee Not Found!");
  }
}


function updateEmployee() {
  let id = document.getElementById("IdOutput").value;
  if (localStorage.getItem(id)) {
    let newValue = prompt("Enter New Details (Name | Role | Salary):");
    if (newValue) {
      localStorage.setItem(id, newValue);
      alert("Employee Updated!");
    }
  } else {
    document.getElementById("ResultBtn").innerText = "Employee Not Found!";
  }
}


function showAll() {
  let result = "<table><tr><th>ID</th><th>Name</th><th>Role</th><th>Salary</th></tr>";

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key).split("|");
    result += `<tr>
                 <td>${key}</td>
                 <td>${value[0]}</td>
                 <td>${value[1]}</td>
                 <td>${value[2]}</td>
               </tr>`;
  }

  result += "</table>";
  if (localStorage.length === 0) {
    result = "No Employees Found!";
  }

  document.getElementById("ResultBtn").innerHTML = result;
}

function clearInputs() {
  document.getElementById("idInput").value = "";
  document.getElementById("NameInput").value = "";
  document.getElementById("RoleInput").value = "";
  document.getElementById("salaryInput").value = "";
}

function clearAll(){
    if(confirm("Are you sure you want to delete All employees?")){
        localStorage.clear();
    }else{
    document.getElementById("ResultBtn").innerText = "All Employees Deleted!";
    }
}

