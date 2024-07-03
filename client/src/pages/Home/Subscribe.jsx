import "./home.css";

const Subscribe = () => {
  return (
    <div className="subscribeSect">
      <h2>Subscribe to our news letter</h2>
      <div className="input_email">
        <input type="email" name="email" id="email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
