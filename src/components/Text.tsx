import React from 'react';
import MaskedView from '@react-native-community/masked-view';
import { Platform, StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import { LinearGradient, LinearGradientPoint } from 'expo-linear-gradient';
import { SIZES } from '../constants';

interface IText extends TextProps {
	id?: string;
	gradient?: string[];
	start?: LinearGradientPoint;
	end?: LinearGradientPoint;
}

const Typography = (props: IText) => {
	const { id = 'Text', children, gradient, start, end, ...rest } = props;

	const textID =
		Platform.OS === 'android' ? { accessibilityLabel: id } : { testID: id };
	// const textStyles = StyleSheet.flatten([
	// 	style,
	// 	{
	// 		fontSize: 14,
	// 		lineHeight: 14,
	// 	},
	// ]) as TextStyle;

	const textHeight = 14;
	const fontSize = 14;

	const gradientHeight = Number(0) + Number(0);

	if (gradient) {
		return (
			<MaskedView
				maskElement={
					<Text {...textID} {...rest}>
						{children}
					</Text>
				}
			>
				<LinearGradient
					colors={gradient}
					start={start || [0.2, 0]}
					end={end || [0, 0]}
					style={{
						flex: 1,
						flexWrap: 'wrap',
						height: 20,
					}}
				/>
			</MaskedView>
		);
	}

	return (
		<Text {...textID} {...rest}>
			{children}
		</Text>
	);
};

export default React.memo(Typography);
