//Get all employees
function GetAllEmployees() {
    jQuery.support.cors = true;
    $.ajax({
        url: 'http://localhost:41207/api/employee',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            WriteResponsesForAllEmployees(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });

    //Displays in a Table
    function WriteResponsesForAllEmployees(employees) {
        var strResult = "<table><th>Id</th><th>Name</th><th>Gender</th><th>Age</th><th>Salary</th>";
        $.each(employees, function (index, employee) {
            strResult += "<tr><td>" + employee.id + "</td><td> " + employee.name + "</td><td>" + employee.gender + "</td><td>" + employee.age + "</td><td>" + employee.salary + "</td></tr>";
        });
        strResult += "</table>";
        $("#divDisplayAllEmployees").html(strResult);
    }
}


//Get a particular employee
function GetSingleEmployee() {
    jQuery.support.cors = true;
    var empId = $('#txtSingleEmployeeId').val();

    $.ajax({
        url: 'http://localhost:41207/api/employee/' + empId,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            WriteResponseForSingleEmployee(data);
        },
        error: function (x, y, z) {
            alert('The Employee not found in the List for the given ID');
        }
    });

    function WriteResponseForSingleEmployee(employee) {       
        var strResult = "<table><th>Id</th><th>Name</th><th>Gender</th><th>Age</th><th>Salary</th>";
        strResult += "<tr><td>" + employee.id + "</td><td> " + employee.name + "</td><td>" + employee.gender + "</td><td>" + employee.age + "</td><td>" + employee.salary + "</td></tr>";
        strResult += "</table>";
        $("#divDisplaySingleEmployee").html(strResult);
       
    }
}

//Adds an Employee to the List
function AddEmployee() {
    var employee = {        
        id: $('#txtEmployeeId').val(),
        name: $('#txtEmployeeName').val(),
        gender: $('#optGender').val(),
        age: $('#txtEmployeeAge').val(),
        salary: $('#txtEmployeeSalary').val()
    };

    $.ajax({
        url: 'http://localhost:41207/api/employee/',
        type: 'POST',
        data: JSON.stringify(employee),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            alert('Employee added Successfully');
            GetAllEmployees();
        },
        error: function () {
            alert('Employee not Added');
        }
    });
}


//Updates an Employee to the List
function UpdateEmployee() {
    var employee = {
        id: $('#txtEmployeeId').val(),
        name: $('#txtEmployeeName').val(),
        gender: $('#optGender').val(),
        age: $('#txtEmployeeAge').val(),
        salary: $('#txtEmployeeSalary').val()
    };

    $.ajax({
        url: 'http://localhost:41207/api/employee/' + $('#txtEmployeeId').val(),
        type: 'PUT',
        data: JSON.stringify(employee),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            alert('Employee updated Successfully');
            GetAllEmployees();
        },
        error: function () {
            alert('Employee could not be updated');
        }
    });
}


//Delete an Employee from the List
function DeleteEmployee() {

    jQuery.support.cors = true;
    var id = $('#txtEmpId').val()

    $.ajax({
        url: 'http://localhost:41207/api/employee/' + id,
        type: 'DELETE',
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            WriteResponse(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}

function WriteResponse(employees) {
    var strResult = "<table><th>Id</th><th>Name</th><th>Gender</th><th>Age</th><th>Salary</th>";
    $.each(employees, function (index, employee) {
        strResult += "<tr><td>" + employee.id + "</td><td> " + employee.name + "</td><td>" + employee.gender + "</td><td>" + employee.age + "</td><td>" + employee.salary + "</td></tr>";
    });
    strResult += "</table>";
    $("#divDisplayAllEmployees").html(strResult);
}