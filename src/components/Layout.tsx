import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { COLORS } from '../constants';

const Layout: React.FC = ({ children }): React.ReactElement => {
	return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		paddingTop: Constants.statusBarHeight + 10,
		backgroundColor: COLORS.white,
	},
});

export default Layout;
