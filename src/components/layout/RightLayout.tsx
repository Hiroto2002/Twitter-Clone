import React from "react";

type Props = {
  children: React.ReactNode;
};
export const RightLayout = (props: Props) => {
  const { children } = props;
  return <div style={styles}>{children}</div>;
};

const styles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  height: "100vh",
  flexDirection: "column",
  width: "30%",
  maxWidth: "30%",
} as const;
