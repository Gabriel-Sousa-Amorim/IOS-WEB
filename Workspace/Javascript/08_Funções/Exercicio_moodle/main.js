function msg() {
        alert("Bem vindo à página de cálculo de equação super especifíca de 2º Grau :)");
        };
        var Calc = (a=1,b=1,c=1) => {
            const delta = ((b ** 2) - 4 * a * c);
            const x1 = (-b + Math.sqrt(delta))/ (2*a);
            const x2 = (-b - Math.sqrt(delta))/ (2*a);
            console.log(`x1 = ${x1}, x2 = ${x2}`);
            document.getElementById('Resultado').innerHTML = `x1 = ${x1}, x2 = ${x2}`;
        };
