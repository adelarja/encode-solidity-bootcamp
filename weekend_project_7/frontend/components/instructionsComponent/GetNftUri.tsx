import { useState } from "react";
import { getRequestOptions } from ".";
import { Button, Input, Typography } from "@mui/joy";
import { EventChange } from "./typeEvents";
import { backendBaseUrl } from "@/app/constants";
import { useContractRead, useContractWrite, usePrepareContractWrite } from "wagmi";
import { parseEther } from "viem";
import { NFT_CONTRACT_ADDRESS } from "../constants";

function getNftUri(tokenId: bigint): string {
  const { data, isError, isLoading } = useContractRead({
    address: NFT_CONTRACT_ADDRESS as `0x${string}`,
    abi: [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
    ],
    functionName: "tokenURI",
    args: [tokenId],
  });

  const tokenUri = data;

  return String(tokenUri) ;
}

export function GetNftUri() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);
  const [addressToGrant, setAddressToGrant] = useState("");
  const [tokenId, setTokenId] = useState(0);
  const [tokenURI, setTokenURI] = useState("");

  let tokenUri = getNftUri(BigInt(tokenId));

  if (!data)
    return (
      <div>
        <Input
          sx={{ my: 1 }}
          color="primary"
          size="md"
          variant="outlined"
          value={tokenId}
          onChange={(e: EventChange) => {
            return setTokenId(parseInt(e.target.value));
          }}
          placeholder="Token Id"
        />
        <Button
          variant="solid"
          disabled={isLoading}
          onClick={() => {
            tokenUri = tokenUri !== null ? tokenUri : "";
            setTokenURI(tokenUri);
          }}
        >
          {isLoading ? "Requesting tokens from API..." : "Get Token URI"}
        </Button>
        <div>
          TOKEN URI: {tokenURI} 
        </div>
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
