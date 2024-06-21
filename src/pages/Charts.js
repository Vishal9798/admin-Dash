import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'January', caloriesBurned: 4000, workoutTime: 30, weightLoss: 2, workoutsCompleted: 20 },
    { name: 'February', caloriesBurned: 3000, workoutTime: 24, weightLoss: 1.5, workoutsCompleted: 18 },
    { name: 'March', caloriesBurned: 1000, workoutTime: 9, weightLoss: 1, workoutsCompleted: 22 },
    { name: 'April', caloriesBurned: 6000, workoutTime: 60, weightLoss: 1.2, workoutsCompleted: 21 },
    { name: 'May', caloriesBurned: 4400, workoutTime: 34, weightLoss: 1.8, workoutsCompleted: 19 },
    { name: 'June', caloriesBurned: 4200, workoutTime: 32, weightLoss: 1.3, workoutsCompleted: 20 },
 
  ];
  
  
  

const Charts = () => (
  <LineChart width={600} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="caloriesBurned" stroke="#8884d8" />
    <Line type="monotone" dataKey="workoutTime" stroke="#82ca9d" />
  </LineChart>
);

export default Charts;
