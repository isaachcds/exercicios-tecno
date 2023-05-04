let teacherForms = document.getElementsByClassName("teacher__contract")
for (let teacherForm of teacherForms) {
    teacherForm.addEventListener("submit", function(event) {
        event.preventDefault()
        
        let price = teacherForm.price.value
        let hours = teacherForm.hours.value
        let total = price * hours


        alert("O valor total do contrato a hora é de R$ " + total)
    })
}