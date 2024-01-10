    
    //Muda a cor e põe uma borda inferior
    let section = document.getElementById("bg-container");
    function bgchange(x) {
        section.style.background =  x;  
    };
    
    
    //Define o Font weight dos paragrafos para 900 
    function fontWeight() {
        let paragraph = document.getElementsByClassName("p");
        let fontWeight = Array.prototype.map.call(paragraph, i => i.style.fontWeight = "900");
    }
    
    var UlList = document.getElementsByTagName("li");
    function Zebrado() {
        for (i = 0; i < UlList.length; i++) {
            if (i % 2 == 0) {
                UlList[i].style.backdropFilter = "brightness(125%)";
            } else { 
                UlList[i].style.backdropFilter = "brightness(150%)";
            }
        }
    }
    function borda() {
        let bgcontainer = document.getElementsByName("bg-container");
        bgcontainer[0].style.borderBottom = "1px solid #000";
    }
    function remove() {
        let UltimoItem = UlList[UlList.length-1];
        
        UltimoItem.remove()
    }
    function Adicionar() {
        let NovoItem = document.createElement("li");
        NovoItem.textContent = "Elemento Recuperado";
        let list = document.getElementById("UlList");
        list.insertBefore(NovoItem, list.children[0]);
        Zebrado()
    }
    
    
    
