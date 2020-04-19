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

    function retiraponto(elemento, tamanho_menos1, tamanho_normal, decimal){
        if(elemento.substr(tamanho_menos1,tamanho_normal) == decimal){

            //PEGA TODOS OS NÚMEROS MENOS O .
            var casasDecimais = o.substr(0,tamanho_menos1)
            
            //CONCACTENA OS NÚMEROS MAIS O SIMBOLO DESEJADO
            elemento = casasDecimais.concat(numero)
            document.getElementById('resultado').value = elemento



            //CONVERTE TODA A STRING EM NÚMERO FLOAT NO PRIMEIRO VALOR A SER CALCULADO
            primeiroValor = parseInt(casasDecimais)
            console.log('(transformador) O valor do primeiro valor dessa equação: ' + primeiroValor)

            //TORNA
            valida_decimal = false;
        }
    }

    
//    function Conctenacao(o,elemento){

      
//   }

    function PegarEMostrar(num){
      
      var elemento = '';
//    var operador1 = '';
//    var digito1 = 0;
      
      numero = num.textContent;

        //CASO COMECE COM DECIMAL
        if(numero == decimal){
                  
            var o = document.getElementById('resultado').value

            var tamanho_normal = 0;
            var tamanho_menos1 = 0;
            var tamanho

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
                    digito1 = o;
            
                    console.log('Qual o primeiro digito: ' + digito1)
            
                    elemento = o.concat(numero)
                    
                    retiraponto(elemento,tamanho_menos1, tamanho_normal)
                    
                    document.getElementById('resultado').value = elemento
            
               //     Conctenacao(o,elemento)

                    //SE O ULTIMO OPERADOR DO NÚMERO FOR UM PONTO ELE RETIRA
                    // O PONTO E COLOCA O SIMBOLO CASO CONTRÁRIO VIDA QUE SEGUE
                    
                    
                    primeiroValor = parseFloat(elemento)
                    console.log('O valor do primeiro valor dessa equação: ' +  primeiroValor)

                    valida_decimal = false;

                }else{
                    document.getElementById('resultado').value = ''
                }


        }else if((numero == igualdade)){
        
            console.log('Sou sinal de igualdade')
        
        
        //SE FOR UM NÚMERO ELE INICIA COM A PRIMEIRA VARIAVEL VAZIA
        //
        }else{
            
            var segundoNumero = '';

            console.log('Sou um numero')

            segundoNumero = document.getElementById('resultado').value
            elemento = segundoNumero.concat(numero);
            console.log('Qual o valor do número ' + elemento)
            document.getElementById('resultado').value = elemento

        }

      
    }
