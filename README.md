<h1 align="center">
  <img alt="Ecoleta" title="#delicinha" src="https://github.com/Wills32/Ecoleta/blob/master/ecoleta.png?raw=true" width="250px" />
  <br/>
  <img alt="Ecoleta" title="#delicinha" src="https://github.com/Wills32/Ecoleta/blob/master/logo.png" width="250px" />
</h1>



---
## Ferramentas 🔨

Este Projeto foi feito utilizando as Ferramentas abaixo :

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [API do IBGE para consumo do endereço](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs-estadosGet)
- [Upload de imagens](react-dropzone)
- [Leaflet](https://leafletjs.com/examples/quick-start/)
- [Celebrate](https://github.com/arb/celebrate) 

## Projeto 💻

Projeto desenvlvido durante as <strong> Next Level Week </strong> com o objetivo de criar uma aplicação que facilite a coleta e a reciclagem de recursos que se tornariam lixo.
O <strong>Ecoleta</strong> funciona como um Marketplace , eletem como objetivo facilitar a conexã entre empresas ou entidades de oleta de residuos, seam eles orgânicos ou inorgânicos, à pessoas que desejam fazer o descarte conciente dos residuos .

## Backend ⚙
<h1 align ="center">
  <a href = "https://insomnia.rest/run/?label=Ecoleta&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fraphabarreto%2Fecoleta%2Fmaster%2Fserver%2FEcoleta.json" target = "_blank" ></a>
  <img alt = "Ecoleta Back end" src = "https://github.com/Wills32/Ecoleta/blob/master/backend.png"/>
</h1>

## Frontend 💻
<h1 align="center">
    <img alt="Ecoleta Front-end" src="https://github.com/Wills32/Ecoleta/blob/master/frontend.gif" />
</h1>

## Mobile 📲
<h1 align="center">
    <img alt="Ecoleta Mobile" src="https://github.com/Wills32/Ecoleta/blob/master/mobile.gif" />
</h1>

## Instalação 🛠

```bash
# Clone o repositório
$ git clone https://github.com/Wills32/Ecoleta.git

# Navegue em cada pasta: server / web / mobile e instale as depedências:
$ yarn install

# Navegue até a pasta server e execute os seguintes comandos:
$ yarn knex:migrate
$ yarn knex:seed
$ yarn dev:server

# Depois disso, entre na pasta web e execute o comando:
$ yarn start

# entre na pasta mobile e execunte o comando:
$ expo start

# Observações:
- Você deve mudar a baseURL no arquivo api.ts das pastas web e mobile para o ip da sua máquina
```


