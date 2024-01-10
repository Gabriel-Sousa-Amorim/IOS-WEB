        function Desafio1() {
            const C = document.getElementById("Valor1");
            let Celsius = parseInt(C.value);
            let Fahrenheit = (Celsius * 1.80) + 32;
            let Reaumur = Celsius  * 0.80;
            let Kelvin = Celsius + 273;
            let Rankine = 0;
            if (Fahrenheit == 0) {
                Rankine = Celsius * 1.80 + 32 + 459.67;
            }
            else {
                Rankine = Fahrenheit + 459.67;
            }
            document.getElementById("Resultado").innerHTML = `Celsius: ${Celsius}º </br>Fahrenheit: ${Fahrenheit}º </br>Reaumur: ${Reaumur}º </br>Kelvin: ${Kelvin}º </br>Rankine: ${Rankine}º </br>`;
        }
        function Desafio2() {
            let ajuste = ((1200 * 1.17) + 215) * 1;
            let ajuste5 = ((1200 * 1.17) + 215) * 5;
            let ajuste10 = ((1200 * 1.17) + 215) * 10;
            document.getElementById("Resultado2").innerHTML =  `Em 1 ano ${ajuste}`;
            document.getElementById("Resultado21").innerHTML = `Em 5 anos ${ajuste5}`;
            document.getElementById("Resultado22").innerHTML = `Em 10 anos ${ajuste10}`;
        }
        Desafio2()
        Desafio1()
