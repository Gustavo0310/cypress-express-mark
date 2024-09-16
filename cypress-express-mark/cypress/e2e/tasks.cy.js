/// <reference types="cypress" />

describe('Tarefas', ()=>{

    it('Deve cadastrar uma nova tarefa', ()=>{
        cy.visit('http://localhost:3000/')

        /// AULA 12: APRENDENDO COMO MANIPULAR "INPUT" DO TIPO "TEXT"
        cy.get('input[placeholder="Add a new Task"]') 
            .type('Ler um livro de node.js')

            cy.contains('button', "Create").click()
    })
})