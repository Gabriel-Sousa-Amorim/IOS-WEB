        //Pega o primeiro elemento de tal tag determinada;
        var elm = document.querySelector('p');
        console.log(elm);

        var elm = document.querySelectorAll('.pr');
        elm.role = 'button';
        elm.forEach(i => {
            console.log(i);
        });
        var elm = document.querySelectorAll('p');
        console.log(elm);
        console.log(typeof(elm));
        let a = elm.forEach((i) => i != 'a')
        console.log(a)
