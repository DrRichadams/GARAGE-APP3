import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { UnCenterednContainer, InnerContainerSmall,InnerContainer } from "../../features/Containers"
import { ReturnBtn, SmallAddBtn } from "../../features/Buttons"
import { Title2, Title4 } from "../../features/Titles"
import { FullInput, SmallInput } from "../../features/Inputs"
import { CheckBoxe, CheckBoxeWrapper } from "../../features/SmallBoxes"

import { addJobAction } from "../../../store/actions/GarageActions"
import { useDispatch } from "react-redux"

import { AntDesign } from '@expo/vector-icons';

const AddJob = ({ navigation }) => {

    const dispatch = useDispatch()



    const [ job, setJob ] = React.useState({
        id: Math.random(),
        make: "",
        isOffsite: false, //offsite - onsite
        tasks: [  ],
        report: "",
        isAssigned: false,
        employee: {
            name: "",
            id: null,
        }
    })

    const [ tempTask, setTempTask ] = React.useState("")
    // const [ tempMake, setTempMake ] = React.useState("")

    const setMake = (make) => {
        setJob({
            ...job,
            make
        })
    }

    const setInnerTask = () => {
        tempTask && setJob({
            ...job,
            tasks: [
                ...job.tasks,
                { id: Math.random(), task_name: tempTask, status: "pending", assigned_employee: "", report: "" }
            ]
        })

        setTempTask("")
    }

    const addJobFunc = () => {
        if(job.make && job.tasks.length > 0) {
            dispatch(addJobAction(job))
            console.log(job)
        } else {
            alert("Please, provide the required details")
        }
    }

    return(
        <UnCenterednContainer>
            <Title2 style={{ textTransform: "uppercase" }}>Add Job</Title2>

            <InnerContainer>
                <View style={{ width: "100%", padding: 15 }}>
                    <Title4>What is the make of the car?</Title4>
                    <FullInput onChangeText = {(text) => setMake(text)} />
                </View>
                <View style={{ width: "100%", padding: 15 }}>
                    <Text style={{ textTransform: "uppercase", fontWeight: "bold", color: "#01050f", marginBottom: 8 }}>Add Tasks for this car</Text>
                    
                    <View>
                        {
                            job.tasks && job.tasks.map((item, index) => (
                                <View key={index} style={{ flexDirection: "row", marginBottom: 12 }}>
                                    <AntDesign name="arrowright" size={20} color="#01050f" />
                                    <Text style={{ marginLeft: 5 }}>{ item.task_name }</Text>
                                </View>
                            ))
                        }
                    </View>
                    
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <SmallInput onChangeText = {(text) => setTempTask(text)} value={tempTask} />
                        <SmallAddBtn onPress={() => setInnerTask()}><Text style={{ color: "#fff" }}>ADD</Text></SmallAddBtn>
                    </View>

                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }} onPress={() => setJob({...job, isOffsite: !job.isOffsite})}>
                        <CheckBoxeWrapper>
                            <CheckBoxe isOffsite={job.isOffsite}></CheckBoxe>
                        </CheckBoxeWrapper>
                        
                        <Text style={{ fontWeight: "bold", marginLeft: 8 }}>Tick this if the job is offsite!</Text>
                    </TouchableOpacity>

                </View>
            </InnerContainer>

            <InnerContainerSmall>
                <ReturnBtn onPress={() => addJobFunc()} style={{ backgroundColor: "rgb(1,161,231)", marginBottom: 8 }}>
                    <Text style={{ color: "#fff" }}>ADD JOB</Text>
                </ReturnBtn>

                <ReturnBtn onPress={() => navigation.goBack()}>
                    <Text style={{ color: "#fff" }}>GO BACK</Text>
                </ReturnBtn>
            </InnerContainerSmall>
        </UnCenterednContainer>
    )
}

export default AddJob