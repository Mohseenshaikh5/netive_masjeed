import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List, IconButton, TextInput, Button, Appbar, Avatar } from 'react-native-paper';
import { ScrollView } from 'react-native';

const HistoryTable = () => {
    const users = [
        { id: 1, name: 'John Doe', company: 'Company A', amount: '$100', date: '2024-08-07' },
        { id: 2, name: 'Jane Doe', company: 'Company B', amount: '$200', date: '2024-08-08' },
        { id: 2, name: 'Jane Doe', company: 'Company B', amount: '$200', date: '2024-08-08' },
        { id: 2, name: 'Jane Doe', company: 'Company B', amount: '$200', date: '2024-08-08' },
        { id: 2, name: 'Jane Doe', company: 'Company B', amount: '$200', date: '2024-08-08' },
        { id: 2, name: 'Jane Doe', company: 'Company B', amount: '$200', date: '2024-08-08' },
        { id: 2, name: 'Jane Doe', company: 'Company B', amount: '$200', date: '2024-08-08' },

        // Add more user data here
    ];

    const handleView = (userId) => {
        // Handle view action
        // console.log(`View user with ID: ${userId}`);
    };

    const handleEdit = (userId) => {
        // Handle edit action
        // console.log(`Edit user with ID: ${userId}`);
    };

    const handleDelete = (userId) => {
        // Handle delete action
        // console.log(`Delete user with ID: ${userId}`);
    };

    return (
        // <ScrollView>
        <>

            <Appbar.Header style={styles.header}>
                <View style={styles.heding}>
                    <Appbar.Content title="Home" />
                    <Avatar.Image
                        size={40}
                        source={require('../icons/masjid-icon-33.jpg')}
                        // source={image}
                        style={styles.avatar}
                    />
                </View>
            </Appbar.Header>
            <View style={styles.container}>

                <View style={styles.createContainer}>
                    <TextInput
                        style={styles.input}
                        mode="outlined"
                        placeholder="Search"
                        label="Search"
                    />
                    <Button mode="contained" style={styles.button}>Add</Button>
                </View>
                <ScrollView nestedScrollEnabled={true}>
                    {users.map((user) => (
                        <View key={user.id} style={styles.listItem}>
                            <View style={styles.details}>
                                <List.Item
                                    title={user.name}
                                    description={`${user.company} | ${user.amount} | ${user.date}`}
                                />
                            </View>
                            <View style={styles.actions}>
                                <IconButton
                                    icon="eye"
                                    size={20}
                                    onPress={() => handleView(user.id)}
                                    iconColor='green'
                                />
                                <IconButton
                                    icon="pencil"
                                    size={20}
                                    onPress={() => handleEdit(user.id)}
                                    iconColor='blue'

                                />
                                <IconButton
                                    icon="delete"
                                    size={20}
                                    onPress={() => handleDelete(user.id)}
                                    iconColor='red'

                                />
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </>

        // </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 2,
    },
    details: {
        flex: 1,
    },
    actions: {
        flexDirection: 'row',
    },
    createContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 20,
        // marginTop: 5
    },
    input: {
        flex: 1,
        marginRight: 10,
    },
    button: {
        flexShrink: 0,
        padding: 5,
        marginTop: 5

    },
    heding: {
        flexDirection: 'row',
        display: "flex",
        justifyContent: "space-between",
        padding: 5

    },
    header: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
});
export default HistoryTable;
