
import React from 'react'

const Sobre = () => {
  return (
    <article>
    <h2>React</h2>
    <p style={{textAlign: 'justify'}}>
        Em 2011, as pessoas programadoras no Facebook começaram a enfrentar alguns problemas com a manutenção do código.
        À medida que a aplicação de anúncios do Facebook foi adquirindo um número crescente de funcionalidades, a equipe precisava de mais pessoas para manter o funcionamento sem falhas.
        O número crescente de membros da equipe e de funcionalidades da aplicação atrasou os processos da empresa. Com o tempo, a aplicação tornou-se muito complexa e de difícil manutenção, já que tinham muitas atualizações em cascata.
        Depois de algum tempo, as pessoas engenheiras no Facebook não conseguiram acompanhar estas atualizações em cascata. O código precisava urgentemente de uma melhoria para se tornar mais escalável e eficiente.
        ReactJS começou através do XHP, uma versão do PHP que o Facebook lançou em 2010. XHP foi principalmente desenvolvido para minimizar os ataques de Cross Site Scripting XSS, que é uma vulnerabilidade do sistema quando uma pessoa tenta inserir códigos nas páginas web.Mas o XHP não resolveu uma demanda: aplicações web dinâmicas geralmente precisam de muitas requisições, e XHP não conseguia lidar com essa parte.
        Assim, um engenheiro do Facebook Jordan Walke negociou com o seu gestor para levar XHP para o browser usando JavaScript e entraram em acordo para experimentar por 6 meses. O resultado desse experimento é o nascimento do ReactJS.
    </p>
</article>
  )
}

export default Sobre