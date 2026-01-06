"use client";

import React, { useMemo } from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import Card from "@/components/ui/Card";
import { Skill } from "@/lib/types";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

interface SkillsChartProps {
    skills: Skill[];
}

const SkillsChart = ({ skills }: SkillsChartProps) => {
    // Memoize category calculations to prevent re-computing on every render
    const { chartData, labels } = useMemo(() => {
        const categoryMap = new Map<string, { total: number; count: number }>();

        skills.forEach(skill => {
            if (!categoryMap.has(skill.category)) {
                categoryMap.set(skill.category, { total: 0, count: 0 });
            }
            const cat = categoryMap.get(skill.category)!;
            cat.total += skill.level;
            cat.count += 1;
        });

        const categories = Array.from(categoryMap.keys());
        const data = categories.map(cat => {
            const catData = categoryMap.get(cat)!;
            return Math.round(catData.total / catData.count);
        });

        const categoryLabels = categories.map(cat =>
            cat.charAt(0).toUpperCase() + cat.slice(1)
        );

        return { chartData: data, labels: categoryLabels };
    }, [skills]);

    // Memoize chart data object
    const data = useMemo(() => ({
        labels: labels,
        datasets: [
            {
                label: "Skill Level",
                data: chartData,
                backgroundColor: "rgba(0, 240, 255, 0.2)",
                borderColor: "#00f0ff",
                borderWidth: 2,
                pointBackgroundColor: "#0066ff",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "#00f0ff",
            },
        ],
    }), [labels, chartData]);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                angleLines: {
                    color: "rgba(255, 255, 255, 0.1)",
                },
                grid: {
                    color: "rgba(255, 255, 255, 0.1)",
                },
                pointLabels: {
                    color: "#9ca3af",
                    font: {
                        size: 12,
                        family: "'JetBrains Mono', monospace",
                        weight: 'bold' as const,
                    },
                },
                ticks: {
                    display: false,
                    maxTicksLimit: 5,
                },
                suggestedMin: 0,
                suggestedMax: 100,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: "rgba(10, 10, 15, 0.9)",
                titleColor: "#00f0ff",
                bodyColor: "#fff",
                borderColor: "rgba(0, 240, 255, 0.3)",
                borderWidth: 1,
                padding: 10,
                displayColors: false,
            },
        },
    };

    return (
        <Card variant="glass-dark" className="h-full flex flex-col">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="w-2 h-8 bg-cyber-purple mr-3 rounded-full shadow-[0_0_10px_#9d4edd]"></span>
                Competency Radar
            </h3>
            <div className="flex-1 w-full relative">
                <Radar data={data} options={options} />
            </div>
        </Card>
    );
};

export default SkillsChart;
