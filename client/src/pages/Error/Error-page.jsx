import { NotFound } from "pages/404/404";
import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const ErrorWrapper = styled.div``;
export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <ErrorWrapper>
      <NotFound />
    </ErrorWrapper>
  );
};
