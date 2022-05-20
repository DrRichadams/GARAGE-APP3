import styled from "styled-components"
import { TouchableOpacity } from "react-native";

export const RegBtn = styled.TouchableOpacity`
    background-color: ${({varient, color}) => varient === "outline" ? "trasparent" : color};
    color: ${({varient, color}) => varient === "outline" ? color : "#fff"};
    border: 2px solid ${({ color}) => color};
    padding: 8px 12px;
    width: 90%;
    margin-bottom: 8px;
`;

export const OutBtn = styled.TouchableOpacity`
    background-color: transparent;
    border: 2px solid rgb(1,161,231);
    padding: 8px 12px;
    width: 90%;
    margin-bottom: 8px;
    border-radius: 5px;

    Text {
        color: rgb(1,161,231);
    }
`;

export const ReturnBtn = styled.TouchableOpacity`
    background-color: orangered;
    padding: 8px 12px;
    width: 90%;
    justify-self: flex-end;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
`;

export const SmallAddBtn = styled.TouchableOpacity`
    background-color: #01050f;
    padding: 8px;
    width: 50px;
    /* justify-self: flex-end; */
    align-items: center;
    justify-content: center;
    border-radius: 4px;
`;

