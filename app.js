import prompt from 'prompt-sync'
let ler = prompt()
import { continuar} from "./menu.js";
import { depositar } from "./financeiro.js";

console.log("digite a opção desejada")
let cont = Number(ler())
let b = continuar(cont)
console.log(b)

console.log("valor do deposito")
let deposito = 0
let dep = depositar(deposito)
dep = Number(ler())
console.log(dep)
