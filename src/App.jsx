// JSX example - eslint-plugin-css detects style attribute objects

export function App() {
  return (
    <div>
      {/* Valid inline style */}
      <h1 style={{ color: "navy", fontSize: "24px" }}>Hello</h1>

      {/* Style with intentional errors */}
      <p
        style={{
          padding: "10px",
          padding: "20px", // duplicate property
          colour: "red", // unknown property (British spelling)
        }}
      >
        CSS linting demo
      </p>
    </div>
  );
}
