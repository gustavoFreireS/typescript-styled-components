import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const TheStyled = styled.h2`
  color: ${(props: any) => props.color};
`;

ReactDOM.render(<TheStyled color="red">just a test</TheStyled>, document.getElementById('root'));
