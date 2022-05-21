import React from "react"
import { Text, View } from "react-native"
import { UnCenterednContainer, InnerContainer, InnerContainerSmall } from "../features/Containers"
import { Title2 } from "../features/Titles"
import { OutBtnText } from "../features/Texts"
import { ReturnBtn, OutBtn } from "../features/Buttons"
import { LogoImg } from "../features/Images"

import { useSelector } from "react-redux"
 
const AdminScreen = ({ navigation }) => {

    const jobs = useSelector(state => state.garage.jobs)
    // console.log("from Admin", jobs)

    return(
        <UnCenterednContainer>
            <LogoImg 
                source={require("../../assets/icon.png")}
            />
            <Title2>Good day Valentine, welcome to your dashboard</Title2>
            <InnerContainer>
                <OutBtn onPress={() => navigation.navigate("AddJob")}><OutBtnText>Add Job</OutBtnText></OutBtn>
                <OutBtn onPress={() => navigation.navigate("AssignJob")}><OutBtnText>Assign Job</OutBtnText></OutBtn>
                <OutBtn><OutBtnText>Reports</OutBtnText></OutBtn>
            </InnerContainer>

            <InnerContainer style={{ alignItems: "flex-start", padding: 20 }}>
                <Text style={{ fontWeight: "bold", marginBottom: 5 }}>List of all the jobs</Text>
                <View>
                    {
                        jobs && jobs.map((item, index) => (
                            <View key={index}>
                                <Text><Text style={{ fontWeight: "bold", color: "#bbb" }}>{item.make}</Text> is assigned to <Text style={{ color: "rgb(1,161,231)" }}>{ item.employee.name }</Text></Text>
                            </View>
                        ))
                    }
                </View>
            </InnerContainer>

            <InnerContainerSmall>
                <ReturnBtn onPress={() => navigation.goBack()}>
                    <Text style={{ color: "#fff" }}>LOG OUT</Text>
                </ReturnBtn>
            </InnerContainerSmall>
        </UnCenterednContainer>
    )
}

export default AdminScreen