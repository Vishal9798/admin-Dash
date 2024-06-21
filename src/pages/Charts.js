import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'January', caloriesBurned: 4000, workoutTime: 30, weightLoss: 2, workoutsCompleted: 20 },
    { name: 'February', caloriesBurned: 4200, workoutTime: 32, weightLoss: 1.5, workoutsCompleted: 18 },
    { name: 'March', caloriesBurned: 4100, workoutTime: 31, weightLoss: 1, workoutsCompleted: 22 },
    { name: 'April', caloriesBurned: 4300, workoutTime: 33, weightLoss: 1.2, workoutsCompleted: 21 },
    { name: 'May', caloriesBurned: 4400, workoutTime: 34, weightLoss: 1.8, workoutsCompleted: 19 },
    { name: 'June', caloriesBurned: 4200, workoutTime: 32, weightLoss: 1.3, workoutsCompleted: 20 },
    { name: 'July', caloriesBurned: 4100, workoutTime: 31, weightLoss: 1.7, workoutsCompleted: 23 },
    { name: 'August', caloriesBurned: 4000, workoutTime: 30, weightLoss: 1.4, workoutsCompleted: 18 },
    { name: 'September', caloriesBurned: 3900, workoutTime: 29, weightLoss: 1.5, workoutsCompleted: 21 },
    { name: 'October', caloriesBurned: 4100, workoutTime: 31, weightLoss: 1.1, workoutsCompleted: 22 },
    { name: 'November', caloriesBurned: 4300, workoutTime: 33, weightLoss: 1.6, workoutsCompleted: 20 },
    { name: 'December', caloriesBurned: 4200, workoutTime: 32, weightLoss: 1.9, workoutsCompleted: 19 },
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
