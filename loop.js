//bitcoin----------------------------------------------

const priceBTC = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin');

$("#loop__body--track").append($(`<div class="criptos"><b>BTC:</b><span id="btc">$USD</span></div>`));

let bitcoin = document.getElementById("btc");

priceBTC.onmessage = function (msg) {
    console.log(msg.data)
    const preciosCripto = JSON.parse(msg.data);
    bitcoin.innerHTML = `<span id="btc">$${preciosCripto.bitcoin}USD</span>`;
}

//ethereum ----------------------------------------------

const priceETH = new WebSocket('wss://ws.coincap.io/prices?assets=ethereum');

$("#loop__body--track").append($(`<div class="criptos"><b>ETH:</b><span id="eth">$USD</span></div>`));

let ethereum = document.getElementById("eth");

priceETH.onmessage = function (msg2) {
    console.log(msg2.data)
    const preciosCriptos = JSON.parse(msg2.data);
    ethereum.innerHTML = `<span id="eth">$${preciosCriptos.ethereum}USD</span>`;
}

//binance coin ----------------------------------------------

const priceBNB = new WebSocket('wss://ws.coincap.io/prices?assets=binance-coin');

$("#loop__body--track").append($(`<div class="criptos"><b>BNB:</b><span id="bnb">$USD</span></div>`));

let binanceCoin = document.getElementById("bnb");

priceBNB.onmessage = function (msg3) {
    console.log(msg3.data)
    const preciosCriptos = JSON.parse(msg3.data);
    
    binanceCoin.innerHTML = `<span id="bnb">$${preciosCriptos["binance-coin"]}USD</span>`;
}

//solana ----------------------------------------------

const priceSOL = new WebSocket('wss://ws.coincap.io/prices?assets=solana');

$("#loop__body--track").append($(`<div class="criptos"><b>SOL:</b><span id="sol">$USD</span></div>`));

let solana = document.getElementById("sol");

priceSOL.onmessage = function (msg4) {
    console.log(msg4.data)
    const preciosCriptos = JSON.parse(msg4.data);
    solana.innerHTML = `<span id="sol">$${preciosCriptos.solana}USD</span>`;
}

//cardano ----------------------------------------------

const priceADA = new WebSocket('wss://ws.coincap.io/prices?assets=cardano');

$("#loop__body--track").append($(`<div class="criptos"><b>ADA:</b><span id="ada">$USD</span></div>`));

let cardano = document.getElementById("ada");

priceADA.onmessage = function (msg5) {
    console.log(msg5.data)
    const preciosCriptos = JSON.parse(msg5.data);
    cardano.innerHTML = `<span id="ada">$${preciosCriptos.cardano}USD</span>`;
}

//XRP ----------------------------------------------

const priceXRP = new WebSocket('wss://ws.coincap.io/prices?assets=xrp');

$("#loop__body--track").append($(`<div class="criptos"><b>XRP:</b><span id="xrp">$USD</span></div>`));

let ripple = document.getElementById("xrp");

priceXRP.onmessage = function (msg6) {
    console.log(msg6.data)
    const preciosCriptos = JSON.parse(msg6.data);
    ripple.innerHTML = `<span id="xrp">$${preciosCriptos.xrp}USD</span>`;
}

//avalanche ----------------------------------------

const priceAVAX = new WebSocket('wss://ws.coincap.io/prices?assets=avalanche');

$("#loop__body--track").append($(`<div class="criptos"><b>AVAX:</b><span id="avax">$USD</span></div>`));

let avalanche = document.getElementById("avax");

priceAVAX.onmessage = function (msg7) {
    console.log(msg7.data)
    const preciosCriptos = JSON.parse(msg7.data);
    avalanche.innerHTML = `<span id="avax">$${preciosCriptos.avalanche}USD</span>`;
}

//terra ------------------------------

const priceLUNA = new WebSocket('wss://ws.coincap.io/prices?assets=terra-luna');

$("#loop__body--track").append($(`<div class="criptos"><b>LUNA:</b><span id="luna">$USD</span></div>`));

let TERRA = document.getElementById("luna");

priceLUNA.onmessage = function (msg8) {
    console.log(msg8.data)
    const preciosCriptos = JSON.parse(msg8.data);
    TERRA.innerHTML = `<span id="luna">$${preciosCriptos["terra-luna"]}USD</span>`;
}

//dogecoin ----------------------------------------------

const priceDOGE = new WebSocket('wss://ws.coincap.io/prices?assets=dogecoin');

$("#loop__body--track").append($(`<div class="criptos"><b>DOGE:</b><span id="doge">$USD</span></div>`));

let DOGE = document.getElementById("doge");

