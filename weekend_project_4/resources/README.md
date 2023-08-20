# Quick explanation

At the beginning, vote, delegate and grantRole were implemented to be invoked using the backend. After that, we realized that in that way, only 1 private key would be able to vote if the backend is deployed in a server. For that, we decided to use wagmi to call the vote/delegate/granRole functions. Furthermore, we kept the API endpoints for educational purposes. We know this is not an expected behaviour, since anyone can call the vote function and, if the backend account has voting power, this will result in non reliable ballot results.

We could do the same with:
* Tokenized Ballot Deployment function

# API deployment

Our API is deployed here: https://encode-solidity-bootcamp.onrender.com/

It is outdated right now (it doesn't have the vote, delegate and getWinningProposal endpoints).

In the directory `frontend/app/constants` you can set `DEV_MODE` to true if you want to use the backend running in the localhost, or to false to use our deployed backend.

# Installation

Run the frontend:

```bash
cd frontend
yarn install
yarn run dev
```

Run the backend:

```bash
cd backend
yarn install
yarn run start:dev
```