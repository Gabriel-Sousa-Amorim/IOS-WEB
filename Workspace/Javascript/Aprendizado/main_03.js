        function incluirExcluir() {
            let div = document.querySelector("div.formDiv");
            let paiDiv = document.querySelector("form");
            let newDiv = document.createElement("div");
            document.getElementById("btnIncluir").addEventListener("click", e =>
            {
            newDiv = div.cloneNode(true);
            paiDiv.append(newDiv);
            });
            document.getElementById("btnExcluir").addEventListener("click", e =>
            {
            paiDiv.removeChild(paiDiv.lastChild);
            });
        }
        incluirExcluir()
