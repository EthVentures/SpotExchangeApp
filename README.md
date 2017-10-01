# SpotExchange Front End App
[The Spot Exchange](https://thespot.exchange), a submission to the "Unchain the Frame" Hackathon Project. Scroll Down for [Screenshots](https://imgur.com/a/ZYANA)


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
