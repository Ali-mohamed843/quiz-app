import Chart from "react-apexcharts";


const DonutChart = ({ darkMode }) => {

    const options = {
    series: [44, 55, 41],
    options: {
        chart: {
        type: "donut",
        height: 350,
        },
        labels: ["Desktop", "Tablet", "Mobile"],
        colors: ["#FF5733", "#33FF57", "#3357FF"],
        legend: {
        position: "bottom",
        labels: {
            colors: darkMode ? "#dddddd" : "#000000",
        },
        },
        dataLabels: {
        style: {
            colors: ["#dddddd"],
        },
        },
        responsive: [
        {
            breakpoint: 480,
            options: {
            chart: {
                width: 200,
            },
            legend: {
                position: "bottom",
            },
            },
        },
        ],
    },
    };

    
    const chartConfig = {
    series: [
        {
        name: "Sales",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
        },
    ],
    options: {
        chart: {
        type: "bar",
        height: 240,
        toolbar: {
            show: false,
        },
        },
        title: {
        show: false,
        },
        dataLabels: {
        enabled: false,
        },
        colors: ["#020617"],
        plotOptions: {
        bar: {
            columnWidth: "40%",
            borderRadius: 2,
        },
        },
        xaxis: {
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        labels: {
            style: {
            colors: darkMode ? "#dddddd" : "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
            },
        },
        categories: [
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        },
        yaxis: {
        labels: {
            style: {
            colors: darkMode ? "#dddddd" : "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
            },
        },
        },
        grid: {
        show: true,
        borderColor: "#a0a0a0",
        strokeDashArray: 5,
        xaxis: {
            lines: {
            show: true,
            },
        },
        padding: {
            top: 5,
            right: 20,
        },
        },
        fill: {
        opacity: 0.8,
        },
        tooltip: {
        theme: "dark",
        },
    },
    };
    return(
        <div className="py-6 bg-white rounded-lg p-5 flex
        dark:bg-gray-600 items-center justify-center">
            <Chart options={options.options} series={options.series} type="donut" height={350} />
        </div>
    );
};


export default DonutChart;