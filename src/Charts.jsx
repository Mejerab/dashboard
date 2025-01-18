import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
    { name: "Group A", value: 560 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 350 },
    { name: "Group D", value: 80 }
];
const COLORS = ["#ff5b2a", "#12bbd9", "#fcae0b", "#00ad72"];

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

const datas = [
    { name: "1", Ameica: 0, Asia: 0 },
    { name: "2", Ameica: 20, Asia: 10 },
    { name: "3", Ameica: 15, Asia: 25 },
    { name: "4", Ameica: 30, Asia: 20 },
    { name: "5", Ameica: 50, Asia: 35 },
    { name: "6", Ameica: 80, Asia: 60 },
    { name: "7", Ameica: 110, Asia: 90 },
    { name: "8", Ameica: 100, Asia: 100 },
    { name: "9", Ameica: 90, Asia: 150 },
    { name: "10", Ameica: 70, Asia: 60 },
    { name: "11", Ameica: 90, Asia: 100 },
    { name: "12", Ameica: 130, Asia: 100 },
];
const Charts = () => {
    return (
        <div className="grid grid-cols-3 gap-5 pb-5">
            <div className="relative border border-[#2727271A] p-5 rounded-xl w-full shadow-sm">
                <h5 className="font font-bold text-lg">Current Download</h5>
                <PieChart width={350} height={320} className="-rotate-90">
                    <Pie
                        data={data}
                        cx={170}
                        cy={160}
                        innerRadius={112}
                        outerRadius={120}
                        fill="#8884d8"
                        paddingAngle={1}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
                <div className="absolute bottom-[10.5rem] text-center left-[9.6rem]">
                    <p className="text-[#646464] font-semibold text-[14px]">Total</p>
                    <h4 className="text-2xl font-bold">188,245</h4>
                </div>
            </div>
            <div className="col-span-2 border border-[#2727271A] p-5 pb-2 rounded-xl w-full shadow-sm">
                <div className="flex justify-between items-center">
                    <div>
                        <h5 className="font font-bold text-lg">Area Installed</h5>
                        <p className="text-[#646464cc] text-[14px] font-medium pt-1">(+43%) than last year</p>
                    </div>
                    <select className="bg-[#2727271A] h-[2rem] px-2 checked:border-0 font-semibold text-[#646464]  focus:outline-none rounded-xl ">
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                    </select>
                </div>
                <div className="flex justify-end gap-x-6 mt-5">
                    <div className="flex items-center gap-x-2 font-semibold text-[#646464] text-sm">
                        <div className="w-[10px] h-[10px] bg-[#00b072] rounded-full"></div>Asia
                    </div>
                    <div className="flex items-center gap-x-2 font-semibold text-[#646464] text-sm">
                        <div className="w-[10px] h-[10px] bg-[#ffa601] rounded-full"></div>America
                    </div>
                </div>
                <div className="w-full h-[255px]">
                    <ResponsiveContainer className=''>
                        <LineChart className="mt-3 text-[#646464cc]" height={300} data={datas}>
                            <CartesianGrid strokeDasharray="5 5" stroke="#fff" />
                            <XAxis dataKey="name" />
                            <YAxis axisLine={false} ticks={[0, 30, 60, 90, 120, 150]} dataKey="Asia" />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="Asia"
                                stroke="#00b072"
                                dot={false}
                                strokeWidth={2}
                            />
                            <Line type="monotone" dataKey="Ameica" stroke="#ffa601" dot={false} strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div >
    );
};

export default Charts;