# Quick explanation
At the beginning, the vote, delegate and grantRole were implemented to be invoked using the backend.
However, we soon realized that this approach would limit voting to only one private key if the backend was deployed on a server.
To address this issue, we switched to using wagmi to call these functions.
Furthermore, we kept the API endpoints for educational purposes, but they are now protected by Basic Authentication.

We could do the same with tokenized Ballot Deployment function, however, we decided to keep it as it is.

# Demo
Our DApp is deployed here: https://team8-solidity-bootcamp.onrender.com/

Our API is deployed here: https://encode-solidity-bootcamp.onrender.com/

The token is deployed here: https://sepolia.etherscan.io/address/0x8DC05594Eb309909A0f411A05E5ccF8B2A9aa59a

# Deployment
For frontend one needs to set these environment variables:
```
WALLETCONNECT_PROJECT_ID=xxx
BACKEND_BASE_URL=http://localhost:3001
```

For backend one needs to set these environment variables:
```
RPC_ENDPOINT_URL=https://sepolia.gateway.pokt.network/v1/xxx
MNEMONIC=xxx
TOKEN_ADDRESS=0x8DC05594Eb309909A0f411A05E5ccF8B2A9aa59a
BASIC_AUTH_PASSWORD=xxx
```

# Local development
Run the frontend:

```bash
cd frontend
yarn
yarn run dev
```

Run the backend:

```bash
cd backend
yarn
yarn run start:dev
```
