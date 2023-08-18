import { useEffect, useState } from "react";
import styles from "./instructionsComponent.module.css";
import { useAccount, useBalance, useContractRead, useNetwork, useSignMessage } from "wagmi";

export default function InstructionsComponent() {
  return (
    <div className={styles.container}>
      <header className={styles.header_container}>
        <div className={styles.header}>
          <h1>My App</h1>
        </div>
      </header>
      <p className={styles.get_started}>
        <PageBody></PageBody>
      </p>
    </div>
  );
}

function PageBody() {
  return (
    <div>
      <WalletInfo></WalletInfo>
    </div>
  );
}

function WalletInfo() {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { chain } = useNetwork();
  if (address)
    return (
      <div>
        <p>Your account address is {address}</p>
        <p>Connected to the network {chain?.name}</p>
        <RequestTokensToBeMinted address={address}></RequestTokensToBeMinted>
        <GrantRole></GrantRole>
        <MintTokenToAddress></MintTokenToAddress>
        <DelegateVotes></DelegateVotes>
        <InputList></InputList>
        <VoteProposal></VoteProposal>
      </div>
    );
  if (isConnecting)
    return (
      <div>
        <p>Loading...</p>
      </div>
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

function WalletAction() {
  const [signatureMessage, setSignatureMessage] = useState("");

  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage();
  return (
    <div>
      <form>
        <label>
          Enter the message to be signed:
          <input
            type="text"
            value={signatureMessage}
            onChange={(e) => setSignatureMessage(e.target.value)}
          />
        </label>
      </form>
      <button
        disabled={isLoading}
        onClick={() =>
          signMessage({
            message: signatureMessage,
          })
        }
      >
        Sign message
      </button>
      {isSuccess && <div>Signature: {data}</div>}
      {isError && <div>Error signing message</div>}
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
    fetch("http://localhost:3001/get-address")
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

function RequestTokensToBeMinted(params: {address: `0x${string}`}) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);

  if (isLoading) return <p>Requesting tokens from API...</p>;
  const requestOptions = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({address: params.address})

  };
  if (!data)
  return (
    <button
      disabled={isLoading}
      onClick={() => {
        setLoading(true);
        fetch("http://localhost:3001/mint-tokens", requestOptions)
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            setLoading(false);
            });
      }}
    >
      Request mint tokens
    </button>
    );

  return (
    <div>
      <p>Mint success: {data.success ? "Worked" : "Failed"}</p>
      <p>Transaction Hash: {data.txHash}</p>
    </div>
  );

}

function getRequestOptinons(address: string) {
  return {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({address: address})
  };
}

function GrantRole() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);
  const [address, setAddress] = useState("");

  if (isLoading) return <p>Requesting tokens from API...</p>;
  if (!data)
  return (
    <div>
      <form>
        <label>
          Grant role to this address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
      </form>
      <button
        disabled={isLoading}
        onClick={() => {
          setLoading(true);
          fetch("http://localhost:3001/grant-role", getRequestOptinons(address))
            .then((res) => res.json())
            .then((data) => {
              setData(data);
              setLoading(false);
             });
        }}
      >
        Grant Role
      </button>
    </div>
    );

  return (
    <div>
      <p>Role granted: {data.success ? "Worked" : "Failed"}</p>
      <p>Transaction Hash: {data.txHash}</p>
    </div>
  );
}

function MintTokenToAddress() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);
  const [address, setAddress] = useState("");

  if (isLoading) return <p>Requesting tokens from API...</p>;
  if (!data)
  return (
    <div>
      <form>
        <label>
          Mint tokens to this address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
      </form>
      <button
        disabled={isLoading}
        onClick={() => {
          setLoading(true);
          fetch("http://localhost:3001/mint-tokens", getRequestOptinons(address))
            .then((res) => res.json())
            .then((data) => {
              setData(data);
              setLoading(false);
             });
        }}
      >
        Mint to address
      </button>
    </div>
    );

  return (
    <div>
      <p>Tokens minted: {data.success ? "Worked" : "Failed"}</p>
      <p>Transaction Hash: {data.txHash}</p>
    </div>
  );
}

