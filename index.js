var fields = document.querySelectorAll("#form-user-create [name]");

// Montando o JSon
var user = {};

// Criando uma tabela nova através do JS

function addLine(dataUser) {


    document.getElementById("table-users").innerHTML = 
    `
        <tr>
            <td><img src="dist/img/user2-160x160.jpg" alt="User Image" class="img-circle img-sm"></td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${dataUser.admin}</td>
            <td>${dataUser.birth}</td>
            <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>                        
        </tr>
    `;    

}

// Evento de Clique
document.getElementById("form-user-create").addEventListener("submit", function (event) {

    event.preventDefault();

    fields.forEach(function (field, index) {

        if (field.name == "gender") {

            if (field.checked) {

                user[field.name] = field.value;
            }



        } else {

            user[field.name] = field.value;
        }

    });

    addLine(user);

});