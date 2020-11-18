var array = [];
let myData = [];
function showData() {
    array.push({
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value

    });
    console.log({ array })
   displayData();
}   

function displayData(){
    localStorage.removeItem("data");
    localStorage.setItem("data", JSON.stringify(array));
    var tb1 = document.getElementById("myTable");
    myData = JSON.parse(localStorage.getItem('data'));
    // console.log(myData.length)
    // console.log({ array })
       for (i = myData.length - 1; i < array.length; i++) {
        var r = tb1.insertRow(i+1);
        var cell1 = r.insertCell(0);
        var cell2 = r.insertCell(1);
        var cell3 = r.insertCell(2);

        cell1.innerHTML = array[i].fname;
        cell2.innerHTML = array[i].lname;
        cell3.innerHTML = `<button onClick="editTable(${i+1})">Edit</button> <button onClick="deleteTable(${i+1})">Delete</button>`;
    }
}

function editTable(i) {
    // var selectedRow = i.parentElement;
    document.getElementById("fname").value = document.getElementById("myTable").rows[i].cells[0].innerHTML;
    document.getElementById("lname").value = document.getElementById("myTable").rows[i].cells[1].innerHTML;
}
function deleteTable(i){
    // var delete_row = td.parentElement.rowIndex;
    // localStorage.removeItem("data");
    document.getElementById("myTable").deleteRow(i);
    array.splice(i, 1);
    // displayData();
}