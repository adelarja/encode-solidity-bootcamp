import { useState } from "react";
import { getRequestOptions } from ".";
import { Button, Input, Typography } from "@mui/joy";
import { EventChange } from "./typeEvents";
import { backendBaseUrl } from "@/app/constants";
import { useContractRead, useContractWrite, usePrepareContractWrite } from "wagmi";
import { parseEther } from "viem";
import { NFT_CONTRACT_ADDRESS } from "../constants";

export function SafeMint() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);
  const [addressToMint, setAddressToMint] = useState("");

  const {config} = usePrepareContractWrite({
    address: NFT_CONTRACT_ADDRESS as `0x${string}`,
    abi: [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          }
        ],
        "name": "safeMint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
    ],
    functionName: 'safeMint',
    args: [addressToMint],
    value: parseEther('0')
  });
  const {write} = useContractWrite(config);

  if (!data)
    return (
      <div>
        <Input
          sx={{ my: 1 }}
          color="primary"
          size="md"
          variant="outlined"
          value={addressToMint}
          onChange={(e: EventChange) => {
            return setAddressToMint(e.target.value);
          }}
          placeholder="Mint nft to this address:"
        />
        <Button
          variant="solid"
          disabled={isLoading}
          onClick={() => {
            write?.();
          }}
        >
          {isLoading ? "Requesting tokens from API..." : "Safe Mint"}
        </Button>
      </div>
    );

  return (
    <div>
      <Typography level="h4" textAlign={"center"}>
        Role granted: {data.success ? "Worked" : "Failed"}
      </Typography>
      <Typography level="h4" textAlign={"center"}>
        Transaction Hash: {data.txHash}
      </Typography>
    </div>
  );
}
