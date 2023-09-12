The idea of this project is to apply some of the topics that were not used in the other weekend projects. We wanted to integrate IPFS, Oracles, and NFTs.

For that, we created a smart contract that is able to mint NFT tokens. The NFT has metadata to inform whether a token/cryptocurrency has increased or decreased its price. The metadata we have is the IPFS URI.

For example, we can mint one NFT token with ID 0 with this image metadata to inform that the ETH price has increased:

![alt.text](./images/8b179f29-7214-4f24-9d14-22d577c4237e.jpeg)

and this image to inform that the ETH price has decreased:

![alt.text](./images/c1939861-f563-4d1b-8107-38de936524d3.jpeg)

In our case, we used the Tellor oracle to retrieve the ETH price. If the ETH price has increased, we will receive the first image URI (bull), and if the ETH price has decreased, we will receive the second image URI (bear).

With this small project, we were able to enhance our knowledge of topics that interested us.