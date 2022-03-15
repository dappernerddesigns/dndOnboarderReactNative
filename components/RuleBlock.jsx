import {
	View,
	Text,
	StyleSheet,
	Pressable,
	Image,
	ScrollView,
} from 'react-native';
import { useState, useEffect } from 'react';
import { rules } from '../utils/api';
import { SingleRule } from './SingleRule';

export const RuleBlock = ({ navigation }) => {
	const [showRules, setShowRules] = useState([]);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		rules().then((res) => {
			setShowRules(res);
		});
	}, []);

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.header}>
					Click below to read rule blocks
				</Text>
				<View>
					{showRules.map((rule) => {
						return (
							<SingleRule
								rule={rule}
								navigation={navigation}
								key={rule.index}
							/>
						);
					})}
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f3ebe2',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	header: {
		fontSize: 24,
	},
});
