import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute, useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Image, } from 'react-native';
import FinanceIcon from '../icons/finance.svg'
// import ProfileScreen from '../profile/ProfileScreen';
// import HomeScreen from '../home/HomeScreen';
// import ActivityScreen from '../activity/ActivityScreen';
// import CallsScreens from '../calls/CallsScreen';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';


import SingUp from '../auth/singUp';
import HistoryTable from '../table';
import SingIn from '../auth/singIn';
import HomeScreen from '../home';
import Repots from '../report';


const Tab = createBottomTabNavigator();
const screenOptions = {
    tabBarStyle: {
        backgroundColor: 'red',
        height: 80,
    },
    tabBarItemStyle: {
        margin: 5,
        borderRadius: 10,
        backgroundColor: 'red',
    },
};

const MainScreen = ({ navigation }) => {
    const route = useRoute();
    const theme = useTheme();

    return (
        <Tab.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                headerTitleAlign: 'center',
                tabBarStyle: {
                    height: 50,
                    paddingTop: 0,
                    // backgroundColor: theme.colors.primary,
                    borderTopWidth: 1,
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    padding: 10,
                    color: 'red',
                },
            }}
        // style={{
        //     backgroundColor: theme.colors.primary,
        // }}
        >

            <Tab.Screen
                name="HistoryTable"
                component={HistoryTable}
                options={{
                    title: 'Home',
                    color: 'white',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TouchableOpacity
                            style={styles.footContainer}
                            onPress={() => navigation.navigate('HistoryTable')}
                        >
                            <Icon
                                style={[
                                    styles.footIcon,
                                    route.name === 'home' && styles.active,
                                ]}
                                name="wallet"
                            />
                        </TouchableOpacity>
                    ),
                    tabBarActiveTintColor: '#000',
                    tabBarInactiveTintColor: '#dddddd',
                    // tabBarActiveTintColor: theme == 'dark' ? lightScheme.secondary : darkScheme.secondary,
                    // tabBarInactiveTintColor: theme == 'dark' ? lightScheme.black : darkScheme.black,
                    barStyle: {
                        backgroundColor: 'red',
                    },
                }}
            />
            <Tab.Screen
                name="Dashboard"
                component={HomeScreen}
                options={{
                    title: 'Dashboard',
                    color: 'white',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TouchableOpacity
                            style={styles.footContainer}
                            onPress={() => navigation.navigate('Dashboard')}
                        >
                            <Icon
                                style={[
                                    styles.footIcon,
                                    route.name === 'Dashboard' && styles.active,
                                ]}
                                name="home"
                            />

                        </TouchableOpacity>
                    ),
                    tabBarActiveTintColor: '#000',
                    tabBarInactiveTintColor: '#dddddd',
                    // tabBarActiveTintColor: theme == 'dark' ? lightScheme.secondary : darkScheme.secondary,
                    // tabBarInactiveTintColor: theme == 'dark' ? lightScheme.black : darkScheme.black,
                    barStyle: {
                        backgroundColor: 'red',
                    },
                }}
            />
            <Tab.Screen
                name="Repots"
                component={Repots}
                options={{
                    title: 'Repot',
                    color: 'white',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TouchableOpacity
                            style={styles.footContainer}
                            onPress={() => navigation.navigate('Repots')}
                        >

                            <Icon
                                style={[
                                    styles.footIcon,
                                    route.name === 'Repots' && styles.active,
                                ]}
                                name="solution1"

                            />
                            {/* <Icon
                                style={[
                                    styles.footIcon,
                                    route.name === 'Repots' && styles.active,
                                ]}
                                name="user"
                            /> */}
                        </TouchableOpacity>
                    ),
                    tabBarActiveTintColor: '#000',
                    tabBarInactiveTintColor: '#dddddd',
                    // tabBarActiveTintColor: theme == 'dark' ? lightScheme.secondary : darkScheme.secondary,
                    // tabBarInactiveTintColor: theme == 'dark' ? lightScheme.black : darkScheme.black,
                    barStyle: {
                        backgroundColor: 'red',
                    },
                }}
            />



        </Tab.Navigator>
    );
};

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

        justifyContent: 'space-between',
        padding: 10,
        borderTopColor: 'gray',
        zIndex: 111111,
    },
    footContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    footIcon: {
        fontSize: 25,
        fontWeight: '300',
        color: '#000',
        // backgroundColor: "red",
        // borderRadius: 50,
        height: 30,
        width: 26


    },
    dashboard: {
        fontSize: 25,
        fontWeight: '300',
        color: 'green',
        backgroundColor: "red",
        // borderRadius: 50,
        height: 30,
        width: 31

    },
    footText: {
        fontSize: 42,
        fontWeight: '500',
        color: 'white',
        backgroundColor: 'rose',
    },
    active: {
        color: 'red',
    },
});
