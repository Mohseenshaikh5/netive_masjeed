import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, List, Text, Appbar, Avatar } from 'react-native-paper';
import { PieChart } from 'react-native-chart-kit';
import ListCard from './listCard';


const HomeScreen = () => {
    const users = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', amount: '$100' },
        { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', amount: '$200' },
        { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', amount: '$200' },
        { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', amount: '$200' },
        { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', amount: '$200' },
        { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', amount: '$200' },
        { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', amount: '$200' },
        { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', amount: '$200' },

        // Add more user data here
    ];

    const data = [
        {
            name: "Monthly ",
            amount: 500,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Yearly ",
            amount: 6000,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        }
    ];

    return (
        <>
            <Appbar.Header style={styles.header}>
                <View style={styles.heding}>
                    <Appbar.Content title="Dashboard" />
                    <Avatar.Image
                        size={40}
                        source={require('../icons/masjid-icon-33.jpg')}
                        // source={image}
                        style={styles.avatar}
                    />
                </View>
            </Appbar.Header>
            <ScrollView style={styles.container}>

                <View style={styles.container}>

                    <View style={styles.cardContainer}>
                        <Card style={styles.card}>
                            <PieChart
                                data={data}
                                width={300}
                                height={200}
                                chartConfig={{
                                    backgroundColor: '#ffffff',
                                    backgroundGradientFrom: '#ffffff',
                                    backgroundGradientTo: '#ffffff',
                                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                }}
                                accessor="amount"
                                backgroundColor="transparent"
                                paddingLeft="15"
                                absolute
                            />
                        </Card>

                    </View>
                    <View style={styles.amountcardContainer}>
                        <Card style={styles.amountCard}>
                            <Card.Content>
                                <Text style={styles.yearlyAmount}>$6000</Text>
                            </Card.Content>
                            <View style={styles.amount} >
                                <Text style={styles.yrAmount}>Yearly Amount</Text >
                            </View>
                        </Card>
                    </View>
                    <ListCard users={users} />
                </View>
            </ScrollView>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: '#f0f0f0',

    },
    cardContainer: {
        marginBottom: 5,
        margin: 2,

    },
    amountcardContainer: {
        margin: 5,
        marginBottom: 5,
    },
    card: {
        width: '100%',
        alignItems: 'center',
    },
    amount: {
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center',

    },
    amountCard: {
        padding: 10
    },
    yrAmount: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10
    },
    yearlyAmount: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
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
    // avatar: {
    //     height: 50,
    //     width: 50
    // }

});

export default HomeScreen;
