import { StyleSheet, Text, View, Pressable } from 'react-native';

export const SingleRule = ({ navigation, rule }) => {
	return (
		<View>
			<Pressable
				style={styles.button}
				onPress={() =>
					navigation.navigate('RuleInfo', { url: rule.index })
				}>
				<Text style={styles.text}>{rule.name}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		height: 50,
		width: 200,
		backgroundColor: '#6F8695',
		borderColor: '#F43E69',
	},
	text: {
		color: '#323031',
		fontSize: 18,
	},
});
