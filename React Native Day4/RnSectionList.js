import React, {useState} from "react"
import { StyleSheet, Text, View, SectionList } from 'react-native';
import styles from "./styles";

export default function RnSectionList(){

    const DATA = [
        {
            title:" Main Items",
            data: ["Pizza", "Burger"]
        },
        {
            title:"Sides",
            data:["French Fries", "Zingy Parcel"]
        },
        {
            title:"Beverages",
            data:["Coca Cola", "Cold Coffee", "Sprite"]
        },
        {
            title:"Desserts",
            data:[ "Cake","Ice Creams"]
        }
    ]

    const Item = ({title}) =>(
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>

        </View>
    )

    return(
        <View style={styles.container}>
            <SectionList 
            sections={DATA}
            keyExtractor={(item,index)=>item+index}
            renderItem={({item})=><Item title ={item}/>}
            renderSectionHeader={({section:{title}})=>(
                <Text style={styles.header}>{title}</Text>
            )}
            />
        </View>
    )
}