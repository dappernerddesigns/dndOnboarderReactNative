import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { ruleText } from '../utils/api';

export const RuleInfo = ({ route, navigation }) => {
	const { url } = route.params;
	const [text, setText] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		ruleText(url).then((res) => {
			console.log(res.name);
			setText(res);
			setIsLoading(false);
		});
	}, []);

	return (
		<View>
			{isLoading ? (
				<Text>Loading...</Text>
			) : (
				<>
					<Text>{text.name}</Text>
					<Text>{text.desc}</Text>
				</>
			)}
		</View>
	);
};
