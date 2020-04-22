 //Depois temos que converter isso em uma lista para que n numeros possam ser inseridos
        
        //OPERADORES DA CALCULADORA
        const soma = '+'; 
        const sub = '-';
        const multiplicacao = '*';
        const divisao = '/';
        const decimal = '.';
        const igualdade = '=';
        var valida_decimal = false;
        
        //PARA OS OPERADORES
        var opeSoma = false;
        var opeSub = false;
        var opeDivisao = false;

        //VALORES A SEREM CALCULADOS
        var primeiroValor = 0;
        var segundoValor = 0;
        var valordaConta = 0;

        //AUXILIARES
        var tm_nortm = 0;
        var tamanho_menos1 = 0;
        var digito1 = '';
        var digito2 = '';

        //IDENTIFICAÇÃO DE OPERAÇÃO
        var exeOpen = ''



    //FUNÇÃO RESPONSAVEL POR RETIRAR O PONTO QUE VEM ANTES DO ELEMENTO CASO NÃO ACHE O NÚMERO DEPOIS DO PONTO
    // 7.+ VIRA 7+
    function retiraponto(o, tamanho_menos1, tamanho_normal, decimal){
        console.log('============ESTOU DENTRO DA FUNÇÃO CAPTURA retiraponto================')
        console.log('Que valor é esse? (estou dentro da função retira ponto) ' + o.substr(tamanho_menos1,tamanho_normal))
        console.log('Sou um valor válido para passar para passar pela condição? ' + (o.substr(tamanho_menos1,tamanho_normal) == decimal))
        //VERIFICA SE O ULTIMO VALOR É UM PONTO
        if(o.substr(tamanho_menos1,tamanho_normal) == decimal){

            //PEGA TODOS OS NÚMEROS MENOS O .
            var casasDecimais = o.substr(0,tamanho_menos1)
            
            console.log('Casas decimais' + casasDecimais)
            console.log('Valor de "o" ' + o)
            console.log('Substring ' + o.substr(0,tamanho_menos1))

            //CONCACTENA OS NÚMEROS MAIS O SIMBOLO DESEJADO
            elemento = casasDecimais.concat(numero)

            console.log('CasasDecimais: ' + casasDecimais)
            document.getElementById('resultado').value = elemento

            //TORNA
            valida_decimal = false;
            
        }
        console.log('==================FIM FUNÇÃO CAPTURA retiraponto======================\n')
    }

    function capturaValor1(o){
        console.log('===============ESTOU DENTRO DA FUNÇÃO CAPTURA VALOR1=================')
        var primeirodigito = ''
        primeirodigito = o;
        console.log('Qual o primeiro digito em string: ' + primeirodigito)
        primeiroValor = parseFloat(primeirodigito)
        console.log('O valor do primeiro valor dessa equação: ' +  primeiroValor)
        console.log('=====================FIM FUNÇÃO CAPTURA VALOR1=======================\n')
    }

    function capturaValor2(){
        console.log('===============ESTOU DENTRO DA FUNÇÃO CAPTURA VALOR2=================')
        console.log('Conclui com sucesso')
        console.log('=====================FIM FUNÇÃO CAPTURA VALOR1=======================\n')
    }

    function resultadoIgualdade(){

    }

    function capturaOperador(elemento,tamanho_menos1,tamanho_normal){
        console.log('===============ESTOU DENTRO DA FUNÇÃO CAPTURA CAPTURAOPERADOR=================')

        var operador = ''
        operador = elemento.substr(tamanho_menos1,tamanho_normal)
        console.log('O valor do oeprador dentro da função captura operador é: ' + operador)

        if(operador == soma){
            exeOpen = '+'
        }else if(operador == sub){
            exeOpen = '-'
        }else if(operador == multiplicacao){
            exeOpen = '*'
        }else if(operador == divisao){
            exeOpen = '/'
        }

        console.log('=====================FIM FUNÇÃO CAPTURA CAPTURAOPERADOR=======================\n')
    }


    function PegarEMostrar(num){
      
      var elemento = '';

      numero = num.textContent;


        //CASO COMECE COM DECIMAL
        if(numero == decimal){
            console.log('=====================SOU UM DECIMAL=======================\n')
            var o = document.getElementById('resultado').value

            var tamanho_normal = 0;
            var tamanho_menos1 = 0;

            tamanho_normal = o.length
            tamanho_menos1 = tamanho_normal - 1

            console.log(o.substr(tamanho_menos1,tamanho_normal))
            console.log('O que devo ser: ' + (o.substr(tamanho_menos1,tamanho_normal) != soma))
            
            //SE O PRIMEIRO OPERADOR NÃO FOR UM SIMBOLO ELE AUTORIZA
            if((o.substr(tamanho_menos1,tamanho_normal) != soma) &&
              (o.substr(tamanho_menos1,tamanho_normal) != sub) &&
              (o.substr(tamanho_menos1,tamanho_normal) != multiplicacao) &&
              (o.substr(tamanho_menos1,tamanho_normal) != divisao) &&
              (o.substr(tamanho_menos1,tamanho_normal) != decimal) &&
              (o != '')           
            ){
                //SENDO O PRIMEIRO PONTO DO NÚMERO DECIMAL ele INSERE O PONTO
                //SENÃO NÃO FAZ NADA
                if(valida_decimal == false){
                    console.log('Sou um decimal');
                    elemento = o.concat(numero);
                    
                    console.log(elemento);
                    document.getElementById('resultado').value = elemento;
                    valida_decimal = true;
                }

            //SE O PRIMEIRO BOTÃO FOR UM OPERADOR ELE É TORNADO VAZIO
            }else{
                var o = document.getElementById('resultado').value
                var vazio = ''
                elemento = o.concat(vazio)
                document.getElementById('resultado').value = elemento
            }

        console.log('=======================FIM DECIMAL========================\n')   
        //SE FOR UM OPERADOR (+ - * /)
        }else if((numero == soma) ||
            (numero == sub) ||
            (numero == multiplicacao) ||
            (numero == divisao)){
                

                var tamanho_normal = 0;
                var tamanho_menos1 = 0;

                var o = document.getElementById('resultado').value

                tamanho_normal = o.length
                tamanho_menos1 = tamanho_normal - 1

                
                //QUANDO FOR UM OPERADOR SEM VAZIOS A ESQUERDA ELE EXECUTA ISSO
                if(o != ''){
                           
                    console.log('SOU UM OPERADOR')
                    console.log('Qual valor já temos: ' + elemento)
                    console.log('Qual o valor de Entrada: ' + o)
                    

                    if((opeSoma == false) ||
                       (opeSub == false)  ||
                       (opeDivisao == false)){

                    console.log('Número das operacoes o que eu sou' + numero)

                    elemento = o.concat(numero)
                    
                    console.log('Elemento das operacoes o que eu sou' + elemento)

                    document.getElementById('resultado').value = elemento

                    //SE O ULTIMO OPERADOR DO NÚMERO FOR UM PONTO ELE RETIRA
                    // O PONTO E COLOCA O SIMBOLO CASO CONTRÁRIO VIDA QUE SEGUE
                    retiraponto(o,tamanho_menos1, tamanho_normal, decimal)

                    //CAPTURA O PRIMEIRO NÚMERO E ARMAZENA DENTRO DE PRIMEIROVALOR1
                    capturaValor1(o)
                    
                    //CAPTURA O OPERADOR PARA EXECUTAR A CONTA DEPOIS
                    capturaOperador(elemento,tamanho_menos1,tamanho_normal)

                    valida_decimal = false;
                    
                    //COMO JÁ FOI ESCOLHIDA A OPERAÇÃO ELE NÃO PODE MUDAR OU SUBSTITUI-LA
                    opeSoma = true;
                    opeSub = true;
                    opeDivisao = true;


                    }
                }else{
                    document.getElementById('resultado').value = ''
                }


        }else if((numero == igualdade)){
        
            console.log('Sou sinal de igualdade')
            capturaValor2()
        
        //SE FOR UM NÚMERO ELE INICIA COM A PRIMEIRA VARIAVEL VAZIA
        //
        }else{
            console.log('=====================SOU UM NÚMERO=======================\n')
            var segundoNumero = '';

            console.log('Sou um numero')

            segundoNumero = document.getElementById('resultado').value
            elemento = segundoNumero.concat(numero);
            console.log('Qual o valor do número ' + elemento)
            document.getElementById('resultado').value = elemento
            console.log('=====================FIM UM NÚMERO=======================\n')
        }

      
    }
