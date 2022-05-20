import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { InnerContainer, MainContainer } from "../../features/Containers"
import { UnCenterednContainer, InnerContainerSmall } from "../../features/Containers"
import { ReturnBtn } from "../../features/Buttons"
import { Title2 } from "../../features/Titles"

import { useSelector } from "react-redux"

const AssignJob = () => {
    const jobs = useSelector(state => state.garage.jobs)
    return(
        <UnCenterednContainer>
            <Title2 style={{ textTransform: "uppercase" }}>Assign Job</Title2>

            <InnerContainer>
                {
                    jobs.length > 0 ? jobs.map((item, index) => (
                        <View key={index}>
                            <Text>{item.name}</Text>
                        </View>
                    ))
                    :<View>
                        <Text>There no jobs available</Text>
                     </View>
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

export default AssignJob