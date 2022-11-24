import styled from "styled-components";

const StyledHome = styled.div`
  background-image: url(assets/home-background.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Home = () => {
  return <StyledHome>Home</StyledHome>;
};

export default Home;
