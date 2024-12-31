import React from "react";
import styled from "styled-components";

const ComingSoon = () => {
  return (
    <Wrapper>
      <div className="all">
        <h1>
          <div className="rocket">🚀</div>
          Coming soon...
          <div className="rocket">🚀</div>
        </h1>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  user-select: none;
  h1 {
    display: flex;
    font-weight: 700;
  }
  .rocket {
    transform: rotate(-45deg);
  }
`;

export default ComingSoon;
