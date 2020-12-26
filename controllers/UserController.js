class UserController {

    constructor(formId, tableId) {

        this.formElement = document.getElementById(formId);
        this.tableElement = document.getElementById(tableId);

        this.onSubmit();

    }

    // Metodo para configura o evento do clique de envio
    onSubmit() {


        this.formElement.addEventListener("submit", event => {

            event.preventDefault();

            // Usando a API do FileReader para sobrescrever o arquivo
            let values = this.getValues();

            this.getPhoto().then(
                // Caso ter certo
                (content) => {

                    values.photo = content;

                    // Pegando o metodo getValues
                    this.addLine(values);


                },
                // Caso ter errado
                (e) => {
                    console.error(e);

                }
            );

        });

    } // Fechando o metodo onSubmit

    // Metodo para ler o arquivo e sobrescrever o getValues
    getPhoto() {

        return new Promise((resolve, reject) => {

            let fileReader = new FileReader();

            let elements = [...this.formElement.elements].filter(item => {

                if (item.name === 'photo') {
                    return item;
                }
            });

            // Variavel para carregamento do elemento
            let file = elements[0].files[0];

            // Executando o carregamento do elemento
            fileReader.onload = () => {

                resolve(fileReader.result);


            };

            fileReader.onerror = (e) => {

                reject(e);
            };

            // Enviando o elemento carregando apos ser finalizado para o carregamento
            if (file) {
                fileReader.readAsDataURL(file);
            } else {
                resolve('dist/img/boxed-bg.jpg');
            }
        });


    } // Fechando o onSubmit

    // Metodo para percorrer o formumario e criar um JSon para ele
    getValues() {

        let user = {};

        // Pecorrendo os filhos do formulario
        // Usando os [] para transforma a função do objeto em um array
        [...this.formElement.elements].forEach(function (field, index) {

            if (field.name == "gender") {

                if (field.checked) {

                    user[field.name] = field.value;
                }


            } else if (field.name == 'admin') {

                // Verificando seu o checkbox do admin estar marcado
                user[field.name] = field.checked;

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

        let tr = document.createElement('tr');

        tr.innerHTML = ` 
       
            <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${(dataUser.admin) ? 'Sim' : 'Não'}</td>
            <td>${dataUser.birth}</td>
            <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>  
        `;

        this.tableElement.appendChild(tr);

    } // Fechando o metodo para criar um form usando o JavaScript


} // Fechando a class UserController