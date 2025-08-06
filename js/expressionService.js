console.log("Olá Mundo!")
console.log("Estou voltando a programar depois de muito tempo!")
// super_expressao = require('../public/Mathquill');

// console.log(super_expressao.expressao);

let prioridades = {
    para: 0,
    soma : 1 ,
    subtracao : 1,
    divi : 2,
    mult: 2,
    exp: 3
}

var follow = 0;
array_mensagens = [];
const mensagens = {
    '+': { titulo: "Soma Simples",
           descricao: 'Apenas some, atenção para não errar conta de somar, senão aí volta pro jardim de infância'       
    },
    '-': {
        titulo:"Subtração Simples",
        descricao:"Subtraia, cuidado com os sinais porque se o número depois do sinal for maior que o número que está antes o resultado será negativo ex.: (2 - 5 = -3)"
    },
    '*':{titulo:"Multiplicação Simples",
         descricao: "Apenas multiplique, cuidado com os sinais, clique para relembrar o regra dos sinais na multiplicação, mas de resto é só sair multiplicando"
     }, 
    '/':{titulo: "Divisão Simples" ,
        descricao: "Divida, cuidado com os sinais, clique para relembrar o regra dos sinais na divisão, se esqueceu como se faz divisão clique aqui. Essa conta não tem mistério é só dividir corretamente" 
    },
    '*/':{titulo: "Primeiro a Multiplicação" ,
        descricao: "Como a multiplicação aparece primeiro, resolve primeiro ela, em seguida com resultado dessa multiplicação, faça a divisão"
    },
    '*+': { titulo:"Primeiro a Multiplicação" ,
            descricao: 'Faça primeiro a multiplicação, porque ela tem maior procedência que a soma, se você não entendeu porque isso clique aqui, após multiplicar, faça as somas e printo'
        },
    '*-': { titulo:"Primeiro a Multiplicação" ,
        descricao: 'Faça primeiro a multiplicação, porque ela tem maior procedência que a subtração, se você não entendeu porque isso clique aqui, após multiplicar, faça as somas e printo'
    },
    '/-':{
        titulo: "Primeiro a Divisão",
        descricao: "Faça primeiro a divisão, porque ela tem maior procedência que a subtração, se você não entendeu porque isso clique aqui, após dividir, faça as subtrações e pronto."
    },
    '/+':{
        titulo: "Primeiro a Divisão",
        descricao: "Faça primeiro a divisão, porque ela tem maior procedência que a soma, se você não entendeu porque isso clique aqui, após dividir, faça a soma e pronto"
    },
    "*/+":{
        titulo: 'Primeiro a multiplicação, em seguida a divisão, depois a soma',
        descricao:"Faça primeiro a multiplicação, depois a divisão, porque essas operações tem maior prioridade, depois faça a soma"
    },
    "*/-":{
        titulo: 'Primeiro a multiplicação, em seguida a divisão, depois a subtração',
        descricao: "Faça primeiro a multiplicação, depois a divisão, porque essas operações tem maior prioridade, depois faça a subtração"
    },
    "/*+":{
        titulo: 'Primeiro a divisão, em seguida a multiplicação, depois a soma',
        descricao: "Faça primeiro a divisão, depois a multiplicação, porque essas operações tem maior prioridade, depois faça a soma"
    },
    "/*-":{
        titulo: 'Primeiro a divisão, em seguida a multiplicação, depois a subtração',
        descricao: "Faça primeiro a divisão, depois a multiplicação, porque essas operações tem maior prioridade, depois faça a soma"
    },
    '/*-+':{
        titulo: 'Primeiro a divisão, em seguida a multiplicação, depois subtração e soma',
        descricao:"Faça primeiro a divisão, em seguida a multiplicação, porque essas operações tem maior prioridade, depois faça a subtração ou a soma, tanto faz qual delas fazer primeiro"
    },
    '/*+-':{
        titulo: 'Primeiro a divisão, em seguida a multiplicação, depois a soma e subtração',
        descricao:"Faça primeiro a divisão, em seguida a multiplicação, porque essas operações tem maior prioridade, depois faça a soma ou a subtração, tanto faz qual delas fazer primeiro"
    },
    '*/+-':{
        titulo: 'Primeiro a multiplicação, em seguida a divisãp, depois a soma e subtração',
        descricao:"Faça primeiro a multiplicação, em seguida a divisão, porque essas operações tem maior prioridade, depois faça a soma ou a subtração, tanto faz qual delas fazer primeiro"
    },
    '*/-+':{
        titulo: 'Primeiro a multiplicação, em seguida a divisãp, depois a soma e subtração',
        descricao:"Faça primeiro a divisão, em seguida a multiplicação, porque essas operações tem maior prioridade, depois faça a soma ou a subtração, tanto faz qual delas fazer primeiro"
    },
    '-+': {
        titulo: "Soma e Subtraia na ordem em que aparecer",
        descricao: "A soma e subtração tem a mesma prioridade, nesse caso, resolve a que aparecer primeiro"
    },
    '+-': {
        titulo: "Soma e Subtraia na ordem em que aparecer",
        descricao: "A soma e subtração tem a mesma prioridade, nesse caso, resolve a que aparecer primeiro"
    },
    '^-':{
        titulo: "Calcule primeiro a potência",
        descricao: "Calcule primeiro a potência,clique aqui caso tenha dúvidas, depois faça a subtração"
    },
    '^+':{
        titulo: "Calcule primeiro a potência",
        descricao: "Calcule primeiro a potência,clique aqui caso tenha dúvidas, depois faça a soma"
    },
    '^*+': {
        titulo: "Primeiro a potência, depois a multiplicação e o resto não importa a ordem",
        descricao: "Calcule primeiro a potência, caso não saiba calcular potência clique aqui, depois faça a multiplicação, e depois a soma"
    },
    '^*':{
        titulo: "Primeiro a potência, depois a multiplicação",
        descricao: "Calcule primeiro a potência, caso não saiba calcular potência clique aqui, depois faça a multiplicação"
    },
    '*+-':{
        titulo: "Primeiro a multiplicação",
        descricao: "Calcule primeiro a multiplicação não importa onde ela esteja, depois disso, simplesmente calcule a soma e subtração na ordem que aparecer"
    },
    '*-+':{
        titulo: "Primeiro a multiplicação",
        descricao: "Calcule primeiro a multiplicação não importa onde ela esteja, depois disso, simplesmente calcule a soma e subtração na ordem que aparecer"
    },
    '^*+-':{
        titulo: "Primeiro a potência, depois a multiplicação e o resto não importa a ordem",
        descricao: "Calcule primeiro a potência, caso não saiba calcular potência clique aqui, depois a multiplicação, e o resto a soma e subtração calcule na ordem em que aparecer"
    },
    '^*-':{
        titulo: "Primeiro a potência, depois a multiplicação e por último a subtração",
        descricao: "Calcule primeiro a potência, porque ela tem maior ordem de procedência, depois faça a multiplicação, tenha atenção aos sinais, e por último faça a subtração"
    }
     
}

