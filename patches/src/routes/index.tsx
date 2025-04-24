import { Link } from "wouter";
import Counter from "../components/Counter";
import { useState, useEffect } from "react";

async function helloServer() {
  "use server";

  return "Hello from the server!";
}

export default function Index() {
  const [serverMessage, setServerMessage] = useState(
    "Loading server message..."
  );

  useEffect(() => {
    async function fetchServerMessage() {
      try {
        const message = await helloServer();
        console.log(message);
        setServerMessage(message as string);
      } catch (error) {
        console.error("Error calling server function:", error);
        setServerMessage("Error loading server message");
      }
    }

    fetchServerMessage();
  }, []);

  return (
    <div>
      <h1>Index</h1>
      <Counter />
      <p>
        <Link to="/about">About page</Link>
      </p>

      <div className="server-function demo">
        <h2>Server Function Result</h2>
        <p>{serverMessage}</p>
      </div>
    </div>
  );
}
