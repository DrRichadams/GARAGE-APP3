import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { InnerContainer, UnCenterednContainer, InnerContainerSmall } from "../features/Containers"
import { ReturnBtn } from "../features/Buttons"
import { Title2, Title4 } from "../features/Titles"

import { useSelector } from "react-redux"

const Reports = ({ navigation }) => {
    const req_jobs = useSelector(state => state.garage.jobs)
    return(
        <UnCenterednContainer>
            <InnerContainer>
                <Title2 style={{ textTransform: "uppercase" }}>Reports</Title2>
                <Title4>All job reports are found here</Title4>
            </InnerContainer>

            <InnerContainer>
                    {
                        req_jobs && req_jobs.map((item, index) => (
                            <View 
                                key={index}
                                style={{
                                    backgroundColor: "rgba(36,40,80,0.25)",
                                    padding: 5,
                                    marginBottom: 5,
                                    width: "90%",
                                    borderRadius: 5
                                }}
                                >
                                <Text>Report for | <Text style={{ fontWeight: "bold" }}>{item.make}</Text></Text>
                                <Text>{item.report}</Text>
                            </View>
                        ))
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

export default Reports