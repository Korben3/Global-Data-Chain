const { SendDataTransaction } = require("../transactions");
const transactions = require("@liskhq/lisk-transactions");
const { EPOCH_TIME } = require("@liskhq/lisk-constants");

const getTimestamp = () => {
  const millisSinceEpoc = Date.now() - Date.parse(EPOCH_TIME);
  const inSeconds = (millisSinceEpoc / 1000).toFixed(0);
  return parseInt(inSeconds);
};

const tx = new SendDataTransaction({
  asset: {
    dataType: "noise",
    dataValue: "4.50"
  },
  amount: 0,
  fee: 0,
  recipientId: "123L",
  timestamp: getTimestamp()
});

tx.sign("sunny correct permit bracket rhythm garlic select economy piano magic laptop enforce");

console.log(tx.stringify());
process.exit(1);
