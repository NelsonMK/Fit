import MaskedView from '@react-native-community/masked-view';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface IGradientIcon {
	size: number;
	icon: any;
	gradient?: string[];
}

const GradientIcon: React.FC<IGradientIcon> = ({
	size,
	icon,
	gradient,
	...props
}) => {
	return (
		<View style={{ width: size }} {...props}>
			<MaskedView
				style={[styles.maskStyle, { height: size }]}
				maskElement={
					<View style={styles.iconContainer}>
						<MaterialCommunityIcons
							name={icon}
							size={size}
							color="white"
							style={styles.iconStyle}
						/>
					</View>
				}
			>
				<LinearGradient
					colors={
						gradient
							? gradient
							: ['#F7C650', 'rgba(247, 198, 80, 0.71)']
					}
					style={{ flex: 1 }}
				/>
			</MaskedView>
		</View>
	);
};

const styles = StyleSheet.create({
	maskStyle: {
		flex: 1,
		flexDirection: 'row',
	},
	iconContainer: {
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconStyle: {
		shadowColor: 'black',
		shadowOpacity: 0.5,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 1,
		},
	},
});

export default React.memo(GradientIcon);
