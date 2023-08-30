import { useEffect, useState } from "react";
import styles from "./instructionsComponent.module.css";
import { useAccount, useBalance, useContractRead, useNetwork } from "wagmi";
import { AspectRatio, Card, Divider, Skeleton } from "@mui/joy";
import Address from "./address";
import ChainName from "./chainName";
import { SignMessage } from "./SignMessage";
import { Bet } from "./bet";
import { GetTokens } from "./buyTokens";
import { OpenBets } from "./OpenBets";
import { backendBaseUrl } from "@/app/constants";
import { Approve } from "./approve";
import { CloseLottery } from "./closeLottery";
import { ReturnTokens } from "./returnTokens";

export default function InstructionsComponent() {
  return (
    <div className={styles.container}>
      <header className={styles.header_container}>
        <div className={styles.header}>
          <h1>Voting app</h1>
        </div>
      </header>
      <div className={styles.get_started}>
        <PageBody></PageBody>
      </div>
    </div>
  );
}

function PageBody() {
  return (
    <div suppressHydrationWarning={true}>
      <WalletInfo></WalletInfo>
    </div>
  );
}

function WalletInfo() {
  const { address, isConnecting, isConnected, isDisconnected } = useAccount();
  const { chain } = useNetwork();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, []);
  if (mounted && isConnected)
    return (
      <Card size="md" variant="soft"   sx={{ minWidth: "40em",maxWidth: "40em" }}>
       {address !== undefined && <Address address={address} />}
        {chain && <ChainName name={chain.name} />}
        <Divider orientation="horizontal" />
        <SignMessage />
        <Divider orientation="horizontal" />
        <GetTokens/>
        <Divider orientation="horizontal" />
        <Approve />
        <Divider orientation="horizontal" />
        <Bet/>
        <Divider orientation="horizontal" />
        <OpenBets/>
        <Divider orientation="horizontal" />
        <CloseLottery/>
        <Divider orientation="horizontal" />
        <ReturnTokens/>
      </Card>
    );
  if (mounted && isConnecting)
    return (
      <Card variant="outlined" sx={{ width: 343, display: "flex", gap: 2 }}>
        <AspectRatio ratio="21/9">
          <Skeleton variant="overlay">
            <img
              alt=""
              src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
            />
          </Skeleton>
        </AspectRatio>
      </Card>
    );
  if (isDisconnected)
    return (
      <div>
        <p>Wallet disconnected. Connect wallet to continue</p>
      </div>
    );
  return (
    <div>
      <p>Connect wallet to continue</p>
    </div>
  );
}

function WalletBalance(params: { address: `0x${string}` }) {
  const { data, isError, isLoading } = useBalance({
    address: params.address,
  });

  if (isLoading) return <div>Fetching balance…</div>;
  if (isError) return <div>Error fetching balance</div>;
  return (
    <div>
      Balance: {data?.formatted} {data?.symbol}
    </div>
  );
}

function TokenName() {
  const { data, isError, isLoading } = useContractRead({
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    abi: [
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
          {
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
    functionName: "name",
  });

  const name = typeof data === "string" ? data : 0;

  if (isLoading) return <div>Fetching name…</div>;
  if (isError) return <div>Error fetching name</div>;
  return <div>Token name: {name}</div>;
}

function TokenBalance(params: { address: `0x${string}` }) {
  const { data, isError, isLoading } = useContractRead({
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    abi: [
      {
        constant: true,
        inputs: [
          {
            name: "_owner",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            name: "balance",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
    functionName: "balanceOf",
    args: [params.address],
  });

  const balance = typeof data === "number" ? data : 0;

  if (isLoading) return <div>Fetching balance…</div>;
  if (isError) return <div>Error fetching balance</div>;
  return <div>Balance: {balance}</div>;
}

function RandomWord() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        setData(data.results[0]);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      <h1>
        Name: {data.name.title} {data.name.first} {data.name.last}
      </h1>
      <p>Email: {data.email}</p>
    </div>
  );
}

function TokenAddressFromAPI() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${backendBaseUrl}/token-address`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading token address from API...</p>;
  if (!data) return <p>No answer from API...</p>;

  return (
    <div>
      <p>Token address: {data.address}</p>
    </div>
  );
}

export function getRequestOptions(address: string) {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ address }),
  };
}

export function getRequestOptionsTokenizedBallot(proposals: string[]) {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ proposals }),
  };
}

export function getRequestOptionsVote(
  ballotAddress: string,
  proposalNumber: number,
  amountOfVotes: number
) {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ballotAddress,
      proposalNumber,
      amountOfVotes,
    }),
  };
}


