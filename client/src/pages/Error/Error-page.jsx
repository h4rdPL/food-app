import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const ErrorWrapper = styled.div``;
export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <ErrorWrapper>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </ErrorWrapper>
  );
};
