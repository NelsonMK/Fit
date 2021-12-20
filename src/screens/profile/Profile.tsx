import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { COLORS, FONTS, images } from '../../constants';
import GradientIcon from '../../components/GradientIcon';

const Profile = () => {
	return (
		<View style={styles.container}>
			<View style={styles.profileContainer}>
				<Image source={images.me} style={styles.profileImage} />
				<View style={styles.divider} />
				<View style={styles.info}>
					<Text style={styles.fullName}>Nelson Muriithi</Text>
					<Text>nelson@gmail.com</Text>
				</View>
			</View>
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={{ padding: 20 }}
			>
				<View>
					<CardTitle
						icon="ios-stats-chart-outline"
						title="Statistics"
					/>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-evenly',
						}}
					>
						<StatCard
							icon={'fire'}
							time="1 day"
							label="Current Streak"
							gradient={['#FFCB57', '#FF6775']}
						/>

						<StatCard
							icon={'firework'}
							time="12 days"
							label="Longest Streak"
							gradient={['#F27EDB', '#AB64DD']}
						/>
					</View>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-evenly',
						}}
					>
						<StatCard
							icon={'bullseye'}
							time="21"
							label="Total Sessions"
							gradient={['#7F99E5', '#6D94D9']}
						/>

						<StatCard
							icon={'timelapse'}
							time="23h 14m"
							label="Time exercising"
							gradient={['#5FBAD6', '#AFB1FC']}
						/>
					</View>
				</View>
				<View style={{ marginBottom: 20 }}>
					<CardTitle icon="calendar-outline" title="Calendar" />
					<View>
						<StatCard
							icon={'calendar-search'}
							time="1 day"
							label="Current Streak"
						/>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

interface ITitleCard {
	icon: any;
	title: string;
}

const CardTitle = (props: ITitleCard) => (
	<View
		style={{
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			marginTop: 10,
		}}
	>
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'center',
			}}
		>
			<Ionicons name={props.icon} size={22} />
			<Text
				style={{
					marginLeft: 10,
					...FONTS.h2,
				}}
			>
				{props.title}
			</Text>
		</View>
		<TouchableOpacity>
			<SimpleLineIcons name="arrow-right" size={20} />
		</TouchableOpacity>
	</View>
);

interface IStatCard {
	icon: any;
	time: string;
	label: string;
	gradient?: string[];
}

const StatCard = (props: IStatCard) => (
	<View
		style={{
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: COLORS.white,
			borderRadius: 12,
			margin: 10,
			elevation: 5,
		}}
	>
		{/* <Image source={props.icon} style={{ marginTop: 10 }} /> */}
		<GradientIcon size={72} icon={props.icon} gradient={props.gradient} />

		<View style={[styles.divider, { width: 20 }]} />

		<View
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				marginVertical: 20,
			}}
		>
			<Text style={{ ...FONTS.h2 }}>{props.time}</Text>
			<Text style={{ color: COLORS.gray, ...FONTS.h5 }}>
				{props.label}
			</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		overflow: 'hidden',
		backgroundColor: '#E6EAEF',
	},
	profileContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.white,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		shadowColor: '#000',
		shadowOffset: { width: 1, height: 5 },
		shadowOpacity: 0.4,
		shadowRadius: 5,
		elevation: 20,
	},
	profileImage: {
		height: 100,
		width: 100,
		borderRadius: 50,
	},
	divider: {
		height: 5,
		width: 45,
		borderRadius: 6,
		marginTop: 15,
		backgroundColor: COLORS.gray3,
	},
	info: {
		marginVertical: 20,
		alignItems: 'center',
	},
	fullName: {
		...FONTS.h2,
	},
});

export default Profile;
