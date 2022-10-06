import Featured from "../../components/featured/Featured";
// import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";

import Header from "../../components/header/Header";

import Navbar from "../../components/navbar/Navbar";
// import Navbar from 'react-bootstrap/Navbar';

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
       
        {/* <PropertyList/> */}
       
        {/* <FeaturedProperties/> */}
        {/* <MailList/> */}
        {/* <Footer/> */}
      </div>
    </div>
  );
};

export default Home;