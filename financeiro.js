import prompt from "prompt-sync"
let ler = prompt()
import { continuar } from "./menu.js";


let cont = 0
// let a = continuar(cont)

export function depositar(deposito){
    deposito = 0
    for(let i = 0; cont==3;i++){
        console.log("quanto deseja depositar")
        deposito+=deposito
        cont = Number(ler())
    }
}