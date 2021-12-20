import React, { useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, constants } from '../constants';
import { Home, Profile } from '../screens';
import { useNavigation } from '@react-navigation/core';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icons from '../components/Icons';

const Tab = createBottomTabNavigator();

interface IScreen {
	label: string;
	iconType: string;
	icon: any;
	component: any;
}

const screens: IScreen[] = [
	{
		label: constants.screens.home,
		iconType: constants.icon_types.AntDesign,
		icon: 'home',
		component: Home,
	},
	{
		label: constants.screens.profile,
		iconType: constants.icon_types.MaterialCommunityIcons,
		icon: 'account-outline',
		component: Profile,
	},
];

interface ITabButton {
	screen: IScreen;
	selected?: boolean;
}

const TabButton: React.FC<ITabButton> = ({ screen, selected, ...props }) => {
	const navigation = useNavigation();
	const viewRef = useRef(new Animated.Value(0));

	useEffect(() => {
		if (selected) {
			// viewRef.current.interpolate({})
		} else {
		}
	}, [selected]);

	return (
		<TouchableOpacity
			style={styles.iconButton}
			activeOpacity={1}
			onPress={() => navigation.navigate(screen.label)}
		>
			<Animated.View ref={viewRef}>
				<Icons
					type={screen.iconType}
					name={screen.icon}
					size={24}
					color={selected ? COLORS.brandGreen : COLORS.gray}
				/>
			</Animated.View>
		</TouchableOpacity>
	);
};

const BottomNav = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarHideOnKeyboard: true,
				tabBarStyle: [
					{
						height: 60,
						position: 'absolute',
						bottom: 16,
						right: 16,
						left: 16,
						borderRadius: 16,
					},
					null,
				],
				tabBarLabelPosition: 'beside-icon',
			}}
		>
			{screens.map((screen, index) => (
				<Tab.Screen
					key={index}
					name={screen.label}
					component={screen.component}
					options={{
						tabBarIcon: ({ focused }) => {
							return (
								<Icons
									type={screen.iconType}
									name={screen.icon}
									size={24}
									color={
										focused
											? COLORS.brandGreen
											: COLORS.gray
									}
								/>
							);
						},
						tabBarButton: (props) => (
							<TabButton
								screen={screen}
								{...props}
								selected={props.accessibilityState?.selected}
							/>
						),
					}}
				/>
			))}
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	iconButton: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default BottomNav;
