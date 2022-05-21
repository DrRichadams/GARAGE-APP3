import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { InnerContainer, MainContainer } from "../../features/Containers"
import { UnCenterednContainer, InnerContainerSmall } from "../../features/Containers"
import { ReturnBtn } from "../../features/Buttons"
import { Title2 } from "../../features/Titles"

import { useSelector } from "react-redux"

const AssignJob = ({ navigation }) => {
    const jobs = useSelector(state => state.garage.jobs)
    return(
        <UnCenterednContainer>
            <Title2 style={{ textTransform: "uppercase" }}>Assign Job</Title2>
            <Text style={{ alignSelf: "flex-start", paddingLeft: 20, marginTop: 30, fontWeight: "bold" }}>Available Jobs</Text>

            <InnerContainer style={{ marginTop: 20 }}>
                {
                    jobs.length > 0 ? jobs.filter(job => job.isAssigned === false).map((item, index) => (
                        <TouchableOpacity 
                            key={index} 
                            style={{ backgroundColor: "rgb(1,161,231)", padding: 8, width: "90%", borderRadius: 5, marginBottom: 8
                            }}
                            onPress={() => navigation.navigate("Employees", { jobId: item.id })}>
                            <Text style={{ color: "#fff", fontWeight: "bold" }}>{item.make}</Text>
                        </TouchableOpacity>
                    ))
                    :<View 
                        style={{ 
                                    backgroundColor: "#fff", 
                                    paddingHorizontal: 12, 
                                    paddingVertical: 50,
                                    width: "90%", 
                                    justifyContent: "center", 
                                    alignItems: "center",
                                    marginTop: 20,
                                    borderRadius: 5,
                                    }}>
                        <Text style={{ fontWeight: "bold" }}>There no jobs available</Text>
                     </View>
                }
            </InnerContainer>

            <InnerContainerSmall>
                <ReturnBtn onPress={() => navigation.goBack()}>
                    <Text style={{ color: "#fff" }}>GO BACK</Text>
                </ReturnBtn>
            </InnerContainerSmall>
        </UnCenterednContainer>
    )
}

export default AssignJob