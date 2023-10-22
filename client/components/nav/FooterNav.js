import { React, useState } from "react"

import { TouchableOpacity, View } from "react-native"
import Text from '@kaloraat/react-native-text'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"


const Tabs = ({ name, textName }) => {
    return <>
        <TouchableOpacity>
            <>
                <FontAwesome5 name={name} size={25} style={{ marginBottom: 3, alignSelf: "center" }} />
                <Text>{textName}</Text>
            </>
        </TouchableOpacity>
    </>
};


const FooterNav = () => {
    return (
        <View style={{ flexDirection: "row", margin: 10, justifyContent: "space-between", marginHorizontal: 30 }}>

            <Tabs name={"home"} textName={"Home"} />
            <Tabs name={"plus-square"} textName={"Post"} />
            <Tabs name={"list-ol"} textName={"Links"} />
            <Tabs name={"user"} textName={"Account"} />
        </View>
    )
}

export default FooterNav