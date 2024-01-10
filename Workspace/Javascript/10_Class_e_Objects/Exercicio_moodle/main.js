        let Data = new Date();
        class Pessoa {
            constructor(Nome, DataDeNascimento){
            this.Nome = Nome;
            this.DataDeNascimento = new Date(DataDeNascimento);
        }
        getIdade(DataAtual) {
            if (DataAtual.getMonth() >= this.DataDeNascimento.getMonth()) {
                if (DataAtual.getDate() >= this.DataDeNascimento.getDate()) {
                    return (DataAtual.getFullYear() - this.DataDeNascimento.getFullYear());
                } else {
                    return (DataAtual.getFullYear() - this.DataDeNascimento.getFullYear())-1;
                };
            } else {
                return (DataAtual.getFullYear() - this.DataDeNascimento.getFullYear())-1;
            }
        };      
    };

    Pessoa.prototype.getNiver = function(DataAtual) {
        if (DataAtual.getMonth() >= this.DataDeNascimento.getMonth()) {
            if (DataAtual.getDate() >= this.DataDeNascimento.getDate()) {
                return "já fez aniversário";
            } else {
                return "ainda não fez aniversário";
            };
        } else {
            return "ainda não fez aniversário";
        };
    }
    
    let pessoas = [
        new Pessoa("Simone", '1977-02-13'),
        new Pessoa("Gabriel",'2004-10-13'),
        new Pessoa("Felipe", '1983-06-12'),
        new Pessoa("Rafael", '2010-08-22'),
        new Pessoa("Ana Beatriz", '2003-10-06'),
        new Pessoa("Pamela", '2005-11-13'),
        new Pessoa("Higor", '2001-01-17'),
        new Pessoa("Bernadete", '1959-10-12'),
        new Pessoa("Vinícius", '2004-09-07'),
        new Pessoa("Leonardo", '2004-10-04')
    ];
    pessoas.forEach(i => 
    console.log(`${i.Nome} possui ${i.getIdade(Data)} anos e ${i.getNiver(Data)}`));
