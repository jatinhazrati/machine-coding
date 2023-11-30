import StarRating from "./components/StarRating.jsx";

function App() {
  return (
    <div className="app">
      <StarRating maximumStars={10} filledStars={2} />
      <StarRating maximumStars={5} filledStars={0} />
    </div>
  );
}

export default App;
