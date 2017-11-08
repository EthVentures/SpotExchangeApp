# The Spot Exchange Mobile Application
Welcome to the [Spot Exchange](https://thespot.exchange), a submission to the [Unchain the Frame](https://unchaintheframe.com) Hackathon. Our product ecosystem consists of four main applications linked below:


* Hyperledger based Marketplace [(repo)](https://github.com/EthVentures/SpotExchangeLedger) [(api explorer)](https://api.thespot.exchange:3000/explorer/)
* Mobile Front End [(repo)](https://github.com/EthVentures/SpotExchangeApp) [(demo)](https://thespot.exchange)
* IBM Watson based Price Suggestions [(repo)](https://github.com/EthVentures/SpotExchangeML)
* Identity Management for On Chain Identities [(repo)](https://github.com/EthVentures/HyperledgerIdentityManagement)

The core components of The Spot Exchange have been fully dockerized. Using customizable docker-compose configurations, the application configuration can be modified to allow for a complete distributed and decentralized network. This flexibility is critical for Phase III of UnchainTheFrame competition where the ledger will be opened up to interested third parties who could use and contribute verifiable parking utilization data. These third parties may include, but are not limited to municipalities, researchers, and smart city projects.   

The front end is built with Ionic 2, which utilizes Cordova along with Angular 2, Typescript, and HTML 5. These tools give the ability to design a fully cross-platform application with the option of deploying to native platforms.

For more details about the Phase II submission, [click here](https://goo.gl/n84gDD). Scroll Down for [Screenshots](https://imgur.com/a/ZYANA)


## Prerequisites
* Docker Compose

## Configuration

Rename default.env to .env and edit where necessary.
```bash
mv default.env .env
```

## Launching Application Locally

To launch in foreground:
```bash
ionic serve
```

To launch in background:
```bash
nohup ionic serve --no-interactive --nobrowser  > ionic.log &
```

Optional, run SSL Proxy
```bash
pm2 start ssl-proxy.js
```

## Launching Application With Docker

To launch using docker:
```bash
docker-compose build && docker-compose up
```
## Screenshots
### Home Page
![SpotExchange](https://i.imgur.com/DZ9AY2Y.png)
### After Login
![SpotExchange](https://i.imgur.com/6qjJ3lv.png)
### Menu
![SpotExchange](https://i.imgur.com/RDcbdl9.png)

## Attribution
For sample data, we have preloaded our applicatino with real parking data from the [Parkwhiz API](www.parkwhiz.com/developers/), with their prior permission.

## Team

[![EthVentures](https://github.com/EthVentures/CryptoTracker/raw/master/resources/img/ethventures-logo.png)](https://ethventures.io)
