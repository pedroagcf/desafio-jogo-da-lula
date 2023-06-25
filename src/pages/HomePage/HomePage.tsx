import { Container, Row } from "./HomePage.style";
import Logo from "../../assets/Logo.svg";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <img src={Logo} alt="squid game" />
      <Row>
        <Button title="Iniciar" onClick={() => navigate("/match")} />
      </Row>
    </Container>
  );
};

export default HomePage;
