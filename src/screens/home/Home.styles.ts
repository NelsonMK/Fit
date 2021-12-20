import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { COLORS, FONTS } from '../../constants';

export const StatusBarHeight = Constants.statusBarHeight;

export const HomeStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		paddingTop: StatusBarHeight + 10,
		backgroundColor: 'white',
	},
	infoContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	welcomeText: {
		color: COLORS.darkGray,
	},
	name: {
		...FONTS.h2,
	},
	iconContainer: {
		backgroundColor: '#F5F6F6',
		padding: 5,
		height: 50,
		width: 50,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 12,
	},
	alertContainer: {
		height: 150,
		marginTop: 20,
		borderRadius: 20,
		backgroundColor: COLORS.lightOrange3,
	},
});
