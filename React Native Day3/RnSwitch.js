import React, { useState } from 'react';
import styles from './styles';
import {Text,View,Switch} from 'react-native';
import CustomSwitch from './CustomSwitch';

export default function RnSwitch(){
    const [isEnabled,setIsEnabled] = useState(false);
    const [location,setLocation] = useState(false);
    const [mic,setMic] = useState(false);
    const [storage,setStorage] = useState(false);

    const toggleSwitch=()=>{
        setIsEnabled(previousState=>!previousState)
        console.log("Value Changed")
    }

    const toggleLocation=()=>{
        setLocation(previousState=>!previousState)
    }

    const toggleStorage=()=>{
        setStorage(previousState=>!previousState)
    }

    const toggleMic=()=>{
        setMic(previousState=>!previousState)
    }

    return(
        <View style={styles.switch}>
            <Switch trackColor={{false:"red",true:"green"}}
                thumbColor={isEnabled?"yellow":"pink"}
                onValueChange={toggleSwitch} 
                value={isEnabled}
            />

            <Text style={styles.text}>Location is {location ? "On" : "Off"}</Text>
            <Switch trackColor={{false:"red",true:"green"}}
                thumbColor={"black"}
                onValueChange={toggleLocation} 
                value={location}
            />

            <Text style={styles.text}>Storage is {storage ? "On" : "Off"}</Text>
            <Switch trackColor={{false:"red",true:"green"}}
                thumbColor={"black"}
                onValueChange={toggleStorage} 
                value={storage}
            />

            <Text style={styles.text}>Mic is {mic ? "On" : "Off"}</Text>
            <Switch trackColor={{false:"red",true:"green"}}
                thumbColor={"black"}
                onValueChange={toggleMic} 
                value={mic}
            />

            <Text style={styles.text}>Location using Custom Switch is {location ? "On" : "Off"}</Text>
            <CustomSwitch isEnabled={location} toggleSwitch={setLocation} />
        </View>
    )
}