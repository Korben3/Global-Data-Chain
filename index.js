const { Application, genesisBlockDevnet, configDevnet } = require("lisk-sdk");
const { RegisterOperatorTransaction, SendDataTransaction } = require("./transactions");

configDevnet.app.label = "Global_Data_Chain";
configDevnet.components.storage.password = "password";
configDevnet.modules.http_api.access.public = true;

const app = new Application(genesisBlockDevnet, configDevnet);

app.registerTransaction(RegisterOperatorTransaction);
app.registerTransaction(SendDataTransaction);

app
  .run()
  .then(() => app.logger.info("App started..."))
  .catch(error => {
    console.error("Faced error in application", error);
    process.exit(1);
  });
