import React from 'react';
import {
	TouchableOpacity,
	Text,
	TouchableOpacityProps,
	StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SIZES } from '../constants';

interface ItemInterface extends TouchableOpacityProps {
	label: string;
	icon: any;
	isActive?: boolean;
}

const CustomDrawerItem: React.FC<ItemInterface> = ({
	label,
	icon,
	isActive,
	...props
}) => {
	return (
		<TouchableOpacity
			{...props}
			style={[
				styles.container,
				{
					backgroundColor: isActive
						? COLORS.transparentBlack1
						: 'transparent',
				},
			]}
		>
			<Ionicons
				name={icon}
				size={24}
				color={isActive ? '#2B98BA' : COLORS.darkBlue}
			/>
			<Text
				style={[
					styles.textStyle,
					{
						color: isActive ? '#2B98BA' : COLORS.darkBlue,
					},
				]}
			>
				{label}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: 40,
		marginBottom: SIZES.base,
		alignItems: 'center',
		paddingLeft: SIZES.radius,
		borderRadius: SIZES.base,
	},
	textStyle: {
		marginLeft: 15,
		...FONTS.h3,
	},
});

export default React.memo(CustomDrawerItem);
