import "./App.css";

/**
 * Components
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine,
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
// RestaurantList is JSON Data for displaying cards

import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
