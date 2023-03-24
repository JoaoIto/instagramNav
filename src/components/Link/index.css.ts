import { style } from "@vanilla-extract/css";

export const linkNo = style({
  textDecoration: "none",
});

export const links = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  minWidth: "90%",
  padding: "20px",
  margin: "25px 10px",
  border: "1px solid #fafafa",
  borderRadius: 10,
  color: "#fff",
  fontFamily: "Inter, sans-serif",
  fontSize: "1.5rem",
});

export const link = style({
  width: '70%'
});