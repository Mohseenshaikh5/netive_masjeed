import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { Card, TextInput, Button, Title } from 'react-native-paper';
import ImgIcon from '../utils/commen';

const SingIn = ({ navigation }) => {


    const [secureText, setSecureText] = useState(true)

    const handleRout = name => {
        navigation.navigate(name);
    };
    return (
        <View style={styles.container}>
            <ImgIcon />
            <Card style={styles.card}>
                <Card.Content>

                    <Title style={styles.title}>Sign In</Title>
                    <TextInput
                        mode="outlined"
                        placeholder="Email"
                        label="Email"
                        style={styles.input}
                    />
                    <TextInput
                        mode="outlined"
                        placeholder="Password"
                        label="Password"
                        style={styles.input}
                        secureTextEntry={secureText}
                        right={
                            <TextInput.Icon
                                icon="eye"
                                color={"black"}
                                onPress={() => {
                                    setSecureText(!secureText);
                                    return false;
                                }}
                            />
                        }
                    />
                    <Button
                        mode="contained"
                        style={styles.button}
                        onPress={() => handleRout('MainScreen')}

                    >
                        Sign In
                    </Button>
                    <View style={styles.bottomTextContainer}>
                        <TouchableOpacity>
                            <Text style={styles.bottomText}>Forgot Password?</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity>
                            <Text style={styles.bottomText}>Sign Up</Text>
                        </TouchableOpacity> */}
                    </View>
                    <View style={{ width: '100%' }}>
                        <View style={styles.signUpView}>
                            <Text>Create new account?</Text>
                            <TouchableOpacity
                                onPress={() => handleRout('SignUp')}
                            >
                                <Text style={{ color: 'blue' }}> Register Here!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Card.Content>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },

    card: {
        width: '90%',
        padding: 20,
        borderRadius: 20
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: "bold",
        color: "gray"
    },
    input: {
        marginBottom: 10,
        borderRadius: 50,
    },
    button: {
        marginTop: 20,
    },
    bottomTextContainer: {
        alignItems: "flex-end",
        marginTop: 20,
    },
    bottomText: {
        color: 'blue',
        marginRight: 5
    },
    signUpView: {
        marginTop: 30,
        height: 36,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'right',
    },
});

export default SingIn;
