import React from 'react';
import styled from 'styled-components';

// define body
const body = ({className, children}) => {
  return (
    <div className={className}>
        {children}
    </div>
  );
};

// add styles to body
const Frame = styled(body)`
  display: flex;
  width: 100%;
  padding: 2rem 5rem;
  /* height: 8rem; */
  background-image: url(/frame.svg);
  background-repeat: no-repeat;
  /* background-position: 50% 50%; */
  background-position: center center;
  background-size: contain;
  background-size: cover;
  /* border: 3px solid blue; */

  @media ${(props) => props.theme.breakpoint.xl} {
    font-size: 1.1rem;
  }
  @media ${(props) => props.theme.breakpoint.sm} {
    padding: 3rem;
  }
`;

export default Frame;
