import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Icons from '../../../components/Icons';
import { FONTS } from '../../../constants';

interface ITitle {
	title: string;
	iconType: any;
	icon: any;
	iconName?: string;
	iconSize?: number;
	onPress?: () => void;
}

const Title = (props: ITitle) => (
	<View
		style={{
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			marginVertical: 10,
		}}
	>
		<Text
			style={{
				marginLeft: 10,
				...FONTS.h2,
			}}
		>
			{props.title}
		</Text>
		<TouchableOpacity
			style={{ alignItems: 'center', flexDirection: 'row' }}
			onPress={props.onPress}
		>
			{props.iconName && (
				<Text style={{ marginRight: 5 }}>{props.iconName}</Text>
			)}
			<Icons
				type={props.iconType}
				name={props.icon}
				size={props.iconSize ? props.iconSize : 24}
			/>
		</TouchableOpacity>
	</View>
);

export default React.memo(Title);
