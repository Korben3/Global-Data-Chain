const { RegisterOperatorTransaction } = require("../transactions");
const transactions = require("@liskhq/lisk-transactions");
const { EPOCH_TIME } = require("@liskhq/lisk-constants");

const getTimestamp = () => {
  const millisSinceEpoc = Date.now() - Date.parse(EPOCH_TIME);
  const inSeconds = (millisSinceEpoc / 1000).toFixed(0);
  return parseInt(inSeconds);
};

const tx = new RegisterOperatorTransaction({
  asset: {
    operator: {
      name: "HQ",
      location: "52.413457, 13.317531" // use Google maps Decimal degrees notation
    }
  },
  amount: 0,
  fee: `${transactions.utils.convertLSKToBeddows("100")}`,
  recipientId: "123L",
  timestamp: getTimestamp()
});

tx.sign("peasant farm early vehicle bundle air merry elephant opinion volume gown hammer");

console.log(tx.stringify());
process.exit(1);
