import { useEffect, useState } from "react";
import Header from "../components/Header";
import Map from "../components/Map";
import Table from "../components/Table";

interface DataElement {
    Time: string;
    Lat: number;
    Lng: number;
}

interface RequestReturn {
    created_at: string;
    lat: number;
    lng: number;
}

const CarbonMonoxide = () => {
    const [toggleView, setToggleView] = useState("map");
    const [carbonMonoxide, setCarbonMonoxide] = useState<DataElement[]>([])

    const url: string = "http://localhost:" + (import.meta.env.VITE_BACKEND_PORT as string) +
        (import.meta.env.VITE_AIR_POLUTION_END_POINT as string)

    const FetchCarbonMonoxide = () => {
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "type": "co",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const newData: DataElement[] = data.data.map((element: RequestReturn) => {
                    return {
                        Time: element.created_at,
                        Lat: element.lat,
                        Lng: element.lng,
                    };
                });
                setCarbonMonoxide(newData);
            })
            // .then(() => { console.log("carbon: ", carbonMonoxide); })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        FetchCarbonMonoxide()
    }, [])
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
            {toggleView === "map" && carbonMonoxide.length ? <Map data={carbonMonoxide} /> : null}
            {toggleView === "table" && carbonMonoxide.length ? <Table data={carbonMonoxide} /> : null}
            {carbonMonoxide.length < 1 ? <h1 className="text-3xl font-bold underline">No Data</h1> : null}
        </div>
    )
}

export default CarbonMonoxide;