// novo comentário para testar o push e pull do projeto mathProject sem backend
var operador = '';
var retorno_da_requisicao = []; // o retorno da requisição será um array de dicionário
const subexpressao_json = {}; // json que armazena todas as informações de uma subexpressão. título, descrição, passos
var operator_stack = []; // pilha para armazenar operadores (+,*, -, /)
var postfix_stack = []; // pilha para armazenar os números 
var pilha_de_nos = []; // pilha para armazenar os nós que são resultados das operações, (2) +(2) gera o nó (4)
var expressao_atual = ''; // variável que guarda a subexpressão que exibida passo a passo na resolução da expressão 
// var expression = '(3+(sin(cos(3))+cos(4+sqrt(16)*sin(9))))';
// var expression = '((4/9)+((5/2)^2-sqrt((160/81)+(1/9))))';
// var expression = '((0-4)*(3^2-5)/8+(1/2)^3-(2+3/4))';
// var expression = '(5+4+((3+2)+7*5))';
// var expression = '(((1+1)+(2+2)+(3+3)+(4+4))*((1+1)+(2+2)+(3+3)+(4+4)))';
//var expression = '(12+(11*(56-(20-10/2)*3)-5))';
// var expression = '((2+(1+1)))';
// var expression = '(2+3*5^3)';
// var expression = '((1+2)*(3+4))';
//var expression = '(1+(5*4+2)+3*7)';
// var expression = '(sqrt(1+1+1+1))';
//var expression = '((1+1+2+1+1+1+1+1+1+1+1)+3*2^4+1)';
// var expression = '(1+2-(3+4)*(5+6))';
// var expression = '(sqrt((2+1)))';
// var expression = '(1.5 + 0.5)';
//var expression = "(30*((6/5)^-1-0.4)*((1.2-2^-1)/(5-3.7)))"; // 05/04/2024 esse expressão causa um bug
// var expression = "((6/5)^-1-0.4)"; // essa expressão gera o problema do número negativo
// var expression = '(-2+5)';
// var expression = '(-1-1-1-1-1-1-1-1-1-1-1-1-(-1+3))';
// var expression = '(-2*(-2+1))';
//var expression = '((2+2)/(4*4))'; // 05/04/2024 esse expressão causa um bug
//var expression = '((2+2)*(4*4))';
//var expression = '((-10)*(-3)+(-5)/(-2)-(-7)*(-4))'; // outro bug descoberto, o algoritmo dá erro para parentêses com um único número
// var expression = '((-4)+(5)+(-6)+(7))';
// var expression = '((2+5)/(1+3))';
// var expression = '(-4^-3-5)'
//var expression = '(1+2)';
//var expression = '(1+(2+3))';
// var expression = '((-1/3)^2+cbrt(8)-(-2/3)^2*(1/27)^(-1/3))'; // 29/04/2024 meu algoritmo não lê raiz cúbica ou qualquer outra raiz que não seja raiz quadrada (Resolvido) 
/*
  Quando a expressão tem espaços vazios, assim: "2 + 4" dá erro!
  o certo é escrever assim: "2+4", sem nenhum espaço
*/
var prior = '';
var number = '';
var palavra = '';
var topo = -1;
var pilha_de_subexpressoes = [];
// console.log(expression);

topo = -1


function soma(x,y){
    return x+y
}

class Letra {
    constructor(letra){
        this.letra = letra;
    }
    get value(){
        return this.letra;
    }
}

// classe para os números
class Numero {
    num = '';
    prioridade = 1000000000; // esse atributo serve para resolver o problema dos expoentes negativos, nesse caso os números são empilhados na operator stack e por isso precisam de uma alta prioridade para serem empilhados na frente de todos
    _inverte = false; // variável lógica que inverte o número porque ele está sendo elevado por um expoente negativo
    constructor(num){
        this.num = num;
    }
    get value(){
        if (this._inverte){
            return Number( 1 / this.num);
        }else{
            return Number(this.num);
        }   
    }

    /**
     * @param {boolean} log
     */
    set inverte(log){ 
        this._inverte = log;
    }
}
// classe para as funções matemáticas
class Funcao{
    constructor(nome){
        this.nome = nome;
    }
}

class Node {
    contL=0; // atributo que conta quantos L's uma árvore tem, é um atributo público
    constructor(value, prior=0) {
        this.value = value;
        this.prior = prior;
        this.left = null;
        this.right = null;
    }

    set conta_Ls(contL=0){
        this.contL =0;
    }
}

// refazendo o algoritmo de conversão de infixa para pós fixa
class Operadores{
    constructor(simbolo){
        this.simbolo = simbolo;
        this.prior_simbol = 0;
       // tipo(); // define um atributo, é um setter
    }    
    static num_oper = 0;
    static max_prior = 1;
    static freq_abre_parenteses = 0; 
   
   /**
     * @param {any} simbol_prior
     */
   set simbol_prior(simbol_prior){
    this.prior_simbol = simbol_prior;
   }
   
