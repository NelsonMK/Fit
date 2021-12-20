import React from 'react';
import {
	Animated,
	Image,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	TouchableWithoutFeedbackProps,
	View,
} from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import { Ionicons } from '@expo/vector-icons';

interface Main {
	drawerAnimationStyle?: any;
}

const MainLayout: React.FC<Main> = ({ drawerAnimationStyle, ...props }) => {
	function renderSearch() {
		return (
			<View
				style={{
					flexDirection: 'row',
					height: 40,
					alignItems: 'center',
					marginHorizontal: SIZES.padding,
					marginVertical: SIZES.base,
					paddingHorizontal: SIZES.radius,
					borderRadius: SIZES.radius,
					backgroundColor: COLORS.lightGray1,
				}}
			>
				{/* Icon */}
				<Ionicons name="search" size={20} color={COLORS.black} />

				{/* TextInput */}
				<TextInput
					style={{
						flex: 1,
						marginLeft: SIZES.radius,
						...FONTS.body3,
					}}
					placeholder="Search"
				/>

				{/* Filter Button */}
				<TouchableOpacity>
					<Ionicons
						name="filter-outline"
						size={20}
						color={COLORS.black}
					/>
				</TouchableOpacity>
			</View>
		);
	}

	return (
		<View style={[styles.container, { ...drawerAnimationStyle }]}>
			{renderSearch()}
		</View>
	);
};

interface Tab extends TouchableWithoutFeedbackProps {
	label: string;
	icon: any;
	isFocused?: boolean;
}

const TabButton: React.FC<Tab> = ({ label, icon, isFocused, ...props }) => {
	return (
		<TouchableWithoutFeedback>
			<Animated.View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Animated.View
					style={{
						flexDirection: 'row',
						width: '80%',
						height: 50,
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: 25,
					}}
				>
					<Image
						source={icon}
						style={{
							width: 20,
							height: 20,
							tintColor: COLORS.gray,
						}}
					/>

					{isFocused && (
						<Text
							numberOfLines={1}
							style={{
								marginLeft: SIZES.base,
								color: COLORS.gray,
								...FONTS.h3,
							}}
						>
							{label}
						</Text>
					)}
				</Animated.View>
			</Animated.View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
});

export default MainLayout;
