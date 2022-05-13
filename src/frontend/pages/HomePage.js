import { Container } from "@mui/material";
import { perfume1 } from "../assets/assets";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />

      <div>
        <img src={perfume1} width="100%" height="auto" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
