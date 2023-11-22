import React, { useEffect, useState } from 'react';
// Importing Components from react native
import { Pressable, StyleSheet, Text, View } from 'react-native';
// Importing Camera to later make taking pictures possible
import { Camera } from 'expo-camera';

const CameraScreen = ({ navigation }) => {
    
    const [hasPermission, setHasPermission] = useState(null);
    
    const getPermission = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
    };

    let camera;

    const getPicture = async () => {
        if (camera) {
            let photo = await camera.takePictureAsync();
            navigation.navigate('AddNewLog', { uri: photo.uri });
        }
    }

    useEffect(() => {
        getPermission();
    }, []);

    if (hasPermission === null) {
        return <Text>Awaiting Permission</Text>
    }
    if (hasPermission === false) {
        return <Text>Access Denied!</Text>
    }

    return(
        <View style = {styles.container}>
            <Camera style = {styles.subContainer} ref = {(ref) => { camera = ref }}>
                <Pressable style = {styles.pressable} onPress = {() =>{ getPicture();}}>
                    <Text style = {styles.text}>TAKE PICTURE</Text>
                </Pressable>
            </Camera>
        </View>
    )
};

const styles = StyleSheet.create({
    container:
    {
        flex: 1
    },
    subContainer:
    {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row-reverse",
        alignItems: "flex-end"
    },
    pressable:
    {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#8184DB',
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
        paddingTop: 15,
        borderRadius: 20
    },
    text:
    {
        fontSize: 24,
        marginBottom: 15,
        color: "yellow",
        fontWeight: 'bold'
    }
});

export default CameraScreen;