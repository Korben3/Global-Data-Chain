# Global Data Chain 

### Prerequisites

First install the dependencies as detailed in the [Lisk SDK documentation](https://lisk.io/documentation/lisk-sdk/setup).

- Node.js
- PostgreSQL
- Python
- pm2 (recommended)

### Installation

```
git clone https://github.com/Korben3/Global-Data-Chain
cd server
npm install
```

### Run

Run the node and view logs: `node index.js | npx bunyan -o short`

Run the node as a background service:

Register name `pm2 start --name gdc index.js`

After changing parts of the code you need to stop and restart the node:

```
pm2 stop gdc
pm2 start gdc
```

### Tools

The tools directory contains example script to easily make a transaction.

You can connect with the chain using Lisk hub by adding the node: http://45.32.152.68:4000

Use `ugly lawsuit scissors image draft equal fever general chase clown crunch pizza` to transfer 100 GDC tokens to your account in order to register as another operator.
