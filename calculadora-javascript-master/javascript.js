

  var segundoNumero = ''; //Depois temos que converter isso em uma lista para que n numeros possam ser
  //inseridos
  let variavel=[]
        
  //OPERADORES DA CALCULADORA
  const soma = '+'; 
  const sub = '-';
  const multiplicacao = '*';
  const divisao = '/';
  const decimal = '.';
  var valida_decimal = false;

  function PegarEMostrar(num){
    var elemento = ''
    var operador1 = '';
    var digito1 = 0;
      
    numero = num.textContent;

    if(numero == decimal){
                  
      var o = document.getElementById('resultado').value

      var tamanho_normal = 0;
      var tamanho_menos1 = 0;
      var tamanho

      tamanho_normal = o.length
      tamanho_menos1 = tamanho_normal - 1
    }
  console.log(o.substr(tamanho_menos1,tamanho_normal))
  console.log('O que devo ser: ' + (o.substr(tamanho_menos1,tamanho_normal) != soma))

    if((o.substr(tamanho_menos1,tamanho_normal) != soma) &&
      (o.substr(tamanho_menos1,tamanho_normal) != sub) &&
      (o.substr(tamanho_menos1,tamanho_normal) != multiplicacao) &&
      (o.substr(tamanho_menos1,tamanho_normal) != divisao) &&
      (o.substr(tamanho_menos1,tamanho_normal) != decimal) &&
      (o != '')           
      ){
      if(valida_decimal == false)
      {
        console.log('Sou um decimal');
        elemento = o.concat(numero);

        console.log(elemento);
        document.getElementById('resultado').value = elemento;
        valida_decimal = true;
      }
    }
    else{
      var o = document.getElementById('resultado').value
      var vazio = ''
      elemento = o.concat(vazio)
      document.getElementById('resultado').value = elemento
    }

    if((numero == soma) ||
      (numero == sub) ||
      (numero == multiplicacao) ||
      (numero == divisao))
    {
          
      var o = document.getElementById('resultado').value

      if(o != '')
      {
        console.log('Sou um operador')
        console.log('o que tem dentro de var: ' + elemento)
        console.log('eu sou o valor que tem dentro de o: ' + o)
        digito1 = o;

        console.log('Qual o primeiro digito: ' + digito1)

        elemento = o.concat(numero)                        
        document.getElementById('resultado').value = elemento

        valida_decimal = false;

      }
      else{
           document.getElementById('resultado').value = ''
          }


    }
  else{
    console.log('Sou um numero')
    console.log('o que tem dentro de segundoNumero: ' + segundoNumero)
    segundoNumero = document.getElementById('resultado').value
    elemento = segundoNumero.concat(numero);
    console.log('Não sei ' + elemento)
    document.getElementById('resultado').value = elemento
  }}