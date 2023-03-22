import { Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DateNavigator from './DateNavigator';
import DatesNavigator from './DatesNavigator';
import { styles } from '../styles/style';

const BottomTabs = createBottomTabNavigator();

const TabsNavigator = () => {
      return (
            <BottomTabs.Navigator
                  screenOptions={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarStyle: styles.tabBar,
                  }}
            >
                  <BottomTabs.Screen
                        name="Shop-tab"
                        component={DateNavigator}
                        options={{
                              tabBarIcon: ({ focused }) => (
                                    <View style={styles.tabBarIcon}>
                                          <Ionicons
                                                name="md-create"
                                                size={24}
                                                color={
                                                      focused
                                                            ? '#7F5DF0'
                                                            : '#748C94'
                                                }
                                          />
                                          <Text
                                                style={{
                                                      color: focused
                                                            ? '#7F5DF0'
                                                            : '#748C94',
                                                }}
                                          >
                                                Nueva Cita
                                          </Text>
                                    </View>
                              ),
                        }}
                  />
                  <BottomTabs.Screen
                        name="Cart-tab"
                        component={DatesNavigator}
                        options={{
                              tabBarIcon: ({ focused }) => (
                                    <View style={styles.tabBarIcon}>
                                          <Ionicons
                                                name="md-calendar"
                                                size={24}
                                                color={
                                                      focused
                                                            ? '#7F5DF0'
                                                            : '#748C94'
                                                }
                                          />
                                          <Text
                                                style={{
                                                      color: focused
                                                            ? '#7F5DF0'
                                                            : '#748C94',
                                                }}
                                          >
                                                Citas
                                          </Text>
                                    </View>
                              ),
                        }}
                  />
            </BottomTabs.Navigator>
      );
};

export default TabsNavigator;
