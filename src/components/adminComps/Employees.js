import React from "react";
import { View, Text, TouchableOpacity } from "react-native"
import { useSelector } from "react-redux";
import { Title2, Title4 } from "../../features/Titles";
import { UnCenterednContainer, InnerContainer, InnerContainerSmall } from "../../features/Containers";
import { ReturnBtn } from "../../features/Buttons";

import { assignJobAction } from "../../../store/actions/GarageActions";
import { useDispatch } from "react-redux";

const Employees = ({ route, navigation }) => {

    const dispatch = useDispatch()

    const employeeList = useSelector(state => state.garage.employees)

    const { jobId } = route.params
    const [ empID, set_empID ] = React.useState(null)

    console.log("My job id", jobId)

    const assignJobProcess = () => {
        dispatch(assignJobAction(jobId, empID))
        // console.log("My IDs", jobId, empID)
        navigation.navigate("Admin")
    }

    const [ cur_selection, set_cur_selection ] = React.useState(0);

    return(
        <UnCenterednContainer>
            <Title2>This job is assigned to ?</Title2>
            <Title4>Select from a list of employees with no jobs below</Title4>

            <InnerContainer>
                {
                    employeeList && employeeList.filter(emp => emp.hasJob === false).map((item, index) => (
                        <TouchableOpacity 
                            key={index} 
                            style={{ backgroundColor: cur_selection === index + 1 ? "#01050f":"rgb(1,161,231)", padding: 6, marginBottom: 5, width: "90%", borderRadius: 5 }}
                            onPress={() => { set_cur_selection(index + 1); set_empID(item.id) }}
                            >
                            <Text style={{ color: '#fff' }}>{item.name}</Text>
                        </TouchableOpacity>
                    ))
                }
            </InnerContainer>
            <InnerContainerSmall style={{ marginTop: 250 }}>
                <ReturnBtn onPress={() => assignJobProcess()} style={{ marginBottom: 6, backgroundColor: "#01050f", display: cur_selection > 0 ? "flex":"none" }}>
                    <Text style={{ color: "#fff" }}>ASSIGN JOB</Text>
                </ReturnBtn>
                <ReturnBtn onPress={() => navigation.goBack()}>
                    <Text style={{ color: "#fff" }}>GO BACK</Text>
                </ReturnBtn>
            </InnerContainerSmall>
        </UnCenterednContainer>
    )
}

export default Employees