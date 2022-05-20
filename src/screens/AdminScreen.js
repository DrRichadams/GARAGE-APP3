import React from "react"
import { Text } from "react-native"
import { UnCenterednContainer, InnerContainer, InnerContainerSmall } from "../features/Containers"
import { Title2 } from "../features/Titles"
import { OutBtnText } from "../features/Texts"
import { ReturnBtn, OutBtn } from "../features/Buttons"
import { LogoImg } from "../features/Images"

import { useSelector } from "react-redux"
 
const AdminScreen = ({ navigation }) => {

    const jobs = useSelector(state => state.garage.jobs)
    console.log("from Admin", jobs)

    return(
        <UnCenterednContainer>
            <LogoImg 
                source={require("../../assets/icon.png")}
            />
            <Title2>Good day Valentine, welcome to your dashboard</Title2>
            <InnerContainer>
                <OutBtn onPress={() => navigation.navigate("AddJob")}><OutBtnText>Add Job</OutBtnText></OutBtn>
                <OutBtn><OutBtnText>Assign Job</OutBtnText></OutBtn>
                <OutBtn><OutBtnText>Reports</OutBtnText></OutBtn>
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