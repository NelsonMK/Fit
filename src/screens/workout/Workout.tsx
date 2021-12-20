import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons';
import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import Layout from '../../components/Layout';
import { COLORS, constants, FONTS, SIZES } from '../../constants';
import moment from 'moment';
import Icons from '../../components/Icons';
import { ProgressChart } from 'react-native-chart-kit';

const Workout = () => {
	const startOfWeek = moment().startOf('isoWeek');
	const endOfWeek = moment().endOf('isoWeek');

	const days = [];
	let day = startOfWeek;

	while (day < endOfWeek) {
		const obj = {
			dayInNum: day.format('D'),
			dayShortForm: day.format('ddd'),
		};
		days.push(obj);
		day = day.clone().add(1, 'd');
	}

	const data = {
		data: [0.4, 0.6, 0.8],
	};

	const workouts = [
		{
			name: 'Walking',
			iconType: constants.icon_types.Foundation,
			icon: 'foot',
			color: '#F8753D',
		},
		{
			name: 'Calories',
			iconType: constants.icon_types.FontAwesome5,
			icon: 'fire',
			color: '#97D4E7',
		},
		{
			name: 'Sleep',
			iconType: constants.icon_types.FontAwesome5,
			icon: 'moon',
			color: '#FFD46A',
		},
	];

	return (
		<Layout>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Icons
					type="MaterialCommunityIcons"
					name="account"
					color={COLORS.blue2}
				/>

				<Text style={[{ ...FONTS.h3 }]}>
					Today, {moment().format('MMM D')}
				</Text>

				<Icons
					type="Ionicons"
					name="notifications-outline"
					color={COLORS.blue2}
				/>
			</View>
			{/* <Calendar
				markedDates={{
					'2021-12-21': {
						selected: true,
						marked: true,
					},
				}}
			/> */}

			{/* Days */}
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					{days.map((day, index) => {
						const active = day.dayInNum === moment().format('D');
						return (
							<DaysView
								key={index}
								dayInNum={day.dayInNum}
								dayShortFrom={day.dayShortForm}
								active={active}
							/>
						);
					})}
				</ScrollView>
			</View>

			{/* Progress */}
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					marginVertical: 10,
				}}
			>
				<View>
					{workouts.map((item, index) => (
						<WorkoutItem
							key={index}
							name={item.name}
							iconType={item.iconType}
							icon={item.icon}
							color={item.color}
						/>
					))}
				</View>
				<View>
					<ProgressChart
						data={data}
						width={SIZES.width - 70}
						height={220}
						strokeWidth={16}
						radius={32}
						chartConfig={{
							backgroundColor: COLORS.white,
							backgroundGradientFrom: COLORS.white,
							backgroundGradientTo: COLORS.white,
							//decimalPlaces: 2,
							color: (opacity = 1) =>
								`rgba(255, 0, 0, ${opacity})`,
						}}
						style={{
							borderRadius: 15,
							marginRight: 20,
						}}
						hideLegend={true}
					/>
				</View>
			</View>

			{/* List activities */}

			<TouchableOpacity style={styles.floatingButton}>
				<MaterialCommunityIcons
					name="plus"
					size={28}
					color={COLORS.white}
				/>
			</TouchableOpacity>
		</Layout>
	);
};

interface IWorkout {
	name: string;
	iconType: any;
	icon: any;
	color: string;
}

const WorkoutItem = ({ name, iconType, icon, color }: IWorkout) => (
	<View
		style={{
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'row',
			marginVertical: 10,
		}}
	>
		<View style={{ alignItems: 'center', justifyContent: 'center' }}>
			<Icons type={iconType} name={icon} size={30} color={color} />
		</View>
		<Text style={[{ ...FONTS.body1, marginLeft: 10 }, { fontSize: 15 }]}>
			{name}
		</Text>
	</View>
);

interface IDayView {
	dayInNum: string;
	dayShortFrom: string;
	active?: boolean;
}

const DaysView = ({ dayInNum, dayShortFrom, active }: IDayView) => {
	return (
		<TouchableOpacity
			style={{
				margin: 10,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{active ? (
				<View
					style={{
						backgroundColor: COLORS.blue2,
						borderRadius: 28,
						padding: 10,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text
						style={[
							{ ...FONTS.body2 },
							{
								fontSize: 14,
								color: COLORS.white,
								marginTop: 5,
								marginBottom: 3,
							},
						]}
					>
						{dayShortFrom}
					</Text>
					<View
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: COLORS.white,
							height: 28,
							width: 28,
							borderRadius: 28 / 2,
						}}
					>
						<Text style={[{ ...FONTS.h4 }, { color: COLORS.blue }]}>
							{dayInNum}
						</Text>
					</View>
				</View>
			) : (
				<View
					style={{ justifyContent: 'center', alignItems: 'center' }}
				>
					<Text
						style={[
							{ ...FONTS.body2 },
							{
								fontSize: 14,
								color: COLORS.gray,
								marginTop: 5,
								marginBottom: 3,
							},
						]}
					>
						{dayShortFrom}
					</Text>
					<Text style={[{ ...FONTS.h4 }]}>{dayInNum}</Text>
				</View>
			)}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
	},
	floatingButton: {
		backgroundColor: COLORS.red,
		width: 55,
		height: 55,
		position: 'absolute',
		right: 10,
		bottom: 10,
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Workout;
