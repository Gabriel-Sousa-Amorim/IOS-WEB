        function multiplicar() {
            let clear = document.querySelectorAll("p");
            clear.forEach(i => i.remove())

            let x = document.getElementById("valorx").value;
            for (i = 1; i <=10; i++) {
                let p = document.createElement("p");
                document.getElementById("Resultado").append(p);
                p.innerHTML = `${x} x ${i} = ${x * i}`;
            };
        };
