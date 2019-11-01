import * as React from "react";
import styled from "styled-components";

const Cover = styled.div`
  height: 80px;
  background-color: #444444;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Heading = styled.h2`
  color: #c03ed7;
  padding-left: 35px;
  font-size: 40px;
`;

function Header() {
  return (
    <>
      <Cover>
        <Heading>Movie Database</Heading>
      </Cover>
    </>
  );
}
export default Header;
