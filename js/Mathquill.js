// $(document).ready( function() {
//     var MQ = MathQuill.getInterface(2);
//     var mathField = MQ.MathField(document.getElementById('math'), {
//         spaceBehavesLikeTab: true,
//         handlers: {
//             edit: function() {
//                 var enteredMath = mathField.latex(); // Get the LaTeX string
//                 console.log("Current LaTeX: ", enteredMath);
//             }
//         }});
//     console.log("Mathquill teste _ "+ mathField);
  
//     document.getElementById('math').addEventListener('DOMContentLoaded', (event) => {
//         // Inicializar a configuração do LaTeX
//         let latexConfiguration = new mke.LatexConfiguration();
        
//         // Inicializar o teclado de memória
//         let keyboardMemory = new mke.KeyboardMemory();
  
//         // Configurar a interface do teclado virtual
//         let mathField = new mke.Keyboard({
//           container: document.getElementById('keyboard-container'), // Adiciona o teclado ao container
//           target: document.getElementById('math'),  // Onde o texto será inserido
//           latexConfiguration: latexConfiguration,  // Configuração do LaTeX
//           keyboardMemory: keyboardMemory,  // Memória do teclado para manter o histórico
//         });
  
//         // Se você quiser registrar algum evento, por exemplo, ao pressionar uma tecla
//         mathField.on('keypress', (key) => {
//           console.log("Tecla pressionada:", key);
//         });
//       });

//     $('#get-latex').click(function() {
//         const latex = mathField.latex();
//         const expressão_crua = mathField.text();
//         expressao = latex;
//         // MathJax.typesetPromise([document.getElementById('latex-output')]);
//         // $('#latex-output').text(expressao);
       
//         // Fazendo a requisição POST para o backend
//         fetch('/api/latex-expression/analyze', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ valor: expressão_crua }),
//         })
//         .then(response => response.json())
//         .then( async data => { 
//             // console.log(data); // Manipule os dados aqui
//             novos_dados = JSON.parse(data); // converti para ser manipulado como um objeto
//             // novos_dados é o array que terá passo a passo a resolução da expressão numérica ou terá a mensagem de erro
//             // pra saber qual é qual basta acessar novos_dados[0]['tipo_de_ordem] se for o valor for 'Normal' ela armazena o passo a passo da resolução
//             // se for 'Anormal' tem a mensagem de erro 
//             const root = document.getElementById("root"); // root é o elemento pai, onde todos os outros elementos html estarão inseridos
//             // todos no sentido de elementos html da explicação da resolução
//             // ou os elem. html da mensagem de erro
            
//             if (novos_dados[0]['tipo_de_ordem'] == 'Anormal'){ // aqui está o elemento html da mensagem de erro
//                 // a mensagem de erro é colocada diretamente no root por meio do innerHTML
//                 // um detalhe importante é que caso fosse root.innerHTML += '' a mensagem de erro seriam concatenadas 
//                 // ou a mensagem de erro apareceria no final abaixo ou do lado dos elem. de resolução passo a passo, o que está errado
//                 // por isso usei NÃO SE DEVE USAR O +=
//                 // usa só o = porque assim tudo o que estava antes é apagado, sobrescrito, escrito por cima, desfazendo o anterior
//                 root.innerHTML += `  <div class="result-container">
//                             <img src="img/Ryo_sem_fundo.png" alt="Lupa">
//                             <div id="texto">
//                             <div class="main-message">A expressão tá escrita errada</div>
//                             <div class="sub-message">
//                             ${novos_dados[1]['erro']} <br> // é novos_dados[1]['erro'] porque as mensagens de erro estão no segundo elemento do array, ou seja, no índice 1
//                             </div>
//                         </div>`;
                   
//             }else{
//                 CriaDesign_da_solucao_passo_a_passo(novos_dados,root)}
//             }
//         )
//         .catch((error) => {
//         console.error('Error:', error);
//         });
//         });

    
// });



