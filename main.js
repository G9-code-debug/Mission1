var names_of_the_students_array = [];
var names_of_the_students = "";
var abcd = "";
var i = 0;
function submit() { 
    if(document.getElementById("input1").value == abcd){
        alert(" Error: There wasn't any input ");
    }
    else{
        i++
    var newDiv = document.createElement("div");
    newDiv.innerHTML =  i + "." + document.getElementById("input1").value;
    document.getElementById("list").appendChild(newDiv);
    names_of_the_students = document.getElementById("input1").value;
    names_of_the_students_array.push(names_of_the_students);
    document.getElementById("input1").value = "";
    }
}
var j = 0;
function sort() {
    names_of_the_students_array.sort();
    if(names_of_the_students_array == abcd){
        alert(" Error: There were no names in the database ");
    }
    else{
        j++
        document.getElementById("sortedlist").innerHTML = names_of_the_students_array.join("<br>");
    }
}
function save() {
    localStorage.list = document.getElementById("list").innerHTML;
    console.log(localStorage.list);
    localStorage.sortedlist = document.getElementById("sortedlist").innerHTML;
    console.log(localStorage.sortedlist);
}
function load() {
    document.getElementById("list").innerHTML = localStorage.list;
    document.getElementById("sortedlist").innerHTML = localStorage.sortedlist;
}