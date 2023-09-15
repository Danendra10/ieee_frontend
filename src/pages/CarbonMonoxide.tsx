import { useEffect, useState } from "react";
import Header from "../components/Header";
import Map from "../components/Map";
import Table from "../components/Table";

interface TableRow {
    no: number;
    Time: string;
    Lat: number;
    Lng: number;
}

const carbon_monoxide: TableRow[] = [
    {
        no: 1,
        Time: "2023-09-09 12:00:00",
        Lat: -7.277349,
        Lng: 112.796642,
    },
    {
        no: 2,
        Time: "2023-09-09 12:00:00",
        Lat: -7.279266,
        Lng: 112.797847,
    },
    {
        no: 3,
        Time: "2023-09-09 12:00:00",
        Lat: -7.277349,
        Lng: 112.797947,
    },
    {
        no: 4,
        Time: "2023-09-09 12:00:00",
        Lat: -7.277349,
        Lng: 112.796747,
    },
    {
        no: 5,
        Time: "2023-09-09 12:00:00",
        Lat: -7.277349,
        Lng: 112.796647,
    },
];

const CarbonMonoxide = () => {
    const [toggleView, setToggleView] = useState("map");
    // get "PORT" from env
    const url: string = "http://localhost:" + (import.meta.env.VITE_BACKEND_PORT as string) +
        (import.meta.env.VITE_AIR_POLUTION_END_POINT as string)
    console.log(url)
    const FetchCarbonMonoxide = () => {
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        })
            .then(response => response.json()).then(data => {
                console.log(data)
            }).catch(error => {
                console.error(error)
            })
    }

    useEffect(() => {
        FetchCarbonMonoxide()
    })
    return (
        <div className="h-full flex flex-col">
            <Header title="Carbon Monoxide (CO)" />
            <div id="toggle" className="flex gap-x-2 mt-48 absolute z-10 left-[42%]
             border-[#1534E6] border-4 text-white w-fit rounded-full px-1 py-1 bg-white bg-opacity-50">
                <button
                    className={`px-6 py-6 rounded-[76px] font-extrabold text-3xl 
                    ${toggleView === "map" ? "bg-[#1534E6] text-white" : "text-[#1534E6]"} 
                    transition-colors duration-1000`}
                    onClick={setToggleView.bind(this, "map")}
                >
                    MAP
                </button>

                <button
                    className={`px-6 py-6 rounded-[76px] font-extrabold text-3xl 
                    ${toggleView === "table" ? "bg-[#1534E6] text-white" : "text-[#1534E6]"} 
                    transition-colors duration-1000`}
                    onClick={setToggleView.bind(this, "table")}
                >
                    TABLE
                </button>
            </div>
            {toggleView === "map" ? <Map data={carbon_monoxide} /> : null}
            {toggleView === "table" ? <Table table_data={carbon_monoxide} /> : null}
        </div>
    )
}

export default CarbonMonoxide;