import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, List, Text } from 'react-native-paper';
const ListCard = ({ users }) => {

    return (
        <View>
            <Card style={styles.userCard}>
                <Card.Content>
                    <ScrollView style={styles.scrollContainer} nestedScrollEnabled={true}>
                        <View style={styles.tableHeader}>
                            <Text style={styles.tableHeaderText}>Name</Text>
                            <Text style={styles.tableHeaderText}>Email</Text>
                            <Text style={styles.tableHeaderText}>Amount</Text>
                        </View>
                        {users.map((user) => (
                            <View key={user.id} style={styles.tableRow}>
                                <Text style={styles.tableRowText}>{user.name}</Text>
                                <Text style={styles.tableRowText}>{user.email}</Text>
                                <Text style={styles.tableRowText}>{user.amount}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </Card.Content>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    userCard: {
        padding: 20,
        marginBottom: 5,
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
        marginBottom: 10,
        position: 'static'
    },
    tableHeaderText: {
        fontWeight: 'bold',
        width: '33%',
        textAlign: 'center',
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    tableRowText: {
        width: '33%',
        textAlign: 'center',
    },
    scrollContainer: {
        maxHeight: 350,
    },
});
export default ListCard