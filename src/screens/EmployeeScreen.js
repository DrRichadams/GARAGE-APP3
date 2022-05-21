import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { UnCenterednContainer, InnerContainerSmall, InnerContainer } from "../features/Containers"
import { ReturnBtn } from "../features/Buttons"

import { useSelector } from "react-redux"

const EmployeeScreen = ({ route, navigation }) => {
    const jobs = useSelector(state => state.garage.jobs)
    const {emp_id} = route.params

    React.useEffect(() => {
        const empJob = jobs.find(item => item.employee.id == emp_id)
        console.log("MY JOB IS: ", empJob)
    },[jobs])
    return(
        <UnCenterednContainer>
            <InnerContainer>
                <Text>Employee {emp_id}</Text>
            </InnerContainer>

            <InnerContainer>
                {
                    jobs.map((item, index) => (
                        <Text key={index}>{item.make}</Text>
                    ))
                }
            </InnerContainer>

            <InnerContainerSmall style={{ marginTop: 250 }}>
                <ReturnBtn onPress={() => navigation.goBack()}>
                    <Text style={{ color: "#fff" }}>GO BACK</Text>
                </ReturnBtn>
            </InnerContainerSmall>
        </UnCenterednContainer>
    )
}

export default EmployeeScreen