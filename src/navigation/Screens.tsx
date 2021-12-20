import { useNavigation } from '@react-navigation/core';
import { DrawerActions } from '@react-navigation/native';
import {
	createStackNavigator,
	StackHeaderTitleProps,
} from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, constants, FONTS, SIZES } from '../constants';
import { Home, MainLayout, Profile, Workout } from '../screens';
import Typography from '../components/Text';

const Stack = createStackNavigator();

export default () => {
	const navigation = useNavigation();

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				headerStyle: { elevation: 0 },
				headerTitleAlign: 'left',
				headerTitleContainerStyle: { marginLeft: -5 },
				headerLeftContainerStyle: { paddingLeft: 4 },
				headerRightContainerStyle: { paddingRight: 4 },
				headerLeft: () => (
					<TouchableOpacity
						style={styles.menuContainer}
						onPress={() =>
							navigation.dispatch(DrawerActions.toggleDrawer())
						}
					>
						<MaterialCommunityIcons
							name="menu"
							size={25}
							color={COLORS.black}
						/>
					</TouchableOpacity>
				),
				headerTitle: ({ children }: StackHeaderTitleProps) => (
					<Typography
						style={styles.headerTitle}
						gradient={COLORS.textGradient}
					>
						{children}
					</Typography>
				),
			}}
		>
			<Stack.Screen name={constants.screens.home} component={Home} />
			<Stack.Screen name="Profile" component={Profile} />
			<Stack.Screen
				name={constants.screens.workout}
				component={Workout}
			/>
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	menuContainer: {
		marginLeft: 5,
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: SIZES.radius,
		borderColor: COLORS.gray2,
	},
	headerTitle: {
		...FONTS.h2,
	},
});
