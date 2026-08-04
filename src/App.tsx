export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Meticulous Test App</h1>
      <p>
        If the recorder is wired up correctly, open DevTools → Console and
        look for "Meticulous recorder initialized".
      </p>
      <button onClick={() => alert("clicked!")}>Click me</button>
    </div>
  );
}
