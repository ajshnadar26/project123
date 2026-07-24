function addStudent() {

    let n = document.getElementById("student_Name").value;

    if(n !== "") {

        let li = document.createElement("li");
        li.innerText = n;

        document.getElementById("studentList").appendChild(li);

        document.getElementById("student_Name").value = "";
    }
}