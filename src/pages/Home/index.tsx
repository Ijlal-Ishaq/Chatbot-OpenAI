import { FC, useState } from "react";
import * as SC from "./styledComponents";
import axios from "axios";

const Index: FC = () => {
  const [query, setQuery] = useState<string>("");
  const [explanation, setExplanation] = useState<string>("");

  const handleQuery = async () => {
    setExplanation("Loading...");
    await axios
      .post("http://localhost:5000/", { query })
      .then((res) => {
        setExplanation(res.data);
      })
      .catch((e) => {
        setExplanation(e?.message);
      });
  };

  return (
    <SC.Container>
      <SC.Heading>Ask Business</SC.Heading>
      <SC.TextArea
        placeholder="Ask me anything business."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SC.Button onClick={handleQuery}>Ask</SC.Button>
      <SC.Text>{explanation}</SC.Text>
    </SC.Container>
  );
};

export default Index;
