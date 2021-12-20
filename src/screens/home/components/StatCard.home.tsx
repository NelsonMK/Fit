import React from 'react';
import { View, Text } from 'react-native';
import Icons from '../../../components/Icons';
import { COLORS, FONTS } from '../../../constants';

interface IStatCard {
	iconType: any;
	icon: any;
	stat: number;
	task: string;
	containerColor: string;
	iconContainerColor: string;
}

const StatCard = ({
	iconType,
	icon,
	stat,
	task,
	containerColor,
	iconContainerColor,
}: IStatCard) => {
	return (
		<View
			style={{
				backgroundColor: containerColor,
				flex: 1,
				borderRadius: 10,
				marginRight: 10,
			}}
		>
			<View
				style={{
					paddingRight: 55,
					paddingLeft: 20,
					paddingTop: 15,
					paddingBottom: 10,
				}}
			>
				<View
					style={{
						padding: 10,
						backgroundColor: iconContainerColor,
						height: 50,
						width: 50,
						borderRadius: 10,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Icons
						type={iconType}
						name={icon}
						size={28}
						color="white"
					/>
				</View>
				<Text style={{ ...FONTS.h2, marginTop: 10 }}>{stat}</Text>
				<Text
					style={[
						{ ...FONTS.body2 },
						{ fontSize: 13, color: COLORS.gray },
					]}
				>
					{task}
				</Text>
			</View>
		</View>
	);
};

export default React.memo(StatCard);
