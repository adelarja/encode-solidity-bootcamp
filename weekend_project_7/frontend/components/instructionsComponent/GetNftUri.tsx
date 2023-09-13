import { useEffect, useState } from "react";
import { Button, Input, Typography } from "@mui/joy";
import { backendBaseUrl } from "@/app/constants";
import { useContractRead, useContractWrite, usePrepareContractWrite } from "wagmi";
import { parseEther } from "viem";
import { NFT_CONTRACT_ADDRESS } from "../constants";
import { useFetch } from "./useFetch";
import contract from "../../app/NFT.json";

function getNftUri(tokenId: bigint): string {
  const { data, isError, isLoading } = useContractRead({
    address: NFT_CONTRACT_ADDRESS as `0x${string}`,
    abi: contract.abi,
    functionName: "tokenURI",
    args: [tokenId],
  });

  const tokenUri = data;

  return String(tokenUri) ;
}

type MetadataType = {
  url:string
}

interface Post {
  name: string
  description: string
  image: string
}

function Metadata(props:MetadataType){
  const { data, error } = useFetch<Post>(props.url.replace("ipfs://","https://azure-meaningful-aphid-741.mypinata.cloud/ipfs/"));
  console.log(data);
  if (error) return <p>There is an error.</p>
  if (!data) return <p>Loading...</p>
  return (
    <div>
      <h1>{data.name}</h1>
      <img id="nft_image" src={data.image} alt={data.name} />
      <h3>{data.description}</h3>
    </div>
  )
}

export function GetNftUri() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);
  const [tokenId, setTokenId] = useState(0);
  const [tokenURI, setTokenURI] = useState("");
  let tokenUri = getNftUri(BigInt(tokenId));

  if (!data)
    return (
      <div>
        <Input
          sx={{ my: 1 }}
          type="number"
          color="primary"
          size="md"
          variant="outlined"
          value={tokenId}
          onChange={(e) => {
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
          {tokenURI && <Metadata url={tokenURI} />}
        </div>
      </div>
    );
}