   get tipo(){ // é um getter, retorna uma propriedade, um atributo. 
        // o getter funciona como um atributo, ou seja, na classe Operadores existe o atributo tipo 
         if (this.simbolo == '+'){
             return 'soma';
         }else if (this.simbolo == '-'){
            return 'subtracao';
         }else if (this.simbolo == '*'){
            return 'mult';
         }else if (this.simbolo == '/'){
            return 'divi';
         }else if (this.simbolo == '^'){
            return 'exp';
         }else if (this.simbolo == '('){
            return 'para';
         }
    }

    get prioridade(){ // função getter, que também é um atributo da classe Operadores
        let type = this.tipo;
        if (type == 'soma' || type == 'subtracao'){
            return 1;
        }else if (type == 'mult' || type == 'divi'){
            return 2;
        }else if (type == 'exp'){
            return 3;
        }else if (type == 'para'){
            return 0;
        }
    }
}

class ParentEspeciais extends Operadores{
    constructor(simbolo,palavra){
        super(simbolo);
        this.funcao = palavra;
    }
    get nome_da_funcao(){
        return this.funcao;
    }
}

function ehLetra(caractere) {
    // Expressão regular para verificar se o caractere é uma letra
    const regexLetra = /^[a-zA-Z]$/;
    
    // Testa se o caractere corresponde à expressão regular
    return regexLetra.test(caractere);
}

var paranteses_prioridade = 1;



