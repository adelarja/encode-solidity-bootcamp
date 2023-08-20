import { useState } from "react";
import { getRequestOptionsTokenizedBallot } from ".";
import { Button, ButtonGroup, Input, Typography } from "@mui/joy";
import { EventChange } from "./typeEvents";
import { ENDPOINT } from "@/app/constants";
export function InputList() {
  const [inputs, setInputs] = useState([{ value: "" }]);
  const [data, setData] = useState<any>(null);
  const [address, setAddress] = useState("");

  function handleInputChange(index: number, value: string) {
    const newInputs = [...inputs];
    newInputs[index].value = value;
    setInputs(newInputs);
  }

  const handleAddInput = () => {
    setInputs([...inputs, { value: "" }]);
  };

  const handleRemoveInput = (index: number) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

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
          placeholder="Token Contract Address for Ballot:"
        />
        {inputs.map((input, index) => (
          <div key={index}>
            <Input
              sx={{ my: 1 }}
              color="primary"
              size="md"
              variant="outlined"
              value={input.value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder={`Proposal ${index}`}
              endDecorator={
                <Button onClick={() => handleRemoveInput(index)} color="danger">
                  X
                </Button>
              }
            />
          </div>
        ))}
        <ButtonGroup variant="solid">
          <Button color="success" onClick={handleAddInput}>
            Add Input
          </Button>
          <Button
            color="primary"
            onClick={() => {
              fetch(
                `${ENDPOINT}/deploy-tokenized-ballot`,
                getRequestOptionsTokenizedBallot(address, inputs)
              )
                .then((res) => res.json())
                .then((data) => {
                  setData(data);
                });
            }}
          >
            Deploy contract
          </Button>
        </ButtonGroup>
      </div>
    );

  return (
    <div>
      <Typography level="h4" textAlign={"center"}>
        Tokenized Ballot Deployed: {data.success ? "Worked" : "Failed"}
      </Typography>
      <Typography level="h4" textAlign={"center"}>
        Contract address: {data.address}
      </Typography>
    </div>
  );
}
