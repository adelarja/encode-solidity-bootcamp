### Smart contract creation

We created the smart contract in the Sepolia network. We used the same contract that we found in the lesson4 code reference.

### First smart contract

This is the deployment transaction: https://sepolia.etherscan.io/tx/0x49ea56967b2767221900a0f220afbbd297fe4915d774a8eae262af2679da65e7

This is the smart contract address: https://sepolia.etherscan.io/address/0xaba0c9f9119a84504985a889ebf2b82e8fc59264

### Set text transaction

This transaction changed the text by first time: https://sepolia.etherscan.io/tx/0xa3d3392228d1a0c3dba8a04b57b85e1c5a8d6541c94719128240650976b61635

Here is the state change: https://sepolia.etherscan.io/tx/0xa3d3392228d1a0c3dba8a04b57b85e1c5a8d6541c94719128240650976b61635#statechange

The text was changed from `Hello World!` to `New Text`

### First owner change

Here, the `Transfer Ownership` function was called. The owner changed from `0x6b3f6b12441def58465ceaae6fe529dfd990d19c` to `0x583d98c6fa793b9eff80674f9dca1bbc7cc6f9f2`.

### Rejected transaction

After the owner change, the previous owner tried to transfer the ownership again. It resulted in a rejected transaction, since the contract owner was not the one who called the smart contract.

https://sepolia.etherscan.io/tx/0x78a85e62c3272bafa1adba859543ca41cf45111228bad7f2628aae1b7804fcd2

### More text changes

The owner at that moment, performed another text change: https://sepolia.etherscan.io/tx/0x5d9b3a463bac72d63d292ed17549f5eb5236a7c17598a40ef9effd26dcf81747

The text was changed from `New text!` to `awesome text with new owner6`

### Contract got lost

The owner transfered the ownership to an address that was not controlled by any of the group members.

https://sepolia.etherscan.io/tx/0xa3f07c66166764c3b1de2a56c69d669512de0569e01d386b1ceb0b30cac7f046

### New smart contract deployment
#### Set new text
https://sepolia.etherscan.io/tx/0x8da45f2a667980602f754df2f14effbd81ff679c50e0a88eb9d54473db1df784
#### Transferred Ownership of the contract 
https://sepolia.etherscan.io/tx/0x77071ed6a2a6a1d2a04652160c3b6456859331248713228d9ef90c0085723e63





