import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box component={"main"}>
      <Typography>Welcome</Typography>
      <Link href={"/users"} passHref>
        <Button>Go to users</Button>
      </Link>
    </Box>
  );
}
