let a = 5
const b = 8
function somar(a, b){
    return a + b
}
console.log(somar(a, b)) 
//O let é mutavel localmente o que o torna modificavel.
console.log(somar(6, b = 10))
//O const não pode ser mutavel ou seja o valor não pode ser trocado.