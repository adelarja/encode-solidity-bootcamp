import { useState } from "react";
import { getRequestOptions } from ".";
import { Button, Input, Typography } from "@mui/joy";
import { EventChange } from "./typeEvents";

export function DelegateVotes() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);
  const [address, setAddress] = useState("");

  if (!data)
    return (
      <div>
        <Input
          sx={{ my: 1 }}
          color="primary"
          size="md"
          variant="outlined"
          value={address}
          onChange={(e: EventChange) => {
            return setAddress(e.target.value);
          }}
          placeholder="Delegate Votes to this address:"
        />
        <Button
          disabled={isLoading}
          variant="solid"
          onClick={() => {
            setLoading(true);
            fetch("http://localhost:3001/delegate", getRequestOptions(address))
              .then((res) => res.json())
              .then((data) => {
                setData(data);
                setLoading(false);
              });
          }}
        >
          {isLoading ? "Requesting tokens from API..." : "Delegate"}
        </Button>
      </div>
    );

  return (
    <div>
      <Typography level="h4" textAlign={"center"}>
        Votes delegated: {data.success ? "Worked" : "Failed"}
      </Typography>
      <Typography level="h4" textAlign={"center"}>
        Transaction Hash: {data.txHash}
      </Typography>
    </div>
  );
}
