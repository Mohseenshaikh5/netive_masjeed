import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';



const ImgIcon = () => {
    return (
        <View>
            <Image
                source={require("../icons/masjid-icon-33.jpg")}
                style={styles.logo}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
        // alignSelf: "center"
    },
});


export default ImgIcon