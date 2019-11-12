# Global Data Chain

Global Data Chain is a decentralized Sidechain PoC build with the [Lisk SDK](http://lisk.io). It can be used for storing various scientific measurements worldwide. For example:

- Global temperatures
- Radioactivity
- Rainfall
- Noise
- Traffic

These measurements are collected by trusted operators worldwide. With this wide range of collected data it is possible to gain insight in past conditions, analyse and predict future conditions and even see if there are any correlations between the different data stored on GDC.

### Docs and Demo

For a live demo: [globaldatachain.korben3.com](http://globaldatachain.korben3.com)

For the public API: http://45.32.152.68:4000

Example calls:

- [Latest 10 transaction](http://45.32.152.68:4000/api/transactions?sort=timestamp%3Adesc&limit=10)
- [Latest 10 registered operators](http://45.32.152.68:4000/api/transactions?sort=timestamp%3Adesc&limit=10&type=101)
- [Account info](http://45.32.152.68:4000/api/accounts?address=5320901975065898377L)

For client documentation: [Client - Readme](https://github.com/Korben3/Global-Data-Chain/blob/master/client/README.md)

For Server documentation: [Server - Readme](https://github.com/Korben3/Global-Data-Chain/blob/master/server/README.md)

You can find helpfull tools and examples to make transactions in the [server/tools](https://github.com/Korben3/Global-Data-Chain/tree/master/server/tools) directory.

### Custom transactions

There are currently 2 custom transactions implemented:

**Type 101 register as operator 100 GDC**
```
Operator object:
 name: string (64 char)
 location: string (22 char - Decimal degrees notation)
```
For the locations use [Google maps](http://maps.google.com) Decimal degrees notation, example: `64.750913, -18.696712`

**Type 104 send data	0 GDC**
```
dataType: string (20 char)
dataValue: string (10 char)
```
1. checks if sender is an operator
2. increases the `totalDataTransactions` counter stored in the senders account


### Todo

A partial todo list:

- Fix timestamp
- Update linechart on click on map marker
- Make mobile friendly
- Create a client to communicate with sensors/ hardware
- Add 102 Vote for operator transaction
- Add 103 Unvote operator transaction
- Implement Proof of Trusted Operators (POTO) system
- ..