// console.log(postfix_stack);
postfix_stack =[];
let sub_criada = false;
let ocorrencia = 0;
function criaExpressaoPosfixa(expression){
    // nova alteração 04/04/2024
// irei transformar cada subárvore em uma árvore própria
// atualização 19/03/2024 talvez a explicação anterior tenha ficado confusa, o que eu fiz nesse código foi
// transformar cada subexpressão entre parentêses em uma árvore.
// atualização 20/03/2024
// o programa está com erro, nem todas as vezes a letra 'L' deve ser empilhada, as vezes ela é empilhada desnecessariamente 
// atualização 21/03/2024
// o erro do 'L' empilhado desnecessariamente foi resolvido porém é necessário mais teste para ver se não tem algum erro
// atualização 26/03/2024
// só hoje depois de meses no projeto, que percebi que o meu algoritmo não lida com números decimais!!!!
// é muito importante pedir para as pessoas testarem, porque eles percebem coisas que eu não consigo!!
// atualização 27/03/2024
// finalmente uma parte dos problemas envolvendo o sinal de (-) foi resolvido, quando um número negativo vem antes dos parênteses
// agora, falta resolver quando uma expressão tem um expoente elevado a um número negativo  
for(let i of expression){
    // console.log(i); imprime o token
    console.log("Símbolo na agulha "+ i + "follow atual " + follow); 
    if ((!isNaN(i) || i == '.') && ( follow === 0 || follow === 1 || follow === 2 ) ){
        number =number + i;
        follow = 2;
    }else if (ehLetra(i)){ // é letra para concatenar as funções especiais, como seno, cosseno, sqrt
        console.log('entra no eh letra');
        palavra = palavra + i;
    }else if ((!isNaN(i) || i == '.') && follow === 3) { // exemplo do caso:  )4, tá errado porque falta um operador, exemplo, )+4, assim estaria certo
        return "Expressão mal escrita, entre o fecha parenteses e o número faltou um operador";
    }else{
        if (number != ''){
            nume = new Numero(number); // Cria a instância da classe Numero para o número encontrado 
            if (operator_stack[topo].simbolo == "^"){ // empilha o número na operator_stack por causa do expoente
                operator_stack.push(nume); // empilhar esse número logo após o expoente garantirá uma forma de diferenciar um (-) de subtração de outro que indica um expoente negativo 
                topo++;
            }else{
                postfix_stack.push(nume); // empilha o número encontrado como um objeto da classe Numero
            }
            number=''; 
        }
    if (i == '(' || i == ')'){
            
            if ( i == '(' && (follow == 0 || follow == 1)){
                console.log("valor do follow quando tem o abre parenteses na agulha" + follow);
                follow = 0;    
                if (palavra != ''){
                   para_inst = new ParentEspeciais(i,palavra);  
                   palavra='';
                }else{
                    para_inst = new Operadores(i);
                }
                Operadores.freq_abre_parenteses++; // conta a frequencia de abre parenteses, que será usada para eliminar os inúteis
                operator_stack.push(para_inst); // empilha um objeto da classe operadores ( que nesse caso é um 'abre parenteses')
                postfix_stack.push(para_inst); // empilha o parênteses na pilha pós fixa
                topo++;
            }else if (i === '(' && (follow == 2 || follow == 3)){
                console.log("valor do follow quando tem o abre parenteses na agulha, só entra aqui" + follow);
                console.log("O valor da expressão está sendo alterado ! "+ i);
                if (follow == 2){ // ex. desse caso '5(' errado tem que ter um operador, ex.: 5+( correto!
                    return 'Faltou um operador entre o número e o abre parenteses';
                }
                else{ //  ex. desse caso ')(' errado, faltou um operador, ex.: )+(
                    return 'Faltou um operador entre o fecha parenteses e o abre parenteses';
                }
            }
            else if (i == ')' && (follow == 2 || follow == 3)){
                ocorrencia++; // conta a quantidade de fecha parenteses
                follow = 3;
                while(operator_stack[topo].simbolo != '('){ // desempilha os operadores até chegar no '('
                    // postfix_stack.push(operator_stack[topo].simbolo); empilhando diretamente o que está no topo (simplesmente tirar o atributo símbolo), o que será empilhado é uma instância da classe operadores
                    if (sub_criada == true){
                        postfix_stack.push(new Letra('L'));
                        sub_criada = false;
                    }else{
                        postfix_stack.push(operator_stack[topo]); // empilhando uma instância da classe Operadores 
                        operator_stack.pop();
                        topo--;
                    }                    
                };
                if (postfix_stack[postfix_stack.length -1] == undefined){
                    console.log('ERRO!!!')
                }else{
                    postfix_stack[postfix_stack.length -1].prior_simbol = paranteses_prioridade; // chama o método setter para definir a prioridade do símbolo associado a esse operador 
                    paranteses_prioridade++;
                }
                
                if (operator_stack[topo].constructor.name == 'ParentEspeciais'){ // empilha a função que será implementada
                    // console.log(operator_stack[topo].funcao); exibe o nome da função
                    console.log(operator_stack[topo].constructor.name);
                    postfix_stack.push(new Funcao(operator_stack[topo].funcao)); // empilha como instância da classe Função uma função matemática
                    Operadores.num_oper++; // acrescenta mais uma conta na quantidade de contas a serem feitas, a conta a ser feita será uma função matemática 
                }
                 let subexpressao = []; // essa variável armazena uma expressão entre parenteses, o que chamo de "subexpressão"
                 while(postfix_stack[postfix_stack.length-1].simbolo != '('){ // desempilha uma subexpressão completa  
                        subexpressao.push(postfix_stack.pop()); // desempilhando o topo da pilha pós fixa e empilha na subpilha onde será armazenada as subárvores
                 }
                 postfix_stack.pop() // retira o abre parentêses
                //  postfix_stack.push(new Letra('L')); // coloca a letra 'L' para ocupar o espaço vazio que foi deixado pela subexpressão desempilhada
                //  sub_criada = true; // deixa ativado uma booleana indicando que uma subexpressão foi criada, permitindo, caso necessário, empilhar um símbolo para que as subárvores sejam criadas corretamente
                //  console.log('Subexpressão separada', subexpressao); 
                //  postfix_stack.push(subexpressao[0]); // recoloca o primeiro operador da subexpressão na pilha pós fixa
                console.log("Tamanho da subexpressão " + subexpressao.length);
                if (subexpressao.length != 0){ // se entra no if com toda a certeza uma subexpressão foi criada
                    // para saber se é necessário preencher o vazio deixado pela subexpressão retirada, é preciso olhar o que tem antes
                    // da subexpressão e o que vem depois, se antes da subexpressão retirada houver um operador (-,+,*,/) então é necessário preencher o vazio
                    // para ver o que vem antes basta olhar a pilha pósfixa no topo, se for um operador (-,+,*,/), então um símbolo deve ser empilhado para preencher o vazio
                    // caso não seja um operador (-,+,*,/), com toda a certeza, será um '(' ou '' (vazio), no caso do '(', será necessário mais informações para empilhar
                    // caso seja ''(vazio) não é necessário empilhar nada, na verdade, a própria expressão numérica acabou quando isso acontece
                    // console.log('Símbolo no topo da pilha, após a retirada da subexpressão', postfix_stack[postfix_stack.length-1]);
                    if (postfix_stack.length == 0){
                        // console.log("A expressão numérica terminou de ser lida!")
                    }else if (ehFuncao(postfix_stack[postfix_stack.length-1].funcao) || !isNaN(postfix_stack[postfix_stack.length-1].num) || ehOperando(postfix_stack[postfix_stack.length-1].simbolo) || postfix_stack[postfix_stack.length-1].letra == 'L' ){
                        // console.log('empilhou L')
                        postfix_stack.push(new Letra('L'));  
                    }else if (postfix_stack[postfix_stack.length-1].simbolo == '('){
                        sub_criada = true; // deixa ativado uma booleana indicando que uma subexpressão foi criada, permitindo, caso necessário, empilhar um símbolo para que as subárvores sejam criadas corretamente   
                    }
                    // console.log("Subexpressões");
                    // console.log(subexpressao);
                    pilha_de_subexpressoes.push(construirArvoreExpressaoPosFixada(subexpressao)); // empilha uma subexpressão na pilha de subexpressões  
                }else{ // else para retirar parênteses inúteis 13/09/2024
                    console.log('entrou');
                    let count = 0;
                    expression = expression.replace(/\(/g,(match) =>{
                        count++;
                        return count === (Operadores.freq_abre_parenteses-1) ? "" : match;
                    }); //retirar o abre parenteses é simples, retirar o primeiro resolve, não gera efeitos colaterais
                    count = 0;
                    Operadores.freq_abre_parenteses--; // como acabei de apagar um ( devo descontar uma unidade na contagem
                    expression = expression.replace(/\)/g, (match) => { // já retirar o fecha parenteses tem que ser com cuidado, a ordem importa, um fecha parenteses mal tirada altera a expressão
                        count++;
                        return count === ocorrencia ? "" : match; // o que eu fiz foi retirar o fecha parenteses indicado pela ocorrencia, ou seja, se é para tirar o quinto eu tiro exatamente esse
                    });
                    ocorrencia--; // diminui, porque se um ) foi retirado o número de ocorrencias diminuiu uma unidade
                    console.log("Expressao apos o replace " + expression);
                }
                operator_stack.pop(); // desempilha o abre parênteses da operator_stack
                topo--; 
            
        }else if (i == ')' && (follow == 0 || follow == 1)){
                console.log("valor do follow quando tem o fecha parenteses na agulha" + follow);
                if (follow == 1){ // +) errado!, o correto é +5)
                    return "Faltou um número entre o operador e o fecha parênteses";
                }else{ // exemplo de caso que gera erro: (), errado é um parênteses vazio
                    return "Faltou elementos dentro dos parênteses";
                }
        } 
    }else if (follow == 2 || follow == 3){
            follow = 1;
            if (sub_criada){
                postfix_stack.push(new Letra('L'));
                sub_criada = false;
            }
            if ( i == '^'){
                Operadores.num_oper++; // variável estática que soma a quantidade de operadores
                exponencial_inst = new Operadores(i);
                while (operator_stack[topo].prioridade == exponencial_inst.prioridade){
                    // postfix_stack.push(operator_stack[topo].simbolo);
                    postfix_stack.push(operator_stack[topo]); // empilhando uma instância da classe Operadores
                    operator_stack.pop();
                    topo--;
                }
                topo++;
                operator_stack.push(exponencial_inst);    // empilha um objeto da classe exponencial_inst (com todos os seus atributos e métodos)   
            }else if ( i == '÷'){
                Operadores.num_oper++;
                divi_inst = new Operadores('/');
                while(operator_stack[topo].prioridade >= divi_inst.prioridade){
                    // postfix_stack.push(operator_stack[topo].simbolo);
                    postfix_stack.push(operator_stack[topo]); // empilhando uma instância da classe Operadores
                    operator_stack.pop();
                    topo--;
                }
                topo++;
                operator_stack.push(divi_inst);      
            }
            else if ( i == '+'){
                Operadores.num_oper++;
                soma_inst = new Operadores(i);
                while(operator_stack[topo].prioridade >= soma_inst.prioridade){
                    // postfix_stack.push(operator_stack[topo].simbolo);
                    postfix_stack.push(operator_stack[topo]); // empilhando uma instância da classe Operadores
                    operator_stack.pop();
                    topo--;
                }
                topo++;
                operator_stack.push(soma_inst);      
            }else if ( i == '-'){ // o código nesse trecho tem um bug, ele não está conseguindo identificar números negativos 
                Operadores.num_oper++;
                sub_inst = new Operadores(i);
                if (operator_stack[topo].simbolo == '(' && postfix_stack[postfix_stack.length-1].simbolo == '('){
                    number = i + number;
                }else if (operator_stack[topo].simbolo == "^"){
                   // postfix_stack[postfix_stack.length-1].inverte = true;
                   number = i + number; 
                }
                else{
                    while(operator_stack[topo].prioridade >= sub_inst.prioridade){
                    // postfix_stack.push(operator_stack[topo].simbolo);
                    postfix_stack.push(operator_stack[topo]); // empilhando uma instância da classe Operadores
                    operator_stack.pop();
                    topo--;
                }
                topo++;
                operator_stack.push(sub_inst);
                }     
            }else if ( i == '*'){
                Operadores.num_oper++;
                mult_inst = new Operadores(i);
                while(operator_stack[topo].prioridade >= mult_inst.prioridade){
                    // postfix_stack.push(operator_stack[topo].simbolo);
                    postfix_stack.push(operator_stack[topo]); // empilhando uma instância da classe Operadores
                    operator_stack.pop();
                    topo--;
                }
                topo++;
                operator_stack.push(mult_inst);      
            } 
        }else if (follow == 0 || follow == 1){
            if (follow == 0){ //  ex.: (+, o correto é (3+
                return 'faltou um número entre o abre parênteses e o operador';
            }else{ // ++, o correto é +2+
                return 'Faltou um número ou parenteses entre os operadores';
            }
        }        
    }
}
return expression.replaceAll('÷','/'); // porque o caractere ÷ não é reconhecido pelo javascript causando erro na hora de usar a função eval na linha xx, então é necessário substituir por /
}



