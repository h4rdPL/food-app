import styled from "styled-components";
import notFound from "assets/images/404.svg";
const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
`;
const Image = styled.img`
  width: 100%;
  max-height: 500px;
`;

export const NotFound = () => {
  return (
    <NotFoundWrapper>
      <Image src={notFound} />
    </NotFoundWrapper>
  );
};
