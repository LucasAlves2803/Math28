
// document.addEventListener("DOMContentLoaded", function() {
//     const operations = document.querySelectorAll('.operation-title');
//     console.log("array de operations --> " + operations);
//     operations.forEach(operation => {
//         operation.addEventListener('click', function() {
//             const detail = this.querySelector('.operation-detail');
//             detail.style.display = detail.style.display === 'none' || detail.style.display === '' ? 'block' : 'none';
//         });
//     });
// });

// Adiciona o event listener no container ou no document
// document.addEventListener('click', function(event) {
//     // Verifica se o alvo do clique foi o botão dinâmico
//     console.log("elemento clicado " + event.target.classList);
//     console.log(event.target.matches('.operation-title'));
//     if (event.target.closest('.operation-title')) {
//         const detail = this.querySelector('.operation-detail');
//         detail.style.display = detail.style.display === 'none' || detail.style.display === '' ? 'block' : 'none';
        
//     }
// });

const colore = async (expressao, subexpressao, expressao_antinga) => { // essa função coloca cor na expressões em latex
    // a ideia é transformar as duas expressões em latex, daí fazer um replace procurando a subexpressão, quando achar eu troco ela por ela mesma adicionada
    // com o comando que coloca cor no latex, assim a subexpresão buscada pelo replace fica com cor
    let nova_expressao = math.parse(expressao).toTex();
    let nova_subexpressao = math.parse('('+subexpressao+')').toTex();
    
   
    if(expressao_antinga != ''){
         //requisição para o back end para usar a função deu_green
         let nova_expressao_antiga = math.parse(expressao_antinga).toTex();
         console.log('entrou' + expressao_antinga);
        try{ 
            response = await fetch('/api/latex-expression/green', {
            method: 'POST',  // Definindo o método como POST
            headers: {
                'Content-Type': 'application/json'  // Definindo o tipo de conteúdo
            },
            body: JSON.stringify({expr1 : nova_expressao_antiga , expr2:nova_expressao }),  // Convertendo os dados para JSON
        })
        // Substitui o .then(response => response.json()) por await
        const result = await response.json();  // Converte a resposta para JSON
        console.log('Success - Expressão com o comando green do latex :', result);
        nova_expressao = result;
        
       } catch (error){
            console.error('Error:', error);  // Lida com algum erro caso ocorra
        };
    }
    console.log("Expressão "+ nova_expressao + "Subexpressão "+ nova_subexpressao);
    return nova_expressao.replace(nova_subexpressao,'\\textcolor{red}{'+nova_subexpressao+'}')
}



// const deu_green = (palavra1, palavra2) => {
//     let nova_palavra = '';
//     let diff = Diff.diffChars(palavra1, palavra2);
//     console.log(diff);
//     diff.forEach((part) => {
// 	    nova_palavra += part.removed ? "" : part.added ? `\\color{green}{${part.value}}` : part.value; 
//     });
//     return nova_palavra;
// } 

/*  -------- Explicação do código ------------
	Uso a biblioteca diff do javascript para verificar as diferenças
  Basicamente o algoritmo de diferenciação vai mostrar quais partes da string pertencem SOMENTE a primeira palavra, e o modo de saber isso é que 
o valor removed dessa substring será true, quais partes pertencem SOMENTE a segunda palavra, o modo de saber isso é o que o valor added da subtring será true, e quando uma parte pertecem as duas string AO MESMO TEMPO, o valor de removed e de added será FALSO ao mesmo tempo.
Para ficar mais claro o método diffChars retorna um array de objeto, esse objeto tem 4 atributos: 
count: não importa saber; 
added: quando verdadeiro significa que a substring no atributo value pertence somente a segunda palavra; 
removed: quando verdadeiro significa que a substring no atributo value pertence somente a primeira palavra, 
value: substring

O que eu quero com esse algortimo é pegar a parte que está diferente na segunda palavra em comparação a primeira palavra e adicionar um comando de cor latex a ela
ex: (1+(2+2)) -- primeira palavra
    (1+4)   -- segunda palavra (4 está no lugar de (2+2)
    (1+\color{green}{4})  -- resultado

como eu fiz, criei uma variável do tipo string (nova_palavra) para ser a string final(a string que terá o comamdo de cor), depois percorri o array de objeto retornado, quando o atributo removed for verdadeiro quer dizer que a string no atributo value não serve, existe apenas na primeira palavra, então não é atribuída a variável nova_palavra, quando removed for falso, significa que a string no atributo value existe na segunda palavra, então deve ser atribuída na variável nova_palavra, porém não logo de cara, antes precisa ser verificado mais uma coisa: se essa string existe apenas na segunda palavra, para isso basta o valor do atributo added ser verdadeiro, se for verdadeiro adiciona a essa string o comando de cor latex, daí agora atribuo esse valor a variável nova_palavra, caso added seja falso, apenas atribuo a string a nova_palavra. Pronto, o resultado final é uma string com o comando cor latex justamente no trecho que existir somente na segunda palavra. 

Uma coisa a ser pensada é se esse algoritmo funciona sempre? Não tem uma palavra que gera erro nele?

*/


