import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { MainContainer } from "../features/Containers"

const EmployeeScreen = ({ navigation }) => {
    return(
        <MainContainer>
            <Text>Employee</Text>
            <TouchableOpacity style={{ backgroundColor: "red", padding: 8 }} onPress={() => navigation.navigate("Login")}>
                <Text>Go back</Text>
            </TouchableOpacity>
        </MainContainer>
    )
}

export default EmployeeScreen