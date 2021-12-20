import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const Chart = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', marginTop: 5 }}>
			<LineChart
				bezier={true}
				data={{
					labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
					datasets: [
						{
							data: [
								Math.random() * 100,
								Math.random() * 100,
								Math.random() * 100,
								Math.random() * 100,
								Math.random() * 100,
								Math.random() * 100,
							],
						},
					],
				}}
				width={Dimensions.get('screen').width - 10} // from react-native
				height={220}
				// yAxisLabel="$"
				// yAxisSuffix="k"
				yAxisInterval={1} // optional, defaults to 1
				chartConfig={{
					backgroundColor: '#FFFFFF',
					backgroundGradientFrom: '#FFFFFF',
					backgroundGradientTo: '#FFFFFF',
					decimalPlaces: 0, // optional, defaults to 2dp
					color: (opacity = 1) => `#1FBBBA`,
					labelColor: (opacity = 1) => `#000`,
					style: {
						borderRadius: 16,
					},
					propsForDots: {
						r: '4',
						strokeWidth: '2',
						stroke: '#97D4E7',
						fill: '#FFFFFF', //97D4E7
					},
					propsForBackgroundLines: {
						strokeWidth: 1,
						stroke: '#efefef',
						strokeDasharray: '0',
					},
				}}
				style={{
					marginVertical: 8,
					borderRadius: 16,
					backgroundColor: '#FFFFFF',
				}}
			/>
		</View>
	);
};

export default React.memo(Chart);
