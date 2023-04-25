# Grid layout parent

![Exemplo Grid](https://img.freepik.com/premium-vector/square-grid-paper-seamless-pattern-millimeter-paper-sheet-background_434359-268.jpg)

O grid é um layout de formado por retas horizontais e verticais usando colunas e fileiras formando as células. Sendo tabelas 2D

## Container

Elemento ou classe que definimos a seguinte propriedade:

```CSS
.container {
    display: grid;
}
```
Então, esse elemento será o pai de todos os itens do Grid. Por exemplo, podemos configurar uma classe nos seguintes elementos: 
```HTML
<section></section>

<div></div>
```
e vários itens outros items dentro deste elemento tais como

 *  Grid Item: filhos do grid.
 *  Grid Line: linhas verticais e horizontais do grid.
 

 *  Grid track: Um conjunto de células dispostas em uma coluna ou fileira.

> Exemplo de Grid track vertical e horizontal.

|   	|   	|   	|   	|   	|
|---	|---	|---	|---	|---	|
|   	|   	|   	|  ❒    |   	|
|  ❒    | ❒    	|  ❒    |  ❒    |  ❒    |
|   	|   	|   	|  ❒    |   	|
|   	|   	|   	|  ❒    |   	|
|   	|   	|   	|  ❒    |   	|

 *  Grid Area: Elemento que ocupa mais de uma coluna e fileira.

|   	|   	|   	|   	|   	|
|---	|---	|---	|---	|---	|
|   	|   	|   ⠀	|  ❒    |  ❒    |
|   	|   	|   	|  ❒    |  ❒    |
|   	|   	|   ⠀	|   	|   	|
|   	|   	|   ⠀	|   	|   	|
|   	|   	|   	|   	|   	|