async function CriaDesign_da_solucao_passo_a_passo(new_data, raiz){
    const newDiv = document.createElement('div'); // elem. html que será empilhado na variável raiz como filho, ele será atribuído a existeDiv 
    raiz.innerHTML = ''; // apaga qualquer elemento html para que ele exiba somente a mensagem de solução passo a passo
           let existeDiv = document.querySelector('.root-container'); // existeDiv manipula o elem html root container
        // console.log(existeDiv);  porém ele pode não existir ainda no html 
        if (!existeDiv){ // nesse caso, verifico se foi retornado 'false', isso indica que o elemento não existe
            existeDiv = newDiv; // recebe um elemento html do tipo div, que já foi declaro mais acima
            existeDiv.classList.add('root-container'); // adiciona o nome da classe, agora sim a classe é root-container
            raiz.appendChild(existeDiv); // coloca esse elemento como filho do root
        }
            
        existeDiv.innerHTML = `<div class="input-expression sticky">
                                 <span id="expression"> <strong>\\( ${math.parse(new_data[1]['expressao']).toTex()}  \\)</strong> </span> 
                               </div>
                               <hr class="dashed-line">
                               <div class="solution-steps"> </div>`;
        // como o primeiro elemento do array novos_dados é o tipo_de_ordem a solução passo a passo começa do índice 1
        // por isso novos_dados[1]                                    
        // para o latex funcionar é necessário converter a string para latex usando math.parse().toTex()                                             

        
        // Seleciona a div onde os passos da solução serão inseridos
        const solutionStepsDiv = document.querySelector('.solution-steps');

        // Primeiro, esvaziamos a div caso ela já tenha algum conteúdo (para evitar duplicação ao atualizar)
        solutionStepsDiv.innerHTML = '';
        let html_string = '';
        let str = '';
        let expressao_antinga = ''; // expressão mais recente antes da expressão atual
        //ou seja, se a  expressão atual for (1 + 2), a antiga era (1 + (1+1)) e é essa expressão que é atribuída a variável expressão antiga 
        for (let i=1; i< new_data.length; i++){ // começa do i=1, porque a solução passo a passo começa do índice 1
            str = await colore(new_data[i]['expressao'],new_data[i]['passos']['subexpressao_atual'],expressao_antinga);
            html_string += `<div class="step">
             <h6> Expressão: \\( ${ str} \\) </h6>
             <div class="expression-step">
                 <h4> <strong> \\( ${math.parse(new_data[i]['passos']['subexpressao_atual']).toTex()}  = ${new_data[i]['resultado']} \\) </strong> </h4>
             </div>
             <div class="operation-title">
                 <span> ${new_data[i]['mensagens']['titulo']} </span>
                 <div class="operation-detail">
                     <p>  ${new_data[i]['mensagens']['descricao']} </p> `;    
             // exibe a subexpressão que será calculada, o título e a descrição
            for(let j=0; j < new_data[i]['passos']['resolucao'].length;j++ ){
                html_string += `<p> ${new_data[i]['passos']['resolucao'][j]} </p>`;
            } // exibe o passo a passo
            expressao_antinga = new_data[i]['expressao'];  // expressão antiga  
            html_string += `<div class="final-result">
                            <span>Resultado = <strong>${new_data[i]['resultado']} </strong></span>
                            </div>`;
         html_string +=`</div> </div> </div>`; // fecha as divs step, operation-title e operation-detail

        }
        let tam = new_data.length -1;
        html_string += ` <hr class="dashed-line">
                         <div class="final-result">
                            <span>Resultado Final: <strong> \\( ${math.parse(new_data[1]['expressao']).toTex() + " = " + new_data[tam]['resultado']} \\) </strong></span>
                            </div>`;
        //  const operations = document.querySelector('.operation-title');
        //  console.log("array de operations --> " + operations);
        //  operations.forEach(operation => {
        // operation.addEventListener('click', function() {
        //     const detail = this.querySelector('.operation-detail');
        //     detail.style.display = detail.style.display === 'none' || detail.style.display === '' ? 'block' : 'none';
        // });
        // });
        solutionStepsDiv.innerHTML = html_string;
        const operations = document.querySelectorAll('.operation-title');
        console.log("array de operations --> " + operations);
        operations.forEach(operation => {
        operation.addEventListener('click', function() { //esse evento permite que cada caixinha de subexpressão se abre ou se feche pelo seu próprio clique
            // na prática esse trecho adiciona um evento de clique para cada subexpressão da expressão numérica
            const detail = this.querySelector('.operation-detail');
            detail.style.display = detail.style.display === 'none' || detail.style.display === '' ? 'block' : 'none';
        });
        });
        MathJax.typeset();  //renderiza a equação no formato latex
}


