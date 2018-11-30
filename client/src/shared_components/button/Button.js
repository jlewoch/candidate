import React from 'react';
import styled from 'styled-components';

const Button = ({children}) => {
    const StyledButton = styled.button`
    padding: 3px;
    border-radius: 6px;
    min-width: 60px;
    color: white;
    font-weight: 600;
    background: #55B1C3;
    outline: none;
    border:none;
    box-shadow: 1px 1px 5px grey;
    :hover{
        background:#87D4DD
    }
    `

    return (
        <StyledButton>
            {children}
        </StyledButton>
    );
};

export default Button;