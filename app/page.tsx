import {
    ApiColumnKeyDisplayType,
    ApiDataType,
    PleasanterApiClient,
    View,
} from "./lib/pleasanterClient";
import PleasanterItem from "./components/PleasanterItem";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const columns = [
    "IssueId",
    "Title",
    "Body",
    "Owner",
    "Status",
    "ClassA",
    "ClassB",
];
const siteId = 11114883;

async function Home() {
    // const getPleasanterRecords = async () => {
    //     try {
    //         console.log("getPleasanterRecords start");
    //         let view = new View({});
    //         let gridColumnHash = columns;
    //         view.setGridColumnsByArray({ value: gridColumnHash });

    //         let filterStatus = ["200"];
    //         view.setColumnFilterHash({
    //             key: "Status",
    //             value: JSON.stringify(filterStatus),
    //         });

    //         view.ApiDataType = ApiDataType.KeyValues;
    //         view.ApiColumnKeyDisplayType = ApiColumnKeyDisplayType.ColumnName;
    //         view.ApiKey = process.env.NEXT_PUBLIC_PLEASANTER_APY_KEY;
    //         view.ApiVersion = 1.1;
    //         let res = await PleasanterApiClient.apiGet({
    //             id: siteId,
    //             view: view,
    //             url: process.env.NEXT_PUBLIC_PLEASANTER_URL!,
    //         });
    //         return res;
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    // let res = await getPleasanterRecords();
    // let rowItems: any[];
    // rowItems = res.Response.Data;
    // console.log(rowItems);

    const response = await fetch(
        "http://localhost:3000/api/pleasanter/getposts",
        {
            cache: "no-store",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    //console.log(response);
    const apiResponse = await response.json();
    console.log(apiResponse);
    let rowItems: any[];
    rowItems = apiResponse.data.Response.Data;

    rowItems.map((item) => {
        console.log("rowItems=" + item);
    });

    return (
        <>
            <div className=" py-8 px-8">
                <div className=" mx-5 flex justify-between items-center">
                    <h1 className=" text-6xl">Home</h1>
                    <div className=" mr-11">
                        <Button variant="outline">
                            <Link href={"/post"}>post</Link>
                        </Button>
                    </div>
                </div>
                <div className=" flex">
                    {rowItems.map((rowItem) => (
                        <div key={rowItem.IssueId}>
                            <PleasanterItem
                                rowItem={rowItem}
                                columns={columns}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
