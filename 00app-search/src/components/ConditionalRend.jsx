const Greeting = ({ name  }) => {
  return (
    <div>
      <h2>Greeting</h2>
      <p>Hello, {name ? name : "Guest"}!</p>
    </div>
  );
};

export default Greeting;
