import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { navigationRef, navigate } from './routeNavigation';

//components
import { Home } from './components/Home';
import { Navigation } from './components/Navigation';
import { DiceRoller } from './components/DiceRoller';
import { RuleBlock } from './components/RuleBlock';
import { RuleInfo } from './components/RuleInfo';
export default function App() {
	return (
		<NavigationContainer ref={navigationRef}>
			<Navigation />
			<Stack.Navigator>
				<Stack.Screen
					name='Home'
					component={Home}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='DiceRoller'
					component={DiceRoller}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='RuleBlock'
					component={RuleBlock}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='RuleInfo'
					component={RuleInfo}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
