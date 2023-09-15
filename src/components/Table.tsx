import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["No", "Time", "Lat", "Lng"];


interface DataElement {
    Time: string;
    Lat: number;
    Lng: number;
}

interface props {
    data: DataElement[];
}

export default function Table(properties: props) {
    return (
        <Card className={`h-[22rem] w-full overflow-scroll mt-72`}>
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {properties.data.map(({ Time, Lat, Lng }, index) => {
                        const formattedTime = new Date(Time).toLocaleString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short",
                        });

                        return (
                            <tr key={index + 1} className="even:bg-blue-gray-50/50">
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {index + 1}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {formattedTime}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {Lat}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {Lng}
                                    </Typography>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
}