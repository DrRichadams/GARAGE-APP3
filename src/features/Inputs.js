import styled from "styled-components"

export const FullInput = styled.TextInput`
    background-color: #01050f;
    color: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 6px;
`;

export const LargeInput = styled(FullInput)`
    width: 90%;
`;

export const SmallInput = styled.TextInput`
    background-color: #01050f;
    color: #fff;
    border-radius: 5px;
    width: 80%;
    padding: 6px;
    /* margin-right: 8px; */
`;