topo = -1
// console.log('postfix stack',postfix_stack);
// console.log("Calculando a expressão!")



function construirArvoreExpressaoPosFixada(arrayPosFixado) {
    const pilha = [];
    arrayPosFixado.reverse();
    let contL =0;
    let simbol_conc = '';
    for (let token of arrayPosFixado) {
        if (ehOperando(token.simbolo)) {
            let novoNode = new Node(token.simbolo, token.prior_simbol);
            if (!simbol_conc.includes(token.simbolo)){ // concatena os operadores
                // sendo que ele concatena só os símbolos que ainda não foram concatenados, ou seja, simbolos repetidos não entra
                simbol_conc += token.simbolo;
            }
            // if (pilha.length === 0){
            //     console.log("Nó que não tem filhos ", novoNode.value)
            //     novoNode.left = null;                                    Todo esse trecho comentado não tem utilidade
            //     novoNode.right = null;
            // }else if (pilha.length === 1){
            //     novoNode.right = pilha.pop();
            //     novoNode.left = null;
            // }else{
            novoNode.right = pilha.pop();
            novoNode.left = pilha.pop();
            // }
            pilha.push(novoNode);
        }else if(ehFuncao(token.nome)){
            // console.log('funcao achada', token);
            novoNode = new Node(token.nome);
            novoNode.left = pilha.pop();
            pilha.push(novoNode);
        } else {
            // console.log(token.value);
            if (token.letra == 'L'){ // conta quantos Ls tem na subárvore
                contL++;
            }
            pilha.push(new Node(token.value));
        }
    }
    pilha[0].contL = contL;
    console.log("Simbolos concatenados " + simbol_conc); // simbol_conc é a concatenação de todos os operadores de uma subexpressão, sem repetir operadores, ou seja, se numa subexpressão tiver dois ou mais '+' no simbol_conc terá apenas um '+'
    array_mensagens.push(mensagens[simbol_conc]); // array_mensagens é um array de explicações, ou seja, armazena as explicações de todas as subexpressões que uma expressão numérica tem 
     console.log(mensagens[simbol_conc]); // mensagens é um dicionário que armaneza explicações, ela terá uma mensagem expecífica para cada valor da var. simbol_conc
    //console.log("A quantidade de L na subárvore " + pilha[0].contL);
    return pilha.pop();
    
}



function ehOperando(token) {
    // Verifica se o token é um operando (número, variável, etc.)
    return ["+", "-", "*", "/", "^"].includes(token);
}

function ehFuncao(token){
    // Verifique se o token é uma função (sen,cos,tan,sqrt, etc.)
    return ["sin","cos", "sqrt", "tan", "cbrt"].includes(token);    
}

// Exemplo de array em pós-ordem: ["2", "3", "4", "*", "+"]

// Função para calcular a profundidade a partir de um nó
function profundidadeAPartirDeNo(no) {
    // Se o nó for nulo, a profundidade é 0
    if (no === null) {
        return 0;
    } else {
        // Calcular a profundidade recursivamente para os filhos esquerdo e direito
        let profundidadeEsquerda = profundidadeAPartirDeNo(no.left);
        let profundidadeDireita = profundidadeAPartirDeNo(no.right);

        // A profundidade é o máximo entre a profundidade do filho esquerdo e direito, mais 1 para contar o próprio nó
        return Math.max(profundidadeEsquerda, profundidadeDireita) + 1;
    }
}

