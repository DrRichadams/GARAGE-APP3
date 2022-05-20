import React from "react";
import { View, Text, TouchableOpacity } from "react-native"
import { useSelector } from "react-redux";
import { Title2, Title4 } from "../../features/Titles";
import { UnCenterednContainer, InnerContainer, InnerContainerSmall } from "../../features/Containers";
import { ReturnBtn } from "../../features/Buttons";

const Employees = ({ navigation }) => {

    const employeeList = useSelector(state => state.garage.employees)

    return(
        <UnCenterednContainer>
            <Title2>This job is assigned to ?</Title2>
            <Title4>Select from a list of employees with no jobs below</Title4>

            <InnerContainer>
                {
                    employeeList && employeeList.filter(emp => emp.hasJob === false).map((item, index) => (
                        <TouchableOpacity key={index} style={{ backgroundColor: "rgb(1,161,231)", padding: 6, marginBottom: 5, width: "90%", borderRadius: 5 }}>
                            <Text style={{ color: '#fff' }}>{item.name}</Text>
                        </TouchableOpacity>
                    ))
                }
            </InnerContainer>
            <InnerContainerSmall style={{ marginTop: 150 }}>
                <ReturnBtn onPress={() => navigation.goBack()}>
                    <Text style={{ color: "#fff" }}>GO BACK</Text>
                </ReturnBtn>
            </InnerContainerSmall>
        </UnCenterednContainer>
    )
}

export default Employees