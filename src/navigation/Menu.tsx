import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
	Animated,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	useIsDrawerOpen,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, constants, FONTS, images, SIZES } from '../constants';
import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/src/types';
import Screens from './Screens';
import CustomDrawerItem from '../components/CustomDrawerItem';

const Drawer = createDrawerNavigator();

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
	const { navigation } = props;
	const [active, setActive] = useState(constants.screens.home);

	const handleNavigation = useCallback(
		(to) => {
			setActive(to);
			navigation.navigate(to);
		},
		[navigation, setActive]
	);
	return (
		<DrawerContentScrollView
			scrollEnabled={true}
			contentContainerStyle={{ flex: 1 }}
		>
			<View
				style={{
					flex: 1,
					paddingHorizontal: SIZES.radius,
				}}
			>
				{/* Close Btn */}
				<View
					style={{
						alignItems: 'flex-start',
						justifyContent: 'center',
						marginTop: 10,
					}}
				>
					<TouchableOpacity
						style={{
							alignItems: 'center',
							justifyContent: 'center',
						}}
						onPress={() => props.navigation.closeDrawer()}
					>
						<Ionicons
							name="close-outline"
							size={35}
							color={COLORS.black}
						/>
					</TouchableOpacity>
				</View>

				{/* Profile */}
				<TouchableOpacity
					style={styles.profileContainer}
					onPress={() => handleNavigation('Profile')}
				>
					<Image
						source={images.me}
						style={styles.profileImage}
						resizeMode="cover"
					/>

					<View style={styles.profileInfo}>
						<Text style={styles.profileName}>Nelson Muriithi</Text>
						<Text style={styles.profileEmail}>
							nelson@gmail.com
						</Text>
					</View>
				</TouchableOpacity>

				{/* Drawer Items */}
				<View style={{ flex: 1, marginTop: SIZES.padding }}>
					<CustomDrawerItem
						label={constants.screens.home}
						icon="home-outline"
						isActive={active === constants.screens.home}
						onPress={() => handleNavigation(constants.screens.home)}
					/>

					<CustomDrawerItem
						label={constants.screens.workout}
						icon="wallet-outline"
						isActive={active === constants.screens.workout}
						onPress={() =>
							handleNavigation(constants.screens.workout)
						}
					/>

					<CustomDrawerItem
						label={constants.screens.notification}
						icon="notifications-outline"
					/>

					<CustomDrawerItem
						label={constants.screens.favourite}
						icon="heart-outline"
					/>

					{/* Line Divider */}
					<View style={styles.divider} />

					<CustomDrawerItem label="Location" icon="locate-outline" />

					<CustomDrawerItem label="Coupons" icon="card-outline" />

					<CustomDrawerItem
						label="Settings"
						icon="settings-outline"
					/>

					<CustomDrawerItem
						label="Invite a friend"
						icon="person-add-outline"
					/>

					<CustomDrawerItem label="Help Center" icon="help" />
				</View>

				<View
					style={{
						marginBottom: SIZES.padding,
					}}
				>
					<CustomDrawerItem label="Logout" icon="log-out-outline" />
				</View>
			</View>
		</DrawerContentScrollView>
	);
};

const ScreenStack = () => {
	const isDrawerOpen = useIsDrawerOpen();
	const animation = useRef(new Animated.Value(0)).current;

	const scale = animation.interpolate({
		inputRange: [0, 1],
		outputRange: [1, 0.88],
	});

	const rotate = animation.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '-10deg'],
	});

	const borderRadius = animation.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 16],
	});

	const animateStyle = {
		borderRadius: borderRadius,
		transform: [{ scale }],
	};

	useEffect(() => {
		Animated.timing(animation, {
			duration: 200,
			useNativeDriver: true,
			toValue: isDrawerOpen ? 1 : 0,
		}).start();
	}, [isDrawerOpen, animation]);

	return (
		<Animated.View
			style={StyleSheet.flatten([
				animateStyle,
				{
					flex: 1,
					overflow: 'hidden',
					borderColor: '#97D4E7',
					borderWidth: isDrawerOpen ? StyleSheet.hairlineWidth : 0,
				},
			])}
		>
			<Screens />
		</Animated.View>
	);
};

const Menu = () => {
	return (
		<View
			// colors={['#97D4E7', '#EBF7FA']} //
			// start={{ x: 0, y: 0.5 }}
			// end={{ x: 1, y: 0.5 }}
			// locations={[0, 0.7]}
			style={styles.container}
		>
			<Drawer.Navigator
				drawerType="back"
				overlayColor="transparent"
				sceneContainerStyle={{ backgroundColor: 'transparent' }}
				drawerContent={(props) => {
					return <CustomDrawerContent {...props} />;
				}}
				drawerStyle={{
					flex: 1,
					width: '60%',
					borderRightWidth: 0,
					backgroundColor: 'transparent',
				}}
			>
				<Drawer.Screen name="Screens" component={ScreenStack} />
			</Drawer.Navigator>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.menu, //#E2E2E2
	},
	drawerStyle: {
		flex: 1,
		width: '65%',
		paddingRight: 20,
		backgroundColor: 'transparent',
	},
	profileContainer: {
		flexDirection: 'row',
		marginTop: SIZES.radius,
		alignItems: 'center',
	},
	profileImage: {
		height: 50,
		width: 50,
		borderRadius: SIZES.radius,
	},
	profileInfo: {
		marginLeft: SIZES.radius,
	},
	profileName: {
		color: COLORS.black,
		...FONTS.h3,
	},
	profileEmail: {
		color: COLORS.black,
		...FONTS.body4,
	},
	divider: {
		height: 1,
		marginVertical: SIZES.radius,
		marginLeft: SIZES.radius,
		backgroundColor: COLORS.darkBlue,
	},
});

export default Menu;
