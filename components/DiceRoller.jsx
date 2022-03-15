import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

export const DiceRoller = () => {
	return (
		<View style={styles.container}>
			<Text>Dice Roller!</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f3ebe2',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
