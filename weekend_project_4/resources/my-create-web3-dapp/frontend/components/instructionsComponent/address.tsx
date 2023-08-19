import { Typography } from "@mui/joy";

type Props = {
  address: `0x${string}`;
};
export default function Address(props: Props) {
  return (
    <>
      <Typography level="title-sm">
        Your account address is:&nbsp; 
        {props.address}
      </Typography>
    </>
  );
}
