import styled from 'styled-components';




export const ContainerStat  = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;


export const ItemStat  = styled.p`
    width: 90px;
    height: 20px;

    margin-right:${p =>p.theme.space[2]}px;

    color: ${p =>p.theme.colors.secondText};
`

export const Total  = styled.p`
width: 100px;
margin-right:${p =>p.theme.space[2]}px;

color: ${p =>p.theme.colors.textPrimary}
`;
export const Positive  = styled.p`
width: 200px;

margin-right:${p =>p.theme.space[2]}px;
color: ${p =>p.theme.colors.secondText}
`;