        function Funcionar() {
            var Nome = prompt("Insira seu nome");
            var Idade = prompt("Insira sua idade");
            console.log(Nome, Idade)
            if (Nome != Idade) {
                if (Idade > 1 && Idade < 128) {
                    alert(`Olá me chamo ${Nome} e tenho ${Idade} anos`);

                } else if(Idade == 1) {
                    alert(`Olá me chamo ${Nome} e tenho ${Idade} ano`);
                } else {
                alert(Nome + " você não tem essa de um idade!");
            }
        } else {
                alert("Erro, seu nome deve ser diferente da sua idade!");
            }
        };
