import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { UnCenterednContainer, InnerContainerSmall, InnerContainer } from "../features/Containers"
import { ReturnBtn } from "../features/Buttons"
import { Title2 } from "../features/Titles"

import { useSelector } from "react-redux"

const ChooseEmployee = ({ navigation }) => {
    const employeeList = useSelector(state => state.garage.employees)
    return(
        <UnCenterednContainer>
            <InnerContainer>
                <Title2>Select your name to proceed</Title2>
                <Text style={{ fontWeight: "bold", color: "rgb(1,161,231)" }}>Only users with pending jobs will appear</Text>
            </InnerContainer>

            <InnerContainer>
                {
                    employeeList.filter(item => item.hasJob === true).length > 0 ? employeeList.filter(item => item.hasJob === true).map((employee, index) => (
                        <TouchableOpacity 
                                key={index}
                                style={{
                                    backgroundColor: "#01050f",
                                    padding: 8,
                                    width: "90%",
                                    marginBottom: 5,
                                    borderRadius: 5
                                }}
                                onPress={() => navigation.navigate("Employee", { emp_id: employee.id, emp_name: employee.name })}
                                >
                            <Text style={{color:"#fff"}}>{employee.name}</Text>
                        </TouchableOpacity>
                    )) : <Text style={{ backgroundColor: "#fff", padding: 20, width: "90%", fontWeight: "bold", textAlign: "center" }}>No users with jobs available</Text>
                }
            </InnerContainer>

            <InnerContainerSmall>
                <ReturnBtn onPress={() => navigation.goBack()}>
                    <Text style={{ color: "#fff" }}>LOG OUT</Text>
                </ReturnBtn>
            </InnerContainerSmall>
        </UnCenterednContainer>
    )
}

export default ChooseEmployee