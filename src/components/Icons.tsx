import AntDesign from '@expo/vector-icons/build/AntDesign';
import { IconProps } from '@expo/vector-icons/build/createIconSet';
import Feather from '@expo/vector-icons/build/Feather';
import FontAwesome5 from '@expo/vector-icons/build/FontAwesome5';
import Foundation from '@expo/vector-icons/build/Foundation';
import Ionicons from '@expo/vector-icons/build/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons';
import React from 'react';
import { constants } from '../constants';

interface IIcon extends IconProps<any> {
	type:
		| 'AntDesign'
		| 'Entypo'
		| 'EvilIcons'
		| 'Feather'
		| 'FontAwesome'
		| 'FontAwesome5'
		| 'Fontisto'
		| 'Foundation'
		| 'Ionicons'
		| 'MaterialCommunityIcons'
		| 'MaterialIcons'
		| 'Octicons'
		| 'SimpleLineIcons'
		| 'Zocial';
	name: any;
	size?: number;
	color?: any;
}

const Icons: React.FC<IIcon> = ({ type, name, size, color, ...props }) => {
	let icon = <Ionicons name="add" size={24} {...props} />;

	const iconSize = size ? size : 24;
	const iconColor = color ? color : undefined;

	if (type === constants.icon_types.AntDesign) {
		icon = (
			<AntDesign
				name={name}
				size={iconSize}
				color={iconColor}
				{...props}
			/>
		);
	} else if (type === constants.icon_types.MaterialCommunityIcons) {
		icon = (
			<MaterialCommunityIcons
				name={name}
				size={iconSize}
				color={iconColor}
				{...props}
			/>
		);
	} else if (type === constants.icon_types.Ionicons) {
		icon = (
			<Ionicons
				name={name}
				size={iconSize}
				color={iconColor}
				{...props}
			/>
		);
	} else if (type === constants.icon_types.Feather) {
		icon = (
			<Feather name={name} size={iconSize} color={iconColor} {...props} />
		);
	} else if (type === constants.icon_types.Foundation) {
		icon = (
			<Foundation
				name={name}
				size={iconSize}
				color={iconColor}
				{...props}
			/>
		);
	} else if (type === constants.icon_types.FontAwesome5) {
		icon = (
			<FontAwesome5
				name={name}
				size={iconSize}
				color={iconColor}
				{...props}
			/>
		);
	}

	return icon;
};

export default Icons;