priceDOGE.onmessage = function (msg9) {
    console.log(msg9.data)
    const preciosCriptos = JSON.parse(msg9.data);
    DOGE.innerHTML = `<span id="doge">$${preciosCriptos.dogecoin}USD</span>`;
}




















//dogecoin ----------------------------------------------

const priceDOGE2 = new WebSocket('wss://ws.coincap.io/prices?assets=dogecoin');

$("#loop__body--track").prepend($(`<div class="criptos"><b>DOGE:</b><span id="doge">$USD</span></div>`));

let DOGE2 = document.getElementById("doge");

priceDOGE2.onmessage = function (msg9) {
    console.log(msg9.data)
    const preciosCriptos = JSON.parse(msg9.data);
    DOGE2.innerHTML = `<span id="doge">$${preciosCriptos.dogecoin}USD</span>`;
}

//terra ------------------------------

const priceLUNA2 = new WebSocket('wss://ws.coincap.io/prices?assets=terra-luna');

$("#loop__body--track").prepend($(`<div class="criptos"><b>LUNA:</b><span id="luna">$USD</span></div>`));

let TERRA2 = document.getElementById("luna");

priceLUNA2.onmessage = function (msg8) {
    console.log(msg8.data)
    const preciosCriptos = JSON.parse(msg8.data);
    TERRA2.innerHTML = `<span id="luna">$${preciosCriptos["terra-luna"]}USD</span>`;
}

//avalanche ----------------------------------------

const priceAVAX2 = new WebSocket('wss://ws.coincap.io/prices?assets=avalanche');

$("#loop__body--track").prepend($(`<div class="criptos"><b>AVAX:</b><span id="avax">$USD</span></div>`));

let avalanche2 = document.getElementById("avax");

priceAVAX2.onmessage = function (msg7) {
    console.log(msg7.data)
    const preciosCriptos = JSON.parse(msg7.data);
    avalanche2.innerHTML = `<span id="avax">$${preciosCriptos.avalanche}USD</span>`;
}

//XRP ----------------------------------------------

const priceXRP2 = new WebSocket('wss://ws.coincap.io/prices?assets=xrp');

$("#loop__body--track").prepend($(`<div class="criptos"><b>XRP:</b><span id="xrp">$USD</span></div>`));

let ripple2 = document.getElementById("xrp");

priceXRP2.onmessage = function (msg6) {
    console.log(msg6.data)
    const preciosCriptos = JSON.parse(msg6.data);
    ripple2.innerHTML = `<span id="xrp">$${preciosCriptos.xrp}USD</span>`;
}

//cardano ----------------------------------------------

const priceADA2 = new WebSocket('wss://ws.coincap.io/prices?assets=cardano');

$("#loop__body--track").prepend($(`<div class="criptos"><b>ADA:</b><span id="ada">$USD</span></div>`));

let cardano2 = document.getElementById("ada");

priceADA2.onmessage = function (msg5) {
    console.log(msg5.data)
    const preciosCriptos = JSON.parse(msg5.data);
    cardano2.innerHTML = `<span id="ada">$${preciosCriptos.cardano}USD</span>`;
}

//solana ----------------------------------------------

const priceSOL2 = new WebSocket('wss://ws.coincap.io/prices?assets=solana');

$("#loop__body--track").prepend($(`<div class="criptos"><b>SOL:</b><span id="sol">$USD</span></div>`));

let solana2 = document.getElementById("sol");

priceSOL2.onmessage = function (msg4) {
    console.log(msg4.data)
    const preciosCriptos = JSON.parse(msg4.data);
    solana2.innerHTML = `<span id="sol">$${preciosCriptos.solana}USD</span>`;
}

//binance coin ----------------------------------------------

const priceBNB2 = new WebSocket('wss://ws.coincap.io/prices?assets=binance-coin');

$("#loop__body--track").prepend($(`<div class="criptos"><b>BNB:</b><span id="bnb">$USD</span></div>`));

let binanceCoin2 = document.getElementById("bnb");

priceBNB2.onmessage = function (msg3) {
    console.log(msg3.data)
    const preciosCriptos = JSON.parse(msg3.data);
    
    binanceCoin2.innerHTML = `<span id="bnb">$${preciosCriptos["binance-coin"]}USD</span>`;
}

//ethereum ----------------------------------------------

const priceETH2 = new WebSocket('wss://ws.coincap.io/prices?assets=ethereum');

$("#loop__body--track").prepend($(`<div class="criptos"><b>ETH:</b><span id="eth">$USD</span></div>`));

let ethereum2 = document.getElementById("eth");

priceETH2.onmessage = function (msg2) {
    console.log(msg2.data)
    const preciosCriptos = JSON.parse(msg2.data);
    ethereum2.innerHTML = `<span id="eth">$${preciosCriptos.ethereum}USD</span>`;
}