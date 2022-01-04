import { style } from "@vanilla-extract/css";

export const pageContainer = style({
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const buttonStyle = style({
  padding: "20px 28px",
  background: "blue",
  outline: "none",
  border: "none",
  borderRadius: "4px",
  color: "white",
  fontSize: "24px",
  letterSpacing: "0.1rem",
});
