import { ResponsiveLine } from "@nivo/line";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

let data = [
	{
		id: "japan",
		color: "hsl(333, 70%, 50%)",
		data: [
			{
				x: "plane",
				y: 62,
			},
			{
				x: "helicopter",
				y: 162,
			},
			{
				x: "boat",
				y: 24,
			},
			{
				x: "train",
				y: 183,
			},
			{
				x: "subway",
				y: 130,
			},
			{
				x: "bus",
				y: 46,
			},
			{
				x: "car",
				y: 129,
			},
			{
				x: "moto",
				y: 150,
			},
			{
				x: "bicycle",
				y: 75,
			},
			{
				x: "horse",
				y: 71,
			},
			{
				x: "skateboard",
				y: 287,
			},
			{
				x: "others",
				y: 291,
			},
		],
	},
	{
		id: "france",
		color: "hsl(242, 70%, 50%)",
		data: [
			{
				x: "plane",
				y: 36,
			},
			{
				x: "helicopter",
				y: 15,
			},
			{
				x: "boat",
				y: 272,
			},
			{
				x: "train",
				y: 214,
			},
			{
				x: "subway",
				y: 156,
			},
			{
				x: "bus",
				y: 266,
			},
			{
				x: "car",
				y: 82,
			},
			{
				x: "moto",
				y: 9,
			},
			{
				x: "bicycle",
				y: 63,
			},
			{
				x: "horse",
				y: 114,
			},
			{
				x: "skateboard",
				y: 89,
			},
			{
				x: "others",
				y: 102,
			},
		],
	},
	{
		id: "us",
		color: "hsl(138, 70%, 50%)",
		data: [
			{
				x: "plane",
				y: 66,
			},
			{
				x: "helicopter",
				y: 55,
			},
			{
				x: "boat",
				y: 226,
			},
			{
				x: "train",
				y: 19,
			},
			{
				x: "subway",
				y: 180,
			},
			{
				x: "bus",
				y: 177,
			},
			{
				x: "car",
				y: 178,
			},
			{
				x: "moto",
				y: 11,
			},
			{
				x: "bicycle",
				y: 273,
			},
			{
				x: "horse",
				y: 248,
			},
			{
				x: "skateboard",
				y: 204,
			},
			{
				x: "others",
				y: 9,
			},
		],
	},
	{
		id: "germany",
		color: "hsl(86, 70%, 50%)",
		data: [
			{
				x: "plane",
				y: 110,
			},
			{
				x: "helicopter",
				y: 132,
			},
			{
				x: "boat",
				y: 71,
			},
			{
				x: "train",
				y: 23,
			},
			{
				x: "subway",
				y: 90,
			},
			{
				x: "bus",
				y: 53,
			},
			{
				x: "car",
				y: 20,
			},
			{
				x: "moto",
				y: 9,
			},
			{
				x: "bicycle",
				y: 4,
			},
			{
				x: "horse",
				y: 281,
			},
			{
				x: "skateboard",
				y: 130,
			},
			{
				x: "others",
				y: 114,
			},
		],
	},
	{
		id: "norway",
		color: "hsl(196, 70%, 50%)",
		data: [
			{
				x: "plane",
				y: 47,
			},
			{
				x: "helicopter",
				y: 171,
			},
			{
				x: "boat",
				y: 143,
			},
			{
				x: "train",
				y: 111,
			},
			{
				x: "subway",
				y: 243,
			},
			{
				x: "bus",
				y: 77,
			},
			{
				x: "car",
				y: 134,
			},
			{
				x: "moto",
				y: 109,
			},
			{
				x: "bicycle",
				y: 282,
			},
			{
				x: "horse",
				y: 181,
			},
			{
				x: "skateboard",
				y: 181,
			},
			{
				x: "others",
				y: 48,
			},
		],
	},
];

export const MyResponsiveLine = ({ data }) => (
	<ResponsiveLine
		data={data}
		margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
		xScale={{ type: "point" }}
		yScale={{
			type: "linear",
			min: "auto",
			max: "auto",
			stacked: true,
			reverse: false,
		}}
		yFormat=" >-.2f"
		axisTop={null}
		axisRight={null}
		axisBottom={{
			orient: "bottom",
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: "transportation",
			legendOffset: 36,
			legendPosition: "middle",
		}}
		axisLeft={{
			orient: "left",
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: "count",
			legendOffset: -40,
			legendPosition: "middle",
		}}
		pointSize={10}
		pointColor={{ theme: "background" }}
		pointBorderWidth={2}
		pointBorderColor={{ from: "serieColor" }}
		pointLabelYOffset={-12}
		useMesh={true}
		legends={[
			{
				anchor: "bottom-right",
				direction: "column",
				justify: false,
				translateX: 100,
				translateY: 0,
				itemsSpacing: 0,
				itemDirection: "left-to-right",
				itemWidth: 80,
				itemHeight: 20,
				itemOpacity: 0.75,
				symbolSize: 12,
				symbolShape: "circle",
				symbolBorderColor: "rgba(0, 0, 0, .5)",
				effects: [
					{
						on: "hover",
						style: {
							itemBackground: "rgba(0, 0, 0, .03)",
							itemOpacity: 1,
						},
					},
				],
			},
		]}
	/>
);

export default MyResponsiveLine;
