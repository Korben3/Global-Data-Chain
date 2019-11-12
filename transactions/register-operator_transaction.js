const { BaseTransaction, TransactionError, utils } = require("@liskhq/lisk-transactions");

class RegisterOperatorTransaction extends BaseTransaction {
  static get TYPE() {
    return 101;
  }

  static get FEE() {
    return utils.convertLSKToBeddows("100");
  }

  async prepare(store) {
    await super.prepare(store);
  }

  validateAsset() {
    const errors = [];

    // get the operator object and validate each property
    let { operator } = this.asset;

    if (!operator.name || typeof operator.name !== "string" || operator.name.length > 64) {
      errors.push(new TransactionError("Operator name missing or invalid."));
    }

    if (!operator.location || typeof operator.location !== "string" || operator.location.length > 22) {
      errors.push(new TransactionError("Operator location missing or invalid."));
    }

    if (Object.keys(this.asset).length > 1) {
      errors.push(new TransactionError(this.id, "Only one operator object allowed."));
    }

    if (Object.keys(operator).length > 3) {
      errors.push(new TransactionError(this.id, "Operator object contains incorrect properties."));
    }

    return errors;
  }

  applyAsset(store) {
    const sender = store.account.get(this.senderId);

    let { operator } = this.asset;
    sender.asset.operator = operator;
    store.account.set(sender.address, sender);

    return [];
  }

  undoAsset(store) {
    return [];
  }
}
module.exports = RegisterOperatorTransaction;
