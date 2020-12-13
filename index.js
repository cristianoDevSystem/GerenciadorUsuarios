var fields = document.querySelectorAll("#form-user-create [name]");

// Montando o JSon
var user = {};

// Evento de Clique
document.getElementById("form-user-create").addEventListener("submit", function (event) {

    event.preventDefault();

    fields.forEach(function(field, index){

        if (field.name == "gender") {
    
            if (field.checked) {
    
                user[field.name] = field.value;
            }
            
           
    
        } else {
    
            user[field.name] = field.value;
        }      
    
    });
    
    console.log(user);
    
});