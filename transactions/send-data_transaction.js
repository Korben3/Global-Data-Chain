const { BigNum } = require("lisk-sdk");
const { BaseTransaction, TransactionError } = require("@liskhq/lisk-transactions");

class SendDataTransaction extends BaseTransaction {
  static get TYPE() {
    return 104;
  }

  async prepare(store) {
    await super.prepare(store);
  }

  validateAsset() {
    const errors = [];

    if (!this.asset.dataType || typeof this.asset.dataType !== "string" || this.asset.dataType.length > 20) {
      errors.push(new TransactionError("DataType missing or invalid."));
    }

    if (!this.asset.dataValue || typeof this.asset.dataValue !== "string" || this.asset.dataValue.length > 10) {
      errors.push(new TransactionError("DataValue missing or invalid."));
    }

    if (Object.keys(this.asset).length > 2) {
      errors.push(new TransactionError("Only a dataType and dataValue asset allowed."));
    }

    return errors;
  }

  applyAsset(store) {
    const errors = [];
    const sender = store.account.get(this.senderId);

    // check if sender is registered as an operator
    if (!sender.asset.operator) {
      errors.push(new TransactionError("Sender is not registered as an operator."));
    } else {
      sender.asset.operator.totalDataTransactions =
        sender.asset.operator.totalDataTransactions === undefined ? 1 : ++sender.asset.operator.totalDataTransactions;

      store.account.set(sender.address, sender);
    }
    return errors;
  }

  undoAsset() {
    const errors = [];

    return errors;
  }
}

module.exports = SendDataTransaction;
