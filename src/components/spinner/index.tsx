"use clinet";

import { ProgressBar } from "react-loader-spinner";

export default function Spinner() {
  return (
    <ProgressBar
      height={"120"}
      width={"120"}
      ariaLabel="Common Loader"
      borderColor="#000"
      barColor="#a0a6ac"
      wrapperStyle={{ display: "block", margin: "0 auto" }}
    />
  );
}
