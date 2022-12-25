import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    text:{
        margin:17,
        fontSize:24,
        color:'#555455'
    },
    point:{
        color:'#195AA4',
        fontSize:48,
        fontWeight:'bold',
        marginLeft:95,
       
    },
    rewardText:{
        marginLeft:30,
        color:'#1E1D1E',
        height:36,
        width:200,
        textAlign:'center'
    },
    buttons:{
     
        flexDirection:'row',
        justifyContent:'space-between'
    },
    button1:{
        backgroundColor:'#195AA4',
        padding:11,
        alignItems:"center",
        borderRadius:28,
        width:175,
        marginTop:23,
    },
    text1:{
        fontSize:17,
        color:'white',
        fontWeight:'bold',
        
    },
    text3:{
        fontSize:17,
        color:'#195AA4',
        fontWeight:'bold',
       
    },
    button3:{
        backgroundColor:'white',
        padding:11,
        alignItems:"center",
        borderRadius:28,
        width:375,
        marginTop:15,
        borderWidth:1,
        borderColor:'#195AA4',
       
    },
    offer:{
        marginTop:22,
        color:'#555455',
        textAlign:'center'
    },
    container:{
        borderWidth:1,
        borderColor:'#E0E0E0',
        width:375,
        height:290 ,
        alignItems:'center',
        marginTop:6,
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    container1:{
        borderWidth:1,
        borderColor:'#E0E0E0',
        width:375,
        height:290 ,
       
    },
    offerText2: {
        fontStyle:'italic',
        color:'#195AA4',
        fontSize:12,
        paddingTop:11,
        paddingLeft:17,
        fontWeight:'600'
    },
    offerText3:{
        fontWeight:'bold',
        paddingLeft:17,
        fontSize:22,
        color:'#1E1D1E',
        alignItems:'center',
        paddingTop:9
    },
    offerText4:{
        color:'#707070',
        fontSize:15,
        paddingLeft:17,
        paddingTop:8,
        fontWeight:'400'
    },
    offerButton1:{
        backgroundColor:'#195AA4',
        padding:13,
        borderRadius:28,
        width:340,
        alignItems:'center',
        marginTop:6,
        marginLeft:16,
        
    },
    topImage3:{
        width: 115,
        height: 75,
        resizeMode: 'contain',
       
    },
    image1:{
        width:370,
        height:270,
        resizeMode:'cover'
    }
});

export default styles;