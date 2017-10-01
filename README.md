# The Spot Exchange Mobile Application
Welcome to the [Spot Exchange](https://thespot.exchange), a submission to the [Unchain the Frame](https://unchaintheframe.com) Hackathon. Our product ecosystem consists of three main applications linked below:


* Hyperledger based Marketplace [(repo)](https://github.com/EthVentures/SpotExchangeLedger) [(api explorer)](https://api.thespot.exchange:3000/explorer/)
* Mobile Front End [(repo)](https://github.com/EthVentures/SpotExchangeApp) [(demo)](https://thespot.exchange)
* IBM Watson based Price Suggestions [(repo)](https://github.com/EthVentures/SpotExchangeML)

Scroll Down for [Screenshots](https://imgur.com/a/ZYANA)


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


## Team

[![EthVentures](https://github.com/EthVentures/CryptoTracker/raw/master/resources/img/ethventures-logo.png)](https://ethventures.io)
