import React from 'react';
// import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { RiArrowDropDownLine } from 'react-icons/ri';
const data = [
    {
        name: 'Week 1',
        Guest: 278,
        User: 398,
    },
    {
        name: 'Week 2',
        Guest: 390,
        User: 250,
    },
    {
        name: 'Week 3',
        Guest: 470,
        User: 290,
    },
    {
        name: 'Week 4',
        Guest: 360,
        User: 400,
    },
    {
        name: 'Week 5',
        Guest: 440,
        User: 180,
    },
];

export default function LineCharts() {
    return (
        <div
            className=" bg-white  mr-9 ml-7 rounded-lg border border-gray-200 shadow-sm focus:outline-none active:bg-sky-200 flex 
        flex-row flex-1 text-2xl font-semibold p-4"
        >
            <strong className=" flex flex-row ">
                <div className="font-medium text-gray-700 ">Activities</div>
            </strong>
            <div className="w-full flex-1 p-18 text-sm">
                <div className="text-gray-400 text-1xl flex flex-row justify-end">
                    May-June 2021
                    <RiArrowDropDownLine className="h-5 w-5 items-center mt-1 " />
                </div>
                <div className="w-full mt-1 ml-16 mr-1 flex flex-row items-center">
                    <ResponsiveContainer width="50%" height={300}>
                        <LineChart width={900} height={200} data={data} margin={{ right: 20, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />

                            <Line type="monotone" dataKey="Guest" stroke="#8884d8" />
                            <Line type="monotone" dataKey="User" stroke="#82ca9d" />

                            <Legend />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
