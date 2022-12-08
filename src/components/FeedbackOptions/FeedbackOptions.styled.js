
import styled from 'styled-components'


export const ButtonBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Button = styled.button`
    margin-left: ${p => p.theme.space[2]}px;
    width: ${p => p.theme.space[5]}px;
    height: ${p => p.theme.space[4]}px;

    border: none;
    border-radius: ${p => p.theme.space[2]}px;

    background-color: ${p => p.theme.colors.bcBtn};
    color: ${p => p.theme.colors.secondText};


    cursor: pointer;

`;