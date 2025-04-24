import { Link } from "wouter";
import Counter from "../components/Counter";

export default function Routing() {
  return (
    <div>
      <h1>Index</h1>
      <Counter />
      <p>
        <Link to="/about-routing">About page</Link>
      </p>
    </div>
  );
}
