import GamePanel from "components/GamePanel/GamePanel";
import { Content } from "./GamePage.style";
import Logo from "../../assets/Logo.svg";

const GamePage = () => {
  return (
    <Content>
      <img src={Logo} alt="squid game" />
      <GamePanel />
    </Content>
  );
};

export default GamePage;
