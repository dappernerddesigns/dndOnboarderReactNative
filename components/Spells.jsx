import { View, Text } from 'react-native';
import { spells } from '../utils/api';
import { useState, useEffect } from 'react';

export const Spells = () => {
	const [spellList, setSpellList] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		spells().then((res) => {
			console.log(res);
			setSpellList(res);
			setIsLoading(false);
		});
	}, []);
	return (
		<View>
			<Text>Here are spells</Text>
			{isLoading ? (
				<Text>Loading...</Text>
			) : (
				<>
					{spellList.map((spell) => {
						return <Text>{spell.name}</Text>;
					})}
				</>
			)}
		</View>
	);
};
