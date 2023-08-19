import { useState } from "react";
import { getRequestOptionsVote } from ".";
import { Button, Input, Typography } from "@mui/joy";

export function VoteProposal() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [amounOfVotes, setAmounOfVotes] = useState("");
  const [proposal, setProposal] = useState("");

  if (!data)
    return (
        <div>
        <Input
          sx={{ my: 1 }}
          color="primary"
          size="md"
          variant="outlined"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Ballot Contract address:"
        />
        <Input
          sx={{ my: 1 }}
          color="primary"
          size="md"
          variant="outlined"
          value={proposal}
          onChange={(e) => setProposal(e.target.value)}
          placeholder="Proposal Number:"
        />
        <Input
          sx={{ my: 1 }}
          color="primary"
          size="md"
          variant="outlined"
          value={amounOfVotes}
          onChange={(e) => setAmounOfVotes(e.target.value)}
          placeholder="Amount of votes:"
        />
        <Button
         variant="solid"
          disabled={isLoading}
          onClick={async () => {
            setLoading(true);
            setLoading(false);
            fetch(
              "http://localhost:3001/vote-proposal",
              getRequestOptionsVote(
                address,
                parseInt(proposal),
                parseInt(amounOfVotes)
              )
            )
              .then((res) => res.json())
              .then((data) => {
                setData(data);
                setLoading(false);
              });
          }}
        >
           { isLoading ? 'Requesting tokens from API...' : 'Vote'}
          
        </Button>
      </div>
    );

  return (
    <div>
       <Typography level="h4" textAlign={"center"}>
       Voted: {data.success ? "Worked" : "Failed"}
       </Typography>
       <Typography level="h4" textAlign={"center"}>
       Transaction Hash: {data.txHash}
       </Typography>
    </div>
  );
}
