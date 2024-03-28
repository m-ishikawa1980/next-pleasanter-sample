"use client";
import Image from "next/image";
import {
    ApiColumnKeyDisplayType,
    ApiDataType,
    PleasanterApiClient,
    View,
} from "./lib/pleasanterclient";
import Pleasanter from "./components/Pleasanter";
import { useEffect, useState } from "react";
import Head from "./components/Head";
//import { useState } from "react";

const getPleasanterRecords = async () => {
    try {
        let view = new View({});
        //console.log(view);
        let gridColumnHash = ["IssueId", "Status", "Title"];
        view.setGridColumnsByArray({ value: gridColumnHash });

        let filterStatus = ["200"];
        view.setColumnFilterHash({
            key: "Status",
            value: JSON.stringify(filterStatus),
        });

        view.ApiDataType = ApiDataType.KeyValues;
        view.ApiColumnKeyDisplayType = ApiColumnKeyDisplayType.ColumnName;
        view.ApiKey = process.env.NEXT_PUBLIC_PLEASANTER_APY_KEY;

        view.ApiVersion = 1.1;
        let res = await PleasanterApiClient.apiGet({
            id: 11114883,
            view: view,
            url: "http://localhost/",
        });
        return res;
    } catch (err) {
        console.log(err);
    }
};

export default function Home() {
    // let response = getPleasanterRecords();
    // console.log(response);
    let [rowData, setRowData] = useState<any[]>([]);
    useEffect(() => {
        const getPlPosts = async () => {
            //console.log(rowData);
            let resJson = await getPleasanterRecords();
            //console.log(resJson.Response.Data);
            //let data: any[] = [...resJson.Response.Data];
            setRowData(resJson.Response.Data);
            //setPlPostLists(resJson.Response.Data);
        };
        getPlPosts();
        //console.log(res);
        // let rowData = res.Data
        // setRowData(res.Data)
    }, []);
    console.log("aa");
    console.log(rowData);
    return (
        <>
            <Head />
            <div className=" py-8 px-8">
                <h1 className=" text-6xl">Home</h1>
                <div className=" flex">
                    {rowData.map((x) => (
                        <Pleasanter
                            key={x.IssueId}
                            recordid={x.IssueId}
                            title={x.Title}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