// let raizArvore = construirArvoreExpressaoPosFixada(postfix_stack); // constrói a árvore
// console.log(raizArvore);

function preOrdem(no) { // percorre a árvore em pre ordem
    if (no != null) {
        console.log(no.value); // Visitar o nó
        preOrdem(no.left);  // Percorrer a subárvore esquerda
        preOrdem(no.right);   // Percorrer a subárvore direita
    }
}

function emOrdemNormal(no){
    if (no != null){
        console.log("Nó atual " + no.value + "Contador de Ls " + no.contL);
        if (no.contL > 1){ // sempre é o nó pai que contem a contagem de Ls, por isso mesmo que esse if faça vários testes, a pilha de nós será invertida só nos momentos corretos
            console.log("Inverteu os elementos");
            inverte_Elementos(no.contL);    
        }
        if(no.value == 'L'){
            const no_auxi = pilha_de_nos.pop() // estou desempilhando um nó, não apenas um número
            //  console.log("Trocou o L por " + no_aux.value); // imprime o valor do nó
            console.log(no.value + " ---- " + no_auxi.value);
            if (no_auxi.value != undefined){
                // if (no.contL > 1){ // verifica a quantidade de Ls na árvore para inverter os valores na pilha
                //     inverte_Elementos(no.contL);
                // }
                no.value = no_auxi.value;
                no.left = no_auxi.left;
                no.right = no_auxi.right;
            } 
             
        }
        return emOrdemNormal(no.left)+ no.value.toString() + emOrdemNormal(no.right);
    }else{
        return " ";
    }
}

function emOrdem(no){
    if (no != null){
        // if (no.contL > 0){ // verifica a quantidade de Ls na árvore para inverter os valores na pilha
        //     inverte_Elementos(no.contL);
        // }
        // if(no.value == 'L'){
        //      let no_aux = pilha_de_nos.pop() // estou desempilhando um nó, não apenas um número
        //      console.log("Trocou o L por " + no_aux.value); // imprime o valor do nó
        //      return no_aux; 
        // }
        if (isNaN(no.value)){
            let val = emOrdem(no.left);
            if (val != null){
                no.left = val;
            }
        } 
        // console.log(no.value); a impressão será feita na hora do cálculo 
        // uma possibilidade é concatenar os números para mostrar qual subexpressão será calculada
        if (isNaN(no.value)){
            let val = emOrdem(no.right);
            if (val != null){
                no.right = val;
            }
        }
        if (ehOperando(no.value)){
            i = no.value; 
            let num = 0;
            // caso um dos operandos seja nulo a operação não será feita
            if (no.left == undefined || no.right == undefined ){
                console.log("A operação não poder ser executada, um dos operandos é nulo");
                return null;
            }else{
                if (i == '^'){
                   num = no.left.value ** no.right.value;
                   subexpressao_json.passos.resolucao.push(expressao_atual + "---> " + no.left.value + " ^ " + no.right.value + " = " + num);
                //    console.log(expressao_atual + "---> " + no.left.value + " ^ " + no.right.value + " = " + num); 
                 }else if (i == '*'){
                    num = no.left.value * no.right.value;
                    subexpressao_json.passos.resolucao.push(expressao_atual + "---> " + no.left.value + " * " + no.right.value + " = " + num);
                    // console.log(expressao_atual + "---> " + no.left.value + " * " + no.right.value + " = " + num);
                 }else if (i == '+'){
                    num = no.left.value + no.right.value;
                    subexpressao_json.passos.resolucao.push(expressao_atual + "---> " + no.left.value + " + " + no.right.value + " = " + num);
                    // console.log(expressao_atual + "---> " + no.left.value + " + " + no.right.value + " = " + num);
                 }else if (i == '-'){
                    num = no.left.value - no.right.value;
                    subexpressao_json.passos.resolucao.push(expressao_atual + "---> " + no.left.value + " - " + no.right.value + " = " + num);
                    // console.log(expressao_atual + "---> " + no.left.value + " - " + no.right.value + " = " + num);
                 }else if (i == '/'){
                    num = no.left.value / no.right.value;
                    subexpressao_json.passos.resolucao.push(expressao_atual + "---> " + no.left.value + " / " + no.right.value + " = " + num);
                    // console.log(expressao_atual + "---> " + no.left.value + " / " + no.right.value + " = " + num);
                }
                expressao_atual = expressao_atual.replace(no.left.value.toString() + " " + i + " " + no.right.value.toString(), num.toString());
                // expressao_atual = elimina_elemento(num.toString(),expressao_atual);

                //  no.value = num;
                no.left = null;
                no.right = null;
                no = null; 
                return new Node(num); // executar para entender melhor essa parte    
            }
        }else if (ehFuncao(no.value)){
             let i = no.value;
             let left = Number(no.left.value);
            //  console.log("A próxima operação a ser feita será "+i+"("+left+")");
             no.left = null;
             let num=0;
             if (i == 'cos'){
                 num = Math.cos(left);
                //  console.log(expressao_atual + "---> A próxima operação a ser feita será "+i+"("+left+") = " + num);
             }else if (i == 'sin'){
                 num = Math.sin(left);
                //  console.log(expressao_atual + "---> A próxima operação a ser feita será "+i+"("+left+") = " + num);
             }else if (i == 'sqrt'){
                 num = Math.sqrt(left);
                //  console.log(expressao_atual + "---> A próxima operação a ser feita será "+i+"("+left+") = " + num);
             }else if (i == 'cbrt'){
                num = Math.cbrt(left);
                // console.log(expressao_atual + "---> A próxima operação a ser feita será "+i+"("+left+") = " + num);
             }
             no.right = null;
             no.left = null;
             no = null;
            //  console.log("Resultado " + no.value); esse valor pode
            // substituir o parentêses calculado 
            return new Node(num);
        }
        return no;  
     }
    //  else{
    //      let no_aux = pilha.pop() // estou desempilhando um nó, não apenas um número
    //      console.log(no_aux.value); // imprime o valor do nó
    //      return no_aux; 
    //  }
}
// esse algoritmo inverte os elementos que estão no topo da pilha
function inverte_Elementos(contL){ // conferir se esse algoritmo funciona para todos os casos
    let i = pilha_de_nos.length - 1 - contL + 1;
    let j = pilha_de_nos.length -1;
    let aux = 0;
    while (i < j){
        aux = pilha_de_nos[j];
        pilha_de_nos[j] = pilha_de_nos[i];
        pilha_de_nos[i] = aux;
        j--;    
        i++;
    }
}

