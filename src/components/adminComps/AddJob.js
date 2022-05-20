import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { UnCenterednContainer, InnerContainerSmall,InnerContainer } from "../../features/Containers"
import { ReturnBtn, SmallAddBtn } from "../../features/Buttons"
import { Title2, Title4 } from "../../features/Titles"
import { FullInput, SmallInput } from "../../features/Inputs"

const AddJob = ({ navigation }) => {
    return(
        <UnCenterednContainer>
            <Title2 style={{ textTransform: "uppercase" }}>Add Job</Title2>

            <InnerContainer>
                <View style={{ width: "100%", padding: 15 }}>
                    <Title4>What is the make of the car?</Title4>
                    <FullInput />
                </View>
                <View style={{ width: "100%", padding: 15 }}>
                    <Text style={{ textTransform: "uppercase", fontWeight: "bold", color: "#01050f", marginBottom: 8 }}>Add Tasks for this car</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <SmallInput />
                        <SmallAddBtn><Text style={{ color: "#fff" }}>ADD</Text></SmallAddBtn>
                    </View>
                </View>
            </InnerContainer>

            <InnerContainerSmall>
                <ReturnBtn onPress={() => navigation.goBack()}>
                    <Text style={{ color: "#fff" }}>GO BACK</Text>
                </ReturnBtn>
            </InnerContainerSmall>
        </UnCenterednContainer>
    )
}

export default AddJob