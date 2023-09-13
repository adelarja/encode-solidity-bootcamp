import { useState } from "react";
import { Button, Input, Typography } from "@mui/joy";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { NFT_CONTRACT_ADDRESS } from "../constants";
import contract from "../../app/NFT.json";

type Result = {
  hash: string;
};
function Result(result: Result) {
  const { data, isError, isLoading } = useWaitForTransaction({
    hash: result.hash as `0x${string}`
  });
  console.log(data);
  if (isLoading) return <div>Processing…</div>;
  if (isError) return <div>Transaction error</div>;
  return <a style={{textDecoration:"underline",fontSize:"36px",fontWeight:"Bold",color:"darkcyan"}} href="https://testnets.opensea.io/collection/bear-and-bull-bootcamp/activity">See you new nft at opensea!</a>;
}
export function SafeMint() {
  const { address } = useAccount();
  const { config } = usePrepareContractWrite({
    address: NFT_CONTRACT_ADDRESS as `0x${string}`,
    abi: contract.abi,
    functionName: "safeMint",
    args: [address],
    onSuccess(data) {
      console.log("Success", data);
    },
  });
  const { data, isLoading, write } = useContractWrite(config);

  return (
    <div>
      <Button
        variant="solid"
        disabled={isLoading}
        onClick={() => {
          write?.();
        }}
      >
        Mint NFT
      </Button>
      <div>
      {data && <Result hash={data.hash} />}
      </div>
    </div>
  );
}
