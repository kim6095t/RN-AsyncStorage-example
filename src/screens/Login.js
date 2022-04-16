import React, {useState} from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    Button,
    Alert
} from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Login({navigation}){
    const [name, setName]=useState('')
    const [age, setAge]=useState('')

    const setData=async()=>{
        if(name.length==0){
            Alert.alert('Warning!','please write your data')
        }else{
            try{
                var user={
                    Name:name,
                    Age:age
                }
                await AsyncStorage.setItem('userData', JSON.stringify(user))
                navigation.navigate('Home')
            }catch(error){
                console.log(error)
            }
        }
    }

    return(
        <View style={styles.body}>
            <Image
                style={styles.logo}
                source={require('../../assets/asyncstorage.png')}
            />
            <Text style={styles.text}>
                Async Storage
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                onChangeText={(value)=>setName(value)}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter your age'
                onChangeText={(value)=>setAge(value)}
            />
            <View style={styles.btn}>
                <Button
                    title="Login"
                    color="#1eb900"
                    onPress={setData}
                />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    body:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#0080ff'
    },
    logo:{
        width: 100,
        height: 100,
        margin: 20,
    },
    text:{
        fontSize:30,
        color:'#ffffff',
        marginBottom:130,
    },
    input:{
        width:300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign:'center',
        fontSize: 20,
        marginBottom: 10,
    },
    btn:{
        marginBottom:10,
        width:200,
    }
})