function DelegateVotes() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);
  const [address, setAddress] = useState("");

  if (isLoading) return <p>Requesting tokens from API...</p>;
  if (!data)
  return (
    <div>
      <form>
        <label>
          Delegate Votes to this address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
      </form>
      <button
        disabled={isLoading}
        onClick={() => {
          setLoading(true);
          fetch("http://localhost:3001/delegate", getRequestOptinons(address))
            .then((res) => res.json())
            .then((data) => {
              setData(data);
              setLoading(false);
             });
        }}
      >
        Delegate
      </button>
    </div>
    );

  return (
    <div>
      <p>Votes delegated: {data.success ? "Worked" : "Failed"}</p>
      <p>Transaction Hash: {data.txHash}</p>
    </div>
  );
}

function getRequestOptinonsTokenizedBallot(address: string, inputs: any) {
  const proposals = [...inputs].map((x) => x.value);
  return {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      address: address,
      proposals: proposals.slice(0, -1)
    })
  };
}

function InputList() {
  const [inputs, setInputs] = useState([{ value: '' }]);
  const [data, setData] = useState<any>(null);
  const [address, setAddress] = useState("");

  function handleInputChange(index: number, value: string) {
    const newInputs = [...inputs];
    newInputs[index].value = value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, { value: '' }]);
  };

  const handleRemoveInput = (index: number) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  if(!data)
  return (
    <div>
       <form>
        <label>
          Token Contract Address for Ballot
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
      </form>
      {inputs.map((input, index) => (
        <div key={index}>
          <input
            type="text"
            value={input.value}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
          <button onClick={() => handleRemoveInput(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddInput}>Add Input</button>
      <button onClick={
        () => {
          fetch("http://localhost:3001/deploy-tokenized-ballot", getRequestOptinonsTokenizedBallot(address, inputs))
            .then((res) => res.json())
            .then((data) => {
              setData(data);
             });
        }
        }>Deploy contract</button>
    </div>
  );

  return (
    <div>
      <p>Tokenized Ballot Deployed: {data.success ? "Worked" : "Failed"}</p>
      <p>Contract address: {data.address}</p>
    </div>
  );
};

function getRequestOptionsVote(contractAddress: string, proposalNumber: number, amountOfVotes: number) {
  return {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      ballotAddress: contractAddress,
      proposalNumber: proposalNumber,
      amountOfVotes: amountOfVotes
    })
  }; 
}


function VoteProposal() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [amounOfVotes, setAmounOfVotes] = useState("");
  const [proposal, setProposal] = useState("");

  if (isLoading) return <p>Requesting tokens from API...</p>;
  if (!data)
  return (
    <div>
      <form>
        <label>
          Ballot Contract address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
      </form>
      <form>
        <label>
          Proposal Number:
          <input
            type="text"
            value={proposal}
            onChange={(e) => setProposal(e.target.value)}
          />
        </label>
      </form>
      <form>
        <label>
          Amount of votes:
          <input
            type="text"
            value={amounOfVotes}
            onChange={(e) => setAmounOfVotes(e.target.value)}
          />
        </label>
      </form>
      <button
        disabled={isLoading}
        onClick={() => {
          setLoading(true);
          fetch("http://localhost:3001/vote-proposal", getRequestOptionsVote(address, parseInt(proposal), parseInt(amounOfVotes)))
            .then((res) => res.json())
            .then((data) => {
              setData(data);
              setLoading(false);
             });
        }}
      >
        Vote
      </button>
    </div>
    );

  return (
    <div>
      <p>Voted: {data.success ? "Worked" : "Failed"}</p>
      <p>Transaction Hash: {data.txHash}</p>
    </div>
  );
}