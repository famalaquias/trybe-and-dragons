# :dragon: Trybers and Dragons :dragon:

## :page_with_curl: Sobre

O projeto consiste em uma aplicação Express usando Middlewares, onde construiremos uma aplicação de cadastro de talkers (palestrantes) usando uma API de um CRUD  (Create, Read, Update e Delete) e alguns endpoints para ler e escrever em um arquivo utilizando o módulo fs.

## :man_technologist: Habilidades Desenvolvidas

* Desenvolver uma API de um CRUD (Create/Criar, Read/Ler, Update/Atualizar e Delete/Deletar)
* Desenvolver endpoints que irão ler e escrever em um arquivo utilizando o módulo fs
* Criar uma aplicação Express.js
* Usar o Node.js
* Criar Middlewares

## :hammer_and_wrench: Ferramentas Utilizadas

* Node.js
* Express
* Fs Modules
* Body Parser
* Crypto

## ⚠️ Instruções para a Execução do Projeto

1. Clone o repositório do projeto em sua máquina: git@github.com:famalaquias/talker-manager.git

2. Rodar a aplicação no Docker ou Localmente 

<details>
  <summary markdown="span"><strong> :whale: Docker</strong></summary><br />

  É necessário ter a ferramenta Docker instalada.
  
  *<i> Rode o serviço node com o comando:</i> <b> docker-compose up -d </b>
  
  Esse serviço irá inicializar um container chamado talker_manager.
  A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.
  
  *<i> Use o comando:</i> <b> docker exec -it talker_manager bash </b>
  
  Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
  
  *<i> Instale as dependências, caso existam, com o comando:</i> <b> npm install </b>
    
<br />
</details>

<details>
  <summary markdown="span"><strong> :computer: Localmente</strong></summary><br />
  
  É necessário ter a ferramente Node, obrigatoriamente, instaladoa em seu computador (espera-se que a versão utilizada seja a 16).
 
  *<i> Instale as dependências, caso existam, com o comando:</i> <b> npm install </b>
    
<br />
</details>
