function ValidacaoUsuario() {
            document.getElementById("errorSpam1").textContent = ""
            let UsrValue = document.getElementById("Usuario").value;
            if (UsrValue.length >= 4) {
                UsrValue = UsrValue.toUpperCase();
                return true;
            }
            else {
                document.getElementById("errorSpam1").textContent = "Usuário Inválido"
            }
        }
        document.getElementById("Usuario").addEventListener("blur", ValidacaoUsuario, true)
        function ValidacaoSenha() {
            document.getElementById("errorSpam2").textContent = ""
            let RegExpSenha = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
            if (RegExpSenha.test(document.getElementById("Senha").value) == true) {
                document.getElementById("errorSpam2").textContent = ""
                return true
            } else {
            document.getElementById("errorSpam2").textContent = "Senha Inválida"
            return false;
        }
        }
        document.getElementById("Senha").addEventListener("blur", ValidacaoSenha, true)
        
        function ValidaçãoCompleta() {
            if (ValidacaoSenha() == true && ValidacaoUsuario() == true) {
                switch (document.getElementById("selecao-cargo").value) {
                case "1":
                    alert("Olá Estagiário, Você será direcionado a seu respectivo ambiente de trabalho");
                    break;
                case "2":
                    alert("Olá Trainee, Você será direcionado a seu respectivo ambiente de trabalho ");
                    break;
                case "3":
                    alert("Olá Analista, Você será direcionado a seu respectivo ambiente de trabalho");
                    break;
                case "4":
                    alert("Olá Junior, Você será direcionado a seu respectivo ambiente de trabalho");
                    break;
                case "5":
                    alert("Olá Sênior, Você será direcionado a seu respectivo ambiente de trabalho");
                    break;
                case "6":
                    alert("Olá Pleno-Sênior, Você será direcionado a seu respectivo ambiente de trabalho");
                    break;
                case "7":
                    alert("Olá Lider Técnico, Você será direcionado a seu respectivo ambiente de trabalho");
                    break;
                case "8":
                    alert("Olá CEO, Você será direcionado a seu respectivo ambiente de trabalho");
                    break;
                }
                document.querySelector("form").submit();
            } else {
                alert("Informações Inválidas");
                ValidacaoUsuario()
                ValidacaoSenha()
            }
        }
        document.getElementById("SubmitButton1").addEventListener("click", ValidaçãoCompleta, true )
