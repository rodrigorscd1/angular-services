import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getClientes(){
    return [
      {id:1, nome:"Rodrigo", idade:44},
      {id:2, nome:"Fabiana", idade:45},
      {id:3, nome:"Pedro Henrique", idade:17},
      {id:4, nome:"Maria Eduarda", idade:13}    
    ]
  }

  verifica(){
    console.log("Service Injetado")
  }
}