function Eh_envolvida_por_paretenses( number){
    let contador_abre = 0;
    let tem_parenteses = true;
    for (i=0; i < number.length ; i++){
        if (number[i] == '('){
            contador_abre++;
        }else if (number[i] == ')'){
            contador_abre--;
        }else if (tem_parenteses){
            if (contador_abre == 0){
                tem_parenteses = false;
            }
        }
    }
    if (!tem_parenteses){
        if(contador_abre >0)
           number =  number+')'.repeat(contador_abre);
        else if (contador_abre <0)
            number = '('.repeat(contador_abre) + number;
        else {
            number = '(' + number + ')';
        }
    }
    return number;
}

    

const analyzeExpression  = (expressao) =>{
    console.log("expressão entrada " + expressao);
    expressao = Eh_envolvida_por_paretenses(expressao);
    console.log("expressão tratada " + expressao);
    follow = 0; // o follow tem que ser zerado toda vez que uma nova expressão é chamada, a declaração do follow no escopo global (fora das funções) só é carregada quando o código é carregado no início (quando o servidor é ligado), por isso 
    // quando uma nova expressão do front end é recebida o valor do follow é o que foi armazenado por último na execução anterior e isso causa um efeito colateral na expressão atual 
    // por isso zero o follow aqui
    pilha_de_subexpressoes = [];
    retorno_da_requisicao = [];
    pilha_de_nos = [];
    ocorrencia = 0;
    Operadores.freq_abre_parenteses =0;
    expressao = criaExpressaoPosfixa(expressao);
    try { // 28/11/2024 trecho que avalia se o retorna da função CriaExpressãoPosfixa é uma string de expressão numérica ou uma string de texto
        // se for uma expressão numérica significa que ela não tem nenhum erro
        // se for uma string de texto significa que a expressão numérica tem erros
        // Tenta avaliar a expressão
        eval(expressao); // Verifica se o resultado é um número
    } catch (error) { // se deu erro é porque a variável expressão na verdade é uma string de texto
        console.log("Erro : " + expressao);
        return JSON.stringify([{  // daí crio um array de json para retornar para o front end com duas chaves tipos_de_ordem que indican o tipo de expressão 'Normal' ou 'Anormal' e 'erro' que contem a mensagem que descreve o erro   
            tipo_de_ordem: 'Anormal'}, // tipo_de_ordem é o nome da chave que indica se a expressão está correta, caso esteja o valor será 'Normal', caso não esteja o valor será 'Anormal'
            {'erro': expressao}] // a variável expressão contem a mensagem que descreve qual o erro que foi identificado
    ); // Retorna falso se não puder ser avaliada como expressão numérica
    }
    const tipoOrd = {tipo_de_ordem : "Normal"}; // json para indicar que a expressão é normal, sem erros 
    subexpressao_json.expressao = expressao;
    // subexpressao_json.mensagens = []; // array com a explicação de cada subexpressão entre parênteses
    subexpressao_json.mensagens = {};
    // subexpressao_json.passos = []; // array com a subexpressão atual
    subexpressao_json.passos = {};
    subexpressao_json.passos.subexpressao_atual = '';
    subexpressao_json.passos.resolucao = [];
    console.log("Retorna da requisição " + retorno_da_requisicao ); 
    subexpressao_json.resultado = 0.0;
    console.log("Resolvendo a expressão " + expressao);
    let expressao_inicial = ''; // guarda a subexpressão para 
    let num;
    let cont=0;
    for (let no of pilha_de_subexpressoes){
        console.log("Nó da pilha de subexpressões "+ no.value); 
    }
    for( let no of pilha_de_subexpressoes){
        //04/09/2024 percebi que a letra L não precisa ser trocada somente dentro da função emOrdem, como eu quero imprimir cada subexpressão na mesma linha
        // é bom, já que vou usar o emOrdemnormal, troca o L nessa função, porque que imprime na mesma linha a subexpressão inteira 
        // essa troca está causando bug na conta
        // console.log(emOrdemNormal(no,pilha)); // imprime a subexpressão na mesma linha, horizontalmente
        // console.log(pilha_de_subexpressoes);
        // subexpressao_json.mensagens.push(array_mensagens.shift()); 
        subexpressao_json['mensagens'] = array_mensagens.shift();
        // console.log("Mensagem " + subexpressao_json.mensagens[cont].titulo + '\n' + subexpressao_json.mensagens[cont].descricao);
        expressao_atual = emOrdemNormal(no); // recebe a expressão que será resolvida e é usada na impressão, a cada conta ela vai diminuindo de tamanho até sobrar apenas o resultado final
        console.log("Expressão atual " + expressao_atual);
        expressao_inicial = expressao_atual; // também recebe a expressão porém seu uso é diferente, é usada no replace trocando a subexpressão pelo resultado dela. Ex: ((2+2+4)+(2+2)); subexpressão (2+2+4)= 8 daí, faz o replace de (2+2+4) na expressãom fica (8+(2+2)) 
        // subexpressao_json.passos.subexpressao_atual = expressao_atual;
        subexpressao_json['passos']['subexpressao_atual'] = expressao_atual.replace(/\s/g, '');
        // console.log("Subexpressão que será resolvida " + '(' + expressao_atual + ')');
        num = emOrdem(no); // num é um nó que recebe o resultado de uma subexpressão 
        // console.log(expressao_atual); // imprime o resultado final da expressão
        subexpressao_json.resultado = num.value;
        expressao_inicial = expressao_inicial.replace(/\s/g, ''); // retira todos os espaços em branco da subexpressão
        // console.log("Coloque o valor calculado na expressão");
        expressao = expressao.replace("("+expressao_inicial+")", expressao_atual.trim()); // troca a subexpressão pelo resultado dela
        retorno_da_requisicao.push({...subexpressao_json}); // empilha o dicionário com todas as informações da etapa atual 
        subexpressao_json.expressao = expressao;
        subexpressao_json.mensagens = {}; // array com a explicação de cada subexpressão entre parênteses
        subexpressao_json.passos = {}; // objeto com a subexpressão atual
        subexpressao_json.passos.subexpressao_atual = '';
        subexpressao_json.passos.resolucao = []; 
        // console.log(expressao);
        // console.log(pilha_de_subexpressoes);
        // pilha.push(emOrdem(no,pilha)); // imprime a subexpressão e calcula seu valor
        pilha_de_nos.push(num);
        for (let no of pilha_de_nos){
            console.log("Atual " + no.value);
        }
        // console.log(pilha);
        // 20/05/2024 nesse trecho, uma subexpressão é calculada, a impressão dessa subexpressão é apagada e seu resultado é colocado no lugar
        // uma coisa importante a ser verificada é sem não tem algum caso de erro, por exemplo, um número que tá impresso
        // no lugar errado
        // expressao = elimina_elemento(pilha_de_nos[pilha_de_nos.length-1].value.toString(), expressao); // retira a subexpressão que foi calculada
        // e coloca no seu lugar o resultado da subexpressão
        // console.log("Imprime a nova expressão " + expressao); 
        cont++;
    }
    console.log("resultado final",pilha_de_nos[0].value);
    console.log(retorno_da_requisicao);
    for (let etapa of retorno_da_requisicao){
        console.log("Expressão  " + etapa.expressao);
        console.log("Mensagens " + etapa.mensagens);
        console.log("Subexpressão atual " + etapa.passos.subexpressao_atual);
        for(let res of etapa.passos.resolucao){
            console.log(res);
        }
        console.log("Resultado final " + etapa.resultado);
    }    
    // console.log(pilha_de_subexpressoes);
    pilha_de_subexpressoes = []; // reinicializa 
    pilha_de_nos = []; // reinicializa
    ocorrencia =0;
    follow = 0;
    // 28/11/2024
    // na linha abaixo, é adicionado no início, como primeiro elemento do array retorna_da_requisicao, a variável tipoOrd que é um json com a chave 'tipo_de_ordem' com o valor 'Normal'
    // que indica que a expressão não contém erros, que foi resolvida e agora está pronta para ser retornada
    // um detalhe é que tentei adicionar tipoOrd com o comando push, quando o array retorna_da_requisicao não tinha nenhum elemento, porém isso não funcionou e não entendi o motivo
    // por isso usei o unshift aqui no final, quando todos os elementos do retorna_da_requisicao já foram adicionados
    retorno_da_requisicao.unshift({...tipoOrd}); // o motivo de eu adicionar o json tipo_de_ordem tanto no retorna_da_requisicao quanto no json de erro que tá lá no try, é para que exista um elemento em comum
    // para quando esse elemento chegar no front, ter uma chave em comum que acessando ela, saberemos se o json que chegou no front é de erro ou é uma de uma expressão sem erros e resolvida
    // exemplo: suponha que novos_dados é variável do front que recebe o retorna da requisição do back end
    // if (novos_dados[0][tipo_de_ordem] == 'Normal') else if (novos_dados[0]['tipo_de_ordem'] == 'Anormal') simplesmente esse if me faria saber qual é o tipo de req recebida   
    // detalhe o primeiro elemento do array novos_dado, será sempre o json tipo de ordem logo por isso foi escrito novos_dados[0]
    // fim 28/11/2024
    // console.log("Retorna da requisição " + retorno_da_requisicao ); 
    return JSON.stringify(retorno_da_requisicao);
}

