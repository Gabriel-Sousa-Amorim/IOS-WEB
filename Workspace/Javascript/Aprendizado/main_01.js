function teste() {

        let clear = document.querySelectorAll("p")
        clear.forEach(i => {i.remove()});

        let multiplicado = document.getElementById("multiplicado").value
        let multiplicador = document.getElementById("multiplicador").value
        let x = parseInt(multiplicado);
        let y = parseInt(multiplicador);

        for (i = 1; i <= y; i++) {
            let p = document.createElement("p");
            document.getElementById("section1").appendChild(p);
            p.innerHTML = `${x} x ${i} = ${x * i}`;
        }
    }
