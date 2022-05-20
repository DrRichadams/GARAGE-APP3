import styled from "styled-components"

export const CheckBoxe = styled.View`
    width: 15px;
    height: 15px;
    /* border: 2px solid #01050f; */
    background-color: ${({isOffsite}) => isOffsite ? "#01050f":"transparent"};
`;

export const CheckBoxeWrapper = styled.View`
    width: 25px;
    height: 25px;
    border: 2px solid #01050f;
    justify-content: center;
    align-items: center;
    padding: 4px;
`;