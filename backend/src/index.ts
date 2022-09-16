require('dotenv').config();
import Web3 from 'web3';
const url = process.env.ETHEREUM_WS || 'wss://mainnet.infura.io/ws/v3/b45e47191e764a8b9bdb465f2fe03178'; 
const options = {
  timeout: 30000,
  clientConfig: {
    maxReceivedFrameSize: 100000000,
    maxReceivedMessageSize: 100000000,
  },
  reconnect: {
    auto: true,
    delay: 5000,
    maxAttempts: 15,
    onTimeout: false,
  },
};

const web3 = new Web3(new Web3.providers.WebsocketProvider(url, options));
const subscription = web3.eth.subscribe("pendingTransactions", (err, res) => {
  if (err) console.error(err);
});

const init = () => {
  subscription.on("data", (txHash) => {
    setTimeout(async () => {
      try {
        const tx = await web3.eth.getTransaction(txHash);
        console.log(tx)
      } catch (err) {
        console.error(err);
      }
    });
  });
};

init();