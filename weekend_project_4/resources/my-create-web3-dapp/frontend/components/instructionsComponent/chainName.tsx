import { Typography } from "@mui/joy";

type Props = {
  name: string;
};
export default function ChainName(props: Props) {
  return (
    <>
      <Typography level="title-sm">
        Connected to the network {props.name}
      </Typography>
    </>
  );
}
