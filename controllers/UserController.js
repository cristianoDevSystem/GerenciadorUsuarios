class UserController {

    constructor(formId, tableId) {

        this.formElement = document.getElementById(formId);
        this.tableElement = document.getElementById(tableIdId);

        this.onSubmit();

    }

    // Metodo para configura o evento do clique de envio
    onSubmit() {


        this.formElement.addEventListener("submit", event => {

            event.preventDefault();

            // Pegando o metodo getValues
            this.getValues();

            this.addLine(this.getValues());


        });

    } // Fechando o metodo onSubmit

    // Metodo para percorrer o formumario e criar um JSon para ele
    getValues() {

        let user = {};

        // Pecorrendo os filhos do formulario
        this.formElement.elements.forEach(function (field, index) {

            if (field.name == "gender") {

                if (field.checked) {

                    user[field.name] = field.value;
                }



            } else {

                user[field.name] = field.value;
            }

        }); // Fechando o forEach

        return new User(
            user.name,
            user.gender,
            user.birth,
            user.country,
            user.email,
            user.password,
            user.photo,
            user.admin
        );
    } // Fechando o metodo getValues

    // Criando uma tabela nova através do JavaScript
    addLine(dataUser) {

        this.tableId.innerHTML =
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

    } // Fechando o metodo para criar um form usando o JavaScript


} // Fechando a class UserController