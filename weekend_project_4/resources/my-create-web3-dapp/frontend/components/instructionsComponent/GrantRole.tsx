import { useState } from "react";
import { getRequestOptions } from ".";
import { Button, Input, Typography } from "@mui/joy";
import { EventChange } from "./typeEvents";

export function GrantRole() {
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
          placeholder="Grant role to this address:"
        />
        <Button
          variant="solid"
          disabled={isLoading}
          onClick={() => {
            setLoading(true);
            fetch(
              "http://localhost:3001/grant-role",
              getRequestOptions(address)
            )
              .then((res) => res.json())
              .then((data) => {
                setData(data);
                setLoading(false);
              });
          }}
        >
          {isLoading ? "Requesting tokens from API..." : "Grant Role"}
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
