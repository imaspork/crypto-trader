<ResponsiveContainer width="100%" height={400}>
	<AreaChart data={data}>
		<defs>
			<linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
				<stop
					offset="0%"
					stopColor="rgb(152, 191, 100)"
					stopOpacity={0.8}
				></stop>
				<stop
					offset="75%"
					stopColor="rgb(152, 191, 100)"
					stopOpacity={0.2}
				></stop>
			</linearGradient>
		</defs>
		<Area dataKey="price" stroke="green" fill="url(#color)" />
		<XAxis dataKey="date" />
		<YAxis
			dataKey="price"
			axisLine={false}
			tickCount="5"
			tickFormatter={(number) => `$${number.toLocaleString()}`}
		/>
		<Tooltip content={<CustomTooltip />} />
		<CartesianGrid vertical={false} opacity={0.3} />
	</AreaChart>
</ResponsiveContainer>;
