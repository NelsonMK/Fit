import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icons from '../../components/Icons';
import { COLORS, constants, FONTS } from '../../constants';
import ChartHome from './components/Chart.home';
import StatCardHome from './components/StatCard.home';
import TitleHome from './components/Title.home';
import { getColors } from 'theme-colors';
import { HomeStyles } from './Home.styles';

const Home = () => {
	// const theme = getColors('#2193b0');
	// console.log(theme);

	return (
		<View style={HomeStyles.container}>
			<View style={HomeStyles.infoContainer}>
				<View>
					<Text style={HomeStyles.welcomeText}>Welcome</Text>
					<Text style={HomeStyles.name}>Nelson Muriithi</Text>
				</View>
				<View style={HomeStyles.iconContainer}>
					<Icons type="Feather" name="bell" />
				</View>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<LinearGradient
					colors={['#2193b0', '#6dd5ed', '#48b1bf']}
					start={{ x: 0.7, y: 0 }}
					style={HomeStyles.alertContainer}
				>
					{/* Reminder and Progress */}
					<View
						style={{
							justifyContent: 'flex-end',
							margin: 10,
							right: 5,
							position: 'absolute',
						}}
					>
						<Icons
							type="AntDesign"
							name="close"
							color={COLORS.white}
						/>
					</View>
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Text
							style={[
								{ ...FONTS.body2 },
								{ color: COLORS.white },
							]}
						>
							You have 3 daily tasks to complete today
						</Text>
					</View>
				</LinearGradient>
				<View style={{ flex: 1 }}>
					<TitleHome
						title="Daily Tasks"
						iconType={constants.icon_types.Ionicons}
						icon="add"
					/>
					<View>
						<ScrollView
							horizontal={true}
							showsHorizontalScrollIndicator={false}
							style={{ marginTop: 10 }}
						>
							<StatCardHome
								iconType={constants.icon_types.Foundation}
								icon="foot"
								stat={20}
								task="Steps"
								containerColor="#FFEDE5"
								iconContainerColor="#F8753D"
							/>

							<StatCardHome
								iconType={constants.icon_types.FontAwesome5}
								icon="fire"
								stat={120}
								task="Calories"
								containerColor="#EBF7FA"
								iconContainerColor="#97D4E7"
							/>

							<StatCardHome
								iconType={constants.icon_types.Ionicons}
								icon="moon-outline"
								stat={100}
								task="Sleep"
								containerColor="#FFF6E0"
								iconContainerColor="#FFD46A"
							/>
						</ScrollView>
					</View>
				</View>

				<View style={{ flex: 1 }}>
					<TitleHome
						title="My Activity"
						iconType={constants.icon_types.AntDesign}
						icon="down"
						iconName="Last Week"
						iconSize={18}
					/>
					<ChartHome />
				</View>
			</ScrollView>
		</View>
	);
};

export default Home;
