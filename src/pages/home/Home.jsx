import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <div className="home-hero">
        <img
          src="https://images.pexels.com/photos/1554615/pexels-photo-1554615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="home-hero-img"
          alt="hero-img"
        ></img>
        <div className="home-hero-quote">
          <h1> Feel Sustainable Peace</h1>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="home-featured">
        <h2>Featured Colections</h2>
        <img
          src="https://leapcraft.dk/uploads/leapcraftproductfamilyx1.png"
          className="home-product-img"
          alt="product-img"
        ></img>
      </div>
    </div>
  );
}

export default Home;
