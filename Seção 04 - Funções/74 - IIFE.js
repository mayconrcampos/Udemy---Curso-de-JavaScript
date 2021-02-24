/**
 * IIFE - Imediately Invoked Function Expression
 */


  // Funções IIFE - Auto invocável e anônima.
  (function(nome, sobrenome){
      function criaNome(){
          return `${nome} ${sobrenome}!`
      }

      function falaOla(){
          console.log(`Olár ${criaNome()}`)
      }

      falaOla()
      
  })("Maycon", "Campos")


// Função normal
  function oi(){
      console.log("Olár! Função normal")
  }

  oi()

