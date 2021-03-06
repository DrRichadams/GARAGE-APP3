import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { MainContainer } from "../features/Containers"
import { Title2, Title4 } from "../features/Titles"
import { OutBtn } from "../features/Buttons"
import { OutBtnText } from "../features/Texts"

const LoginScreen = ({ navigation }) => {
    return(
        <MainContainer>
            <Image 
                source={require("../../assets/icon.png")}
            />
            <Title2>Welcome to Valentine's Garage</Title2>
            <Title4>Choose account type below to begin</Title4>
            <OutBtn varient="fill" color="#01050f" onPress={() => { 
                navigation.navigate("Admin")
            }}>
                <OutBtnText>Admin</OutBtnText> 
            </OutBtn>
            <OutBtn varient="outline" color="#01050f"
                    onPress={() => {
                        navigation.navigate("ChooseEmployee")
                    }}>
                <OutBtnText>Employee</OutBtnText>
            </OutBtn>
        </MainContainer>
    )
}

export default LoginScreen