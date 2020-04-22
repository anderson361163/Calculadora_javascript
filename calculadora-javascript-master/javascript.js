 //Depois temos que converter isso em uma lista para que n numeros possam ser inseridos
        
        //OPERADORES DA CALCULADORA
        const soma = '+'; 
        const sub = '-';
        const multiplicacao = '*';
        const divisao = '/';
        const decimal = '.';
        const igualdade = '=';
        var valida_decimal = false;
        
        //VARIAVEIS QUE BLOQUEIAM OU NÃO AS OPERAÇÕES
        var opeSoma = false;
        var opeSub = false;
        var opeDivisao = false;

        //VALORES A SEREM CALCULADOS
        var primeiroValor = 0;
        var segundoValor = 0;
        var resultadofinal = 0;

        //AUXILIARES
        var tm_nortm = 0;
        var tamanho_menos1 = 0;

        //IDENTIFICAÇÃO DE OPERAÇÃO
        var exeOpen = ''

    //
    //    
    //FUNÇÕES
    //
    //

    //FUNÇÃO RESPONSAVEL POR RETIRAR O PONTO QUE VEM ANTES DO ELEMENTO CASO NÃO ACHE O NÚMERO DEPOIS DO PONTO
    // 7.+ VIRA 7+
    function retiraponto(texto, tamanho_menos1, tamanho_normal, decimal){
        console.log('============ESTOU DENTRO DA FUNÇÃO CAPTURA retiraponto================')
        console.log('Que valor é esse? (estou dentro da função retira ponto) ' + texto.substr(tamanho_menos1,tamanho_normal))
        console.log('Sou um valor válido para passar para passar pela condição? ' + (texto.substr(tamanho_menos1,tamanho_normal) == decimal))
        //VERIFICA SE O ULTIMO VALOR É UM PONTO
        if(texto.substr(tamanho_menos1,tamanho_normal) == decimal){

            //PEGA TODOS OS NÚMEROS MENOS O .
            var casasDecimais = texto.substr(0,tamanho_menos1)
            
            console.log('Casas decimais' + casasDecimais)
            console.log('Valor de "texto" ' + texto)
            console.log('Substring ' + texto.substr(0,tamanho_menos1))

            //CONCACTENA OS NÚMEROS MAIS O SIMBOLO DESEJADO
            elemento = casasDecimais.concat(numero)

            console.log('CasasDecimais: ' + casasDecimais)
            document.getElementById('resultado').value = elemento

            //TORNA
            valida_decimal = false;
            
        }
        console.log('==================FIM FUNÇÃO CAPTURA retiraponto======================\n')
    }

    function capturaValor1(texto){
        console.log('===============ESTOU DENTRO DA FUNÇÃO CAPTURA VALOR1=================')
        var primeirodigito = ''
        primeirodigito = texto;
        console.log('Qual o primeiro digito em string: ' + primeirodigito)
        primeiroValor = parseFloat(primeirodigito)
        console.log('O valor do primeiro valor dessa equação: ' +  primeiroValor)
        console.log('=====================FIM FUNÇÃO CAPTURA VALOR1=======================\n')
    }

    function capturaValor2(numero){
        console.log('===============ESTOU DENTRO DA FUNÇÃO capturaValor2=================')
        var segundodigito = ''

        var tamanho = numero.length

        console.log('Que operador é esse: ' + exeOpen)

        segundoValor = numero
        console.log('Qual o primeiro digito em string: ' + numero)


        //segundoValor = parseFloat(segundoValor)
        console.log('=====================FIM FUNÇÃO CAPTURA capturaValor2=======================\n')
    }

    function resultadoIgualdade(exeOpen, primeiroValor, segundoValor){
        console.log('===============ESTOU DENTRO DA FUNÇÃO RESULTADOIGUALDADE=================')

        if(exeOpen == soma){
            resultadofinal = primeiroValor + segundoValor
        }else if(exeOpen == sub){
            resultadofinal = primeiroValor - segundoValor
        }else if(exeOpen == multiplicacao){
            resultadofinal = primeiroValor * segundoValor
        }else if((segundoValor == 0) && (exeOpen == divisao)){
            console.log('Usuário burro')
        }else if((segundoValor > 0) && (exeOpen == divisao)){
            resultadofinal = primeiroValor / segundoValor
        }else{
            console.log('foi para o else')
        }
        
        document.getElementById('resultado').value = resultadofinal

        console.log('================FIM DENTRO DA FUNÇÃO RESULTADOIGUALDADE==================')
    }

    function capturaOperador(elemento,tamanho_menos1,tamanho_normal){
        console.log('===============ESTOU DENTRO DA FUNÇÃO CAPTURA CAPTURAOPERADOR=================')

        var operador = ''

        var normal = 0;
        var menos1 = 0;

        normal = elemento.length
        menos1 = normal - 1

        operador = elemento.substr(menos1,normal)
        console.log('Quem é o elemento: ' + elemento)
        console.log('O valor do operador dentro da função captura operador é: ' + operador)

        if(operador == soma){
            exeOpen = '+'
        }else if(operador == sub){
            exeOpen = '-'
        }else if(operador == multiplicacao){
            exeOpen = '*'
        }else if(operador == divisao){
            exeOpen = '/'
        }

        console.log('O valor do operador é: ' + exeOpen)

        console.log('=====================FIM FUNÇÃO CAPTURA CAPTURAOPERADOR=======================\n')
    }



    //
    //
    //CÓDIGO PRINCIPAL
    //
    //
    
    function PegarEMostrar(num){
      
      var tm_normal = 0;
      var tm_normal_1 = 0;

      var elemento = '';

      numero = num.textContent;

      var texto = document.getElementById('resultado').value

        //CASO COMECE COM DECIMAL
        if(numero == decimal){
            console.log('=====================SOU UM DECIMAL=======================\n')
           // var texto = document.getElementById('resultado').value

            var tamanho_normal = 0;
            var tamanho_menos1 = 0;

            tamanho_normal = texto.length
            tamanho_menos1 = tamanho_normal - 1

            console.log(texto.substr(tamanho_menos1,tamanho_normal))
            console.log('O que devo ser: ' + (texto.substr(tamanho_menos1,tamanho_normal) != soma))
            
            //SE O PRIMEIRO OPERADOR NÃO FOR UM SIMBOLO ELE AUTORIZA
            if((texto.substr(tamanho_menos1,tamanho_normal) != soma) &&
              (texto.substr(tamanho_menos1,tamanho_normal) != sub) &&
              (texto.substr(tamanho_menos1,tamanho_normal) != multiplicacao) &&
              (texto.substr(tamanho_menos1,tamanho_normal) != divisao) &&
              (texto.substr(tamanho_menos1,tamanho_normal) != decimal) &&
              (texto != '')           
            ){
                
                //SENDO O PRIMEIRO PONTO DO NÚMERO DECIMAL ele INSERE O PONTO
                //SENÃO NÃO FAZ NADA
                if(valida_decimal == false){
                    console.log('Sou um decimal');
                    elemento = texto.concat(numero);
                    
                    console.log(elemento);
                    document.getElementById('resultado').value = elemento;
                    valida_decimal = true;
                }

            //SE O PRIMEIRO BOTÃO FOR UM OPERADOR ELE É TORNADO VAZIO
            }else{
              //var o = document.getElementById('resultado').value
                var vazio = ''
                elemento = texto.concat(vazio)
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

               // var o = document.getElementById('resultado').value

                tamanho_normal = texto.length
                tamanho_menos1 = tamanho_normal - 1

                console.log('=======================OPERADOR========================\n')  
                //QUANDO FOR UM OPERADOR SEM VAZIOS A ESQUERDA ELE EXECUTA ISSO
                if(texto != ''){
                    
                    

                    console.log('SOU UM OPERADOR')
                    console.log('Qual valor já temos: ' + elemento)
                    console.log('Qual o valor de Entrada: ' + texto)
                    

                    if((opeSoma == false) ||
                       (opeSub == false)  ||
                       (opeDivisao == false)){

                    console.log('Número das operacoes o que eu sou: ' + numero)

                    elemento = texto.concat(numero)
                    
                    console.log('Elemento das operacoes o que eu sou: ' + elemento)

                    document.getElementById('resultado').value = elemento

                    //SE O ULTIMO OPERADOR DO NÚMERO FOR UM PONTO ELE RETIRA
                    // O PONTO E COLOCA O SIMBOLO CASO CONTRÁRIO VIDA QUE SEGUE
                    retiraponto(texto,tamanho_menos1, tamanho_normal, decimal)

                    //CAPTURA O PRIMEIRO NÚMERO E ARMAZENA DENTRO DE PRIMEIROVALOR1
                    capturaValor1(texto)
                    
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
                console.log('=======================OPERADOR========================\n')


        }else if((numero == igualdade)){

            console.log('=====================SOU IGUALDADE=======================\n')
            console.log('Sou sinal de igualdade')
            capturaValor2(texto)
            resultadoIgualdade()
            console.log('=====================IGUALDADE===========================\n')

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
