import { styled } from "@mui/material/styles";

export const Container = styled("div")({
  width: 500,
  margin: "100px auto",
  padding: 30,
  backgroundColor: "black",
  borderRadius: 5,
});

export const Heading = styled("h2")({
  color: "white",
  marginBottom: 20,
});

export const TextArea = styled("textarea")({
  fontSize: 15,
  width: "100%",
  resize: "vertical",
  minHeight: 100,
  outline: "none",
  padding: 7,
  marginBottom: 10,
  borderRadius: 5,
});

export const Button = styled("button")({
  fontSize: 15,
  fontWeight: "bold",
  width: "100%",
  backgroundColor: "white",
  color: "black",
  cursor: "pointer",
  padding: 13,
  marginBottom: 20,
  border: "none",
  borderRadius: 5,
});

export const Text = styled("p")({
  fontSize: 15,
  width: "100%",
});
