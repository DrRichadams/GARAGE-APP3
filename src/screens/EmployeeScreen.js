import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { UnCenterednContainer, InnerContainerSmall, InnerContainer } from "../features/Containers"
import { ReturnBtn } from "../features/Buttons"
import { Title2, Title4 } from "../features/Titles"
import { CheckBoxeWrapper, CheckBoxe } from "../features/SmallBoxes"
import { LargeInput } from "../features/Inputs"

import { tickJobTask } from "../../store/actions/GarageActions"
import { saveReport } from "../../store/actions/GarageActions"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

const EmployeeScreen = ({ route, navigation }) => {
    const jobs = useSelector(state => state.garage.jobs)
    const {emp_id, emp_name} = route.params

    const [ cur_jobs, set_cur_jobs ] = React.useState({})

    React.useEffect(() => {
        const empJob = jobs.find(item => item.employee.id == emp_id)
        set_cur_jobs({...empJob})
        empJob && set_reportText(empJob.report)
        // console.log("MY JOB IS: ", cur_jobs)
    },[jobs])

    React.useEffect(() => {
        console.log("MY JOB IS: ", cur_jobs.tasks)
    }, [cur_jobs])

    const [ reportText, set_reportText ] = React.useState("")

    const dispatch = useDispatch()

    const saveChanges = () => {
        dispatch(saveReport(cur_jobs.id, reportText))
        navigation.goBack()
    }

    const makeATick = ( taskId ) => {
        dispatch(tickJobTask(cur_jobs.id, taskId))
        navigation.goBack()
    }

    const tasks_render = cur_jobs.tasks && cur_jobs.tasks.map((item, index) => {
        return(
            <View 
                key={index} 
                style={{ 
                    backgroundColor: "rgb(1,161,231)",  width: "90%", 
                    marginBottom: 5,  borderRadius: 5,
                    padding: 8,  flexDirection: "row",
                    justifyContent: "space-between", alignItems: "center"
                }}
                >
                <Text style={{ color: "#fff" }}>{item.task_name}</Text>
                <TouchableOpacity onPress={() => makeATick(item.id)}>
                    <CheckBoxeWrapper>
                        <CheckBoxe isOffsite={item.isDone} />
                    </CheckBoxeWrapper>
                </TouchableOpacity>
            </View>
        )
    })

    return(
        <UnCenterednContainer>
            <InnerContainer>
                <Title2>Task list</Title2>
                <Title4>Hello  {emp_name}. These are your tasks.</Title4>
            </InnerContainer>

            <InnerContainer style={{ display: true > 0 ? "flex":"none" }}>
                <Text style={{ fontWeight: "bold", marginBottom: 5 }}>Write an overall report on your current job</Text>
                <LargeInput onChangeText = {text => set_reportText(text)} value={reportText} />
            </InnerContainer>

            <InnerContainer>
                { tasks_render }
            </InnerContainer>

            <InnerContainerSmall style={{ marginTop: 20 }}>
                <ReturnBtn 
                    onPress={() => saveChanges()} 
                    style={{ marginBottom: 5, backgroundColor: "rgb(1,161,231)", display: reportText  ? "flex":"none" }}>
                    <Text style={{ color: "#fff" }}>SAVE REPORT</Text>
                </ReturnBtn>
                <ReturnBtn onPress={() => navigation.goBack()}>
                    <Text style={{ color: "#fff" }}>GO BACK</Text>
                </ReturnBtn>
            </InnerContainerSmall>
        </UnCenterednContainer>
    )
}

export default EmployeeScreen