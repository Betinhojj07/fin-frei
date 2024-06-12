import prompt from "prompt-sync"
let ler = prompt()


export function mensagem(msg){
    console.log(msg)
    return mensagem
}


export function continuar(cont){
    
    for(let i =0 ; cont!=4;i++){
        console.log(`
        1-mostrar saldo
        2-depositar
        3-sacar
        4-sair`)
        cont = Number(ler())
    }
   
}
let cont = 0