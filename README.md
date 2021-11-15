# Medspot Agendamento

### Projeto para agendamento e visualização de consulta

---

## Visão Geral

##### Este projeto foi realizado utilizando HTML, CSS, React.js e o Tailwind.

---

## **Sumário**

- [Pré Requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Utilização](#utilização)
- [Sobre o autor](#sobre-o-autor)

---

## **Pré requisitos**

Para utilizar este projeto basta clonar o projeto em seu computador, utilizando o seguinte comando: 

##### `git clone git@github.com:CaioMorato/desafio-medspot.git`

Após isso basta seguir os passos de Instalação abaixo.



Ou se quiser utilizá-lo em um site externo sem baixar nada basta acessar:

https://desafio-medspot.vercel.app/


---

## **Instalação**

Para começar a utilizar esse projeto basta instalar as dependências utilizando o seguinte comando:

##### `npm install`

Após instalar as dependências, basta iniciar a aplicação em seu navegador, digitando no terminal:

##### `npm start`

---

## **Utilização**

### A utilização se dá de forma simples através de 2 componentes, um formulário de cadastro e um outro componente.

- ### Marcar Consulta

  No primeiro componente é possível simular a marcação de uma consulta. O sistema pede apenas 2 dados: o nome do paciente e um seletor de horários que vai de 30 em 30 minutos das 9:00 até 18:00. 

  Caso seja marcado um horário, esse horário ficará bloqueado para utilização, sendo necessário o cancelamento da consulta para que se libere o horário novamente.

  

- ### **Visualizar Consultas**

  No segundo componente é possível ver as consultas já agendadas, ele mostrará o nome do paciente, o horário em que foi marcado a consulta e uma informação dinâmica, dependendo da diferença do horário atual com a consulta, podendo ser caso a consulta já tenha sido ou se ainda será e quanto tempo falta.

  Caso a consulta esteja dentro do período de 2 horas, o card também ficará alaranjado, senão, sua cor normal é branca

---

## **Sobre o autor**

Olá! Que bom que chegou até aqui!

Eu me chamo Caio, e sou estudante de desenvolvimento Web. Comecei meus estudos no ano de 2021, e estou me apaixonando cada dia que passa, através dos estudos, por educação e tecnologia. Esse projeto e esse README foram desenvolvidos como um desafio técnico. Eu empenhei muito carinho na construção de cada linha.

Você pode olhar mais projetos que já fiz [aqui](https://github.com/CaioMorato)

Ou se conectar comigo no [linkedin!](https://www.linkedin.com/in/morato-dev/)
