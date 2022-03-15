import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import * as RouteNavigation from '../routeNavigation';

export const Navigation = () => {
	return (
		<View style={styles.container}>
			<Pressable
				onPress={() => {
					RouteNavigation.navigate('Home');
				}}>
				<Text style={styles.navText}>Navigate me sailor</Text>
			</Pressable>

			<Pressable
				onPress={() => {
					RouteNavigation.navigate('DiceRoller');
				}}>
				<Text style={styles.navText}>Dice rolling goodness</Text>
			</Pressable>
			<Pressable
				onPress={() => {
					RouteNavigation.navigate('RuleBlock');
				}}>
				<Text style={styles.navText}>The Rules</Text>
			</Pressable>
			<Pressable
				onPress={() => {
					RouteNavigation.navigate('Spells');
				}}>
				<Text style={styles.navText}>Spells</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 120,
		backgroundColor: '#6f8695',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 25,
	},

	navText: {
		color: '#f3ebe2',
		fontSize: 18,
	},
});
