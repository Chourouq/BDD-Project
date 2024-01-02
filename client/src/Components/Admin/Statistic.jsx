import React from 'react';
import {Cell, Label, Legend, Pie, PieChart, Tooltip} from 'recharts';
import {useTranslation} from "react-i18next";

// eslint-disable-next-line react/prop-types
function Statistic({total ,active ,notActive}) {
    const { t } = useTranslation();
    const data = [
        {name: t('Active'), value: active},
        {name: t('Not Active'), value: notActive},
    ];

    const colors = ['#f6993f', '#6B46C1'];
    // eslint-disable-next-line react/prop-types
    const CustomTooltip = ({active, payload}) => {
        // eslint-disable-next-line react/prop-types
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip text-[10px] bg-orange-500 rounded-[10px] p-2 font-medium">
                    {/* eslint-disable-next-line react/prop-types */}
                    <p>{payload[0].payload.name}</p>
                    {/* eslint-disable-next-line react/prop-types */}
                    <p>{payload[0].payload.value}</p>
                </div>
            );
        }
        return null;
    };
    return (
        <section>
            <div className="px-2 py-[13px] font-medium">{t("Spots")}</div>
            <div className="flex justify-center flex-col items-center text-xs border-2 border-violet-600 rounded-xl py-2">
                <PieChart width={230} height={230}>
                    <Pie
                        data={data}
                        dataKey="value"
                        innerRadius={45}
                        paddingAngle={5}
                        labelLine={false}
                        label={null}
                        cornerRadius={6}
                    >
                        {data.map((entry, index) => (
                            <Cell key={index} fill={colors[index % colors.length]}/>
                        ))}
                        <Label
                            value={`${total} ${t("Spots")}`}
                            position="center"
                            fill='red'
                        />
                    </Pie>
                    <Tooltip content={<CustomTooltip/>}/>
                    <Legend/>
                </PieChart>
            </div>
        </section>
    );
}

export default Statistic;
