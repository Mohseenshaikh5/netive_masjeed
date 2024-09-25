import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { List, IconButton, TextInput, Button, Avatar, Appbar, Provider } from 'react-native-paper';
import { ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SelectList } from 'react-native-dropdown-select-list'
import { Dropdown } from 'react-native-element-dropdown';


const Repots = () => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [selected, setSelected] = React.useState("");

    const [value, setValue] = useState(null);


    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showDatePicker = () => setShow(true);
    const handleDateChange = () => setShow(false);

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

    const formatDates = (date) => {
        if (!date) return '';
        return date.toLocaleDateString('en-GB');
    };

    return (
        // <ScrollView>
        <>
            <Appbar.Header style={styles.header}>
                <View style={styles.heding}>
                    <Appbar.Content title="Reports" />
                    <Avatar.Image
                        size={40}
                        source={require('../icons/masjid-icon-33.jpg')}

                    />
                </View>
            </Appbar.Header>
            <View style={styles.container}>

                <View style={styles.createContainer}>
                    <Provider>
                        <TextInput
                            style={styles.input}
                            mode="outlined"
                            placeholder="Select Date"
                            label="Date"
                            value={formatDates(date)}
                            onFocus={showDatePicker}
                            showSoftInputOnFocus={false}
                        />
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode="date"
                                display="default"
                                onChange={onChange}
                            />
                        )}
                    </Provider>
                    <View>
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder="Select item"
                            searchPlaceholder="Search..."
                            value={value}
                            onChange={item => {
                                setValue(item.value);
                            }}
                        />
                    </View>
                    <View>
                        <Image
                            source={{ uri: 'data:image/png;base64,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' }}
                            style={styles.logo}

                        />
                    </View>


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
                                    iconColor="green"


                                />
                                <IconButton
                                    icon="pencil"
                                    size={20}
                                    onPress={() => handleEdit(user.id)}
                                    iconColor="blue"
                                />
                                <IconButton
                                    icon="delete"
                                    size={20}
                                    onPress={() => handleDelete(user.id)}
                                    iconColor="red"

                                />
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </>
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
        padding: 5,
        marginBottom: 20,
        marginTop: 10
    },
    input: {
        flex: 1,
        marginRight: 7,
    },
    dropdown: {
        flex: 1,
        marginRight: 5,
        height: 50,
        width: 150,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        marginTop: 5
    },
    placeholderStyle: {
        fontSize: 16,
        color: 'gray',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'black',
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    button: {
        flexShrink: 0,
        padding: 5,
        marginTop: 5,
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 10,
        marginTop: 5,
        marginLeft: 4,
    },
    heding: {
        flexDirection: 'row',
        display: "flex",
        justifyContent: "space-between",
        padding: 5,


    },
    header: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
});
export default Repots;
