const { SendDataTransaction } = require("../transactions");
const transactions = require("@liskhq/lisk-transactions");
const { EPOCH_TIME } = require("@liskhq/lisk-constants");
const { APIClient } = require("@liskhq/lisk-api-client");

// config
const client = new APIClient(["http://45.32.152.68:4000"]); // SDK test server 2
const passphrase = "twice enrich bread citizen broccoli inject wink roast surge fuel loyal kangaroo"; // Ken

const getTimestamp = () => {
  const millisSinceEpoc = Date.now() - Date.parse(EPOCH_TIME);
  const inSeconds = (millisSinceEpoc / 1000).toFixed(0);
  return parseInt(inSeconds);
};
const noiseDbMin = 42;
const noiseDbMax = 60;
let noise = (Math.random() * (noiseDbMax - noiseDbMin) + noiseDbMin).toFixed(2);

const tx = new SendDataTransaction({
  asset: {
    dataType: "noise",
    dataValue: noise
  },
  amount: 0,
  fee: 0,
  recipientId: "123L",
  timestamp: getTimestamp()
});

tx.sign(passphrase);

client.transactions
  .broadcast(tx.toJSON())
  .then(res => {
    console.log(res.data.message);
  })
  .catch(res => {
    console.log(`\nTransaction failed: ${res}`);
  });
