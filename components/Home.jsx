import {
	View,
	ImageBackground,
	Image,
	Button,
	Pressable,
	Text,
} from 'react-native';
import { StyleSheet } from 'react-native';

export const Home = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>D&D Onboarder</Text>
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