function elimina_elemento(numero,expressao){ // essa função retira a subexpressão que acabou de ser calculada 
    // e coloca no seu lugar o resultado
    // ex: (1+(2+3)) A primeira expressão que foi calculada é o (2+3) o resultado é 5 daí, 5 substitui (2+3), a nova expressão é (1+5)
    let pilha = expressão_entre_parenteses(expressao);
    ini = pilha[0];
    fim = pilha[1];
    //console.log(expression.slice(0,ini));
    //console.log(expression.slice(ini,fim-1));
    let nova_expressão = expressao.slice(0,ini) + numero + expressao.slice(fim+1);  
    //let elimina = (elemento) => elemento >= ini && elemento <= fim;
    //expression = expression.filter(elemento => elimina(elemento))
    // console.log("Nova expressão " + nova_expressão)
    return nova_expressão;
}

function expressão_entre_parenteses(expressao){ // pega os índices da subexpressão que acabou de ser calculada
    let ini=0, fim=0;
    for(let i=0; i < expressao.length; i++){
        if (expressao[i] == '(' ){
            ini = i;
        }else if (')' == expressao[i]){
            fim = i;
            break;
        }
    }
    let array = [];
    array.push(ini);
    array.push(fim);
    return array; // retornei os valores como objetos
}

var final_stack = [];
var num1 = 0; 
var num2 = 0;
var result =0;


// 19/03/2024 -- Provar que o algoritmo que resolve as expressões pelas subárvores funciona para qualquer expressão
// -- Criar uma impressão que seja legível para os usuários 
//   for( let no of pilha_de_subexpressoes){
//       console.log(no);
//   }
// module.exports = {analyzeExpression}; // colocar a função callback dentro dos colchetes até agora é a forma que funciona para exportar a função  