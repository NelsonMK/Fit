import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import Menu from './Menu';
import { assets } from '../constants';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { StatusBar } from 'react-native';
import BottomNav from './BottomNav';

const AppNavigation = () => {
	// StatusBar.setTranslucent(true);
	// StatusBar.setBackgroundColor('#FF573300');
	const [fontsLoaded] = useFonts({
		'Poppins-Regular': assets.PoppinsRegular,
		'Poppins-Black': assets.PoppinsBlack,
		'Poppins-Bold': assets.PoppinsBold,
		'Poppins-SemiBold': assets.PoppinsSemiBold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	const navigationTheme = {
		...DefaultTheme,
		//dark: isDark,
		colors: {
			...DefaultTheme.colors,
			border: 'rgba(0,0,0,0)',
			// text: String(theme.colors.text),
			// card: String(theme.colors.card),
			// primary: String(theme.colors.primary),
			// notification: String(theme.colors.primary),
			// background: String(theme.colors.background),
		},
	};

	return (
		<NavigationContainer theme={navigationTheme}>
			<ExpoStatusBar style="auto" />
			<Menu />
			{/* <BottomNav /> */}
		</NavigationContainer>
	);
};

export default AppNavigation;
