import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, TextInput, Button, Title } from 'react-native-paper';
import ImgIcon from '../utils/commen';

const SignUp = () => {

    const [secureText, setSecureText] = useState(true)


    return (
        <View style={styles.container}>
            <ImgIcon />
            <Card style={styles.card}>
                <Card.Content>

                    <Title style={styles.title}>Sign Up</Title>
                    <TextInput
                        mode="outlined"
                        placeholder="First Name"
                        label="First Name"
                        style={styles.input}
                    />
                    <TextInput
                        mode="outlined"
                        placeholder="Last Name"
                        label="Last Name"
                        style={styles.input}
                    />
                    <TextInput
                        mode="outlined"
                        placeholder="Email"
                        label="Email"
                        style={styles.input}
                        keyboardType="email-address"
                    />
                    <TextInput
                        mode="outlined"
                        placeholder="Mobile"
                        label="Mobile"
                        style={styles.input}
                        keyboardType="phone-pad"
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
                                color="black"
                                onPress={() => {
                                    setSecureText(!secureText);
                                    return false;
                                }}
                            />
                        } />
                    <Button mode="contained" style={styles.button}>
                        Sign Up
                    </Button>
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
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
        // alignSelf: "center"
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
});

export default SignUp;
