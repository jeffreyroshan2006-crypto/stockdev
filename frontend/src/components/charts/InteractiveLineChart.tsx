"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useTheme } from "next-themes";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 550 },
  { name: "Apr", value: 450 },
  { name: "May", value: 700 },
  { name: "Jun", value: 650 },
  { name: "Jul", value: 850 },
];

export function InteractiveLineChart() {
  const { theme } = useTheme();
  
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
        <XAxis 
          dataKey="name" 
          stroke="#888888" 
          fontSize={12} 
          tickLine={false} 
          axisLine={false} 
        />
        <YAxis 
          stroke="#888888" 
          fontSize={12} 
          tickLine={false} 
          axisLine={false} 
          tickFormatter={(value) => `$${value}`} 
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
          }}
          itemStyle={{ color: theme === 'dark' ? '#fff' : '#000' }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#3b82f6"
          strokeWidth={3}
          dot={{ r: 4, strokeWidth: 2 }}
          activeDot={{ r: 6, strokeWidth: 0 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
