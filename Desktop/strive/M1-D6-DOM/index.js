function addStudent(event) {
    var studentName = document.querySelector("#studentName");
    var studentNameValue = studentName.value;

    if (studentNameValue.length > 0) {
        var myStudentLi = document.createElement("li");
        myStudentLi.classList.add("student")
        myStudentLi.innerText = studentNameValue;
        myStudentLi.onclick = function (event) {
            var student = event.currentTarget
            // var studentParent = student.parentNode
            // studentParent.removeChild(student)
            student.innerHTML = ""

        }
        var studentList = document.querySelector("#students");
        studentList.appendChild(myStudentLi);
        studentName.value = "";

    }

}

function removeStudent(event) {
    var fireStudent = document.querySelector("#students")
    fireStudent.innerHTML = "";
}