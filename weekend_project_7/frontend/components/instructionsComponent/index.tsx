import { useEffect, useState } from "react";
import styles from "./instructionsComponent.module.css";
import { useAccount, useNetwork } from "wagmi";
import { AspectRatio, Card, Divider, Skeleton } from "@mui/joy";
import ChainName from "./chainName";
import { SafeMint } from "./SafeMint";
import { GetNftUri } from "./GetNftUri";

export default function InstructionsComponent() {
  return (
    <div className={styles.container}>
      <header className={styles.header_container}>
        <div className={styles.header}>
          <h1>Bull and Bear NFT</h1>
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
        <h3>Bull and Bear is a dynamic nft that change the image if ETH price is up or down</h3>
        {chain && <ChainName name={chain.name} />}
        <Divider orientation="horizontal" />
        <SafeMint/>
        <Divider orientation="horizontal" />
        <GetNftUri/>
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