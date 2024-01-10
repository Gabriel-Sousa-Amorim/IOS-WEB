//Formatação nome
        let errorMsgs = [document.getElementById("errorMsg1"), document.getElementById("errorMsg2"), document.getElementById("errorMsg3"), document.getElementById("errorMsg4")]

        const elmt1 = document.getElementById("Nome");

        function ValidaçãoNome() {
                const ExpRegexName = new RegExp(/^[a-z ,.'-]+$/i);
                if (ExpRegexName.test(elmt1.value) == true && elmt1.value.length > 3) {
                    errorMsgs[0].textContent = "";
                    return true;
                } else {
                    errorMsgs[0].textContent = "Nome inválido "
                    return false
                };
            }

            elmt1.addEventListener("blur", ValidaçãoNome, true)
            
            
            //Se a Data atual for maior que a data de nascimento e a data de nascimento for maior que a data atual - 120
            //Condição é true, uso deste tipo de validação para que não haja pessoas que nasceram ou em anos maiores que os atuais
            //e que sejam mais velhos do que 120 anos;
            
            const elmt2 = document.getElementById("Data");
            function ValidaçãoIdade() {
                let dataNasc = new Date(elmt2.value)
                let dataAtual = new Date()
                if (dataAtual.getFullYear() > dataNasc.getFullYear() 
                && dataNasc.getFullYear() > (dataAtual.getFullYear() - 120)) 
                {
                    errorMsgs[1].textContent = "";
                    if (dataAtual.getFullYear() - dataNasc.getFullYear() < 18) 
                    {
                        errorMsgs[1].textContent = "Não permitido"
                    } else if (dataAtual.getFullYear() - dataNasc.getFullYear() == 18) 
                    {
                        if(dataAtual.getMonth() <= dataNasc.getMonth()) 
                        {
                            if ((dataAtual.getDate() - 1) < dataNasc.getDate()) 
                            {
                                errorMsgs[1].textContent = "Não permitido"
                            } else {
                                errorMsgs[1].textContent = "";
                                return true;
                            }
                            
                        }
                    } else {
                        errorMsgs[1].textContent = "";
                        return true;
                    };
                } else {
                    errorMsgs[1].textContent = "Data Inválida"            
                }
            }
        elmt2.addEventListener("blur", ValidaçãoIdade, true)
        
        const elmt3 = document.getElementById("Email");
        function ValidaçãoEmail() {
            let ExpRegexEmail = new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)
            if(ExpRegexEmail.test(elmt3.value) == true && elmt3.value.length > 5) {
                errorMsgs[2].textContent = ""
                return true;
            } else {
                errorMsgs[2].textContent = "Erro email inválido"
                return false;
            }
        }
        elmt3.addEventListener("blur", ValidaçãoEmail, true)
        const elmt4 = document.getElementById("Item");
        let section =  document.querySelector('section.inputsLists')
        var JSONstr = 0;
        function addList() {
            if (ValidaçãoNome() == true && ValidaçãoIdade() == true && ValidaçãoEmail() == true) {
                //Geração de id aleatório para o id da div e o valor do item
                let div = document.createElement(`div`)
                elmt4.value = Math.floor(Math.random() * (99999 - 10000) + 10000) + "-" + Math.floor(Math.random() * (9999 - 1000) + 1000);
                div.id = elmt4.value; 
                let li1 = document.createElement("li")
                li1.innerHTML = elmt1.value;
                let li2 = document.createElement("li")
                li2.innerHTML = "Data de Nascimento:" + elmt2.value;
                let li3 = document.createElement("li");
                li3.innerHTML = "E-mail:" + elmt3.value;
                let li4 = document.createElement("li");
                li4.innerHTML = "Item:" + elmt4.value;
                let hr = document.createElement("hr");
                section.appendChild(div);
                div.append(li1, li2, li3, li4, hr);
                elmt1.value = ""
                elmt2.value = ""
                elmt3.value = ""
                elmt4.value = ""
                Array.from(div.getElementsByTagName("li")).forEach( function (i) {
                    var itemName = i.firstChild.textContent;
                    JSONstr = JSON.stringify(itemName);
                    console.log(JSONstr)
                })
            } else {
                ValidaçãoNome();
                ValidaçãoIdade();
                ValidaçãoEmail();
            }
        } 
        document.getElementById("btnIncluir").addEventListener("click", addList, true);
        function delList( ){
            console.log(JSONstr);
            let RegExpItem = new RegExp(/^(\d{5})+?[-]+?(\d{4})/i)
            if (RegExpItem.test(elmt4.value) == true && section.contains(document.getElementById(elmt4.value))) {
                errorMsgs[3].textContent = ""
                section.removeChild(document.getElementById(elmt4.value))
            } else {
                errorMsgs[3].textContent = "Item Inválido"
            }
        }
        document.getElementById("btnExcluir").addEventListener("click", delList, true)
