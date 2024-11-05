import React, { CSSProperties } from "react";

type Props = {
  children: React.ReactNode;
};

export const CenterLayout = (props: Props) => {
  const { children } = props;
  return <div style={styles}>{children}</div>;
};

const styles: CSSProperties = {
  display: "flex",
  height: "100vh",
  flexDirection: "column",
  width: "70%",
  maxWidth: "70%",
};
