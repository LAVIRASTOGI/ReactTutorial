function PropDrillExample() {
  const user = "Lavi"; // Data that needs to be passed to Child
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <h1>Hello, {user}!</h1>;
}

export default PropDrillExample;
