import {
    ApiColumnKeyDisplayType,
    ApiDataType,
    ItemModel,
    PleasanterApiClient,
    View,
} from "@/app/lib/pleasanterClient";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    console.log("server start");
    //const { title, classA, classB } = await request.json();
    //console.log("server classA/ClassB" + classA + "/" + classB);

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

    try {
        console.log("getPleasanterRecords start");
        let view = new View({});
        let gridColumnHash = columns;
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
            id: siteId,
            view: view,
            url: process.env.NEXT_PUBLIC_PLEASANTER_URL!,
        });
        //return res;

        return NextResponse.json({ data: res }, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(`Webhook Error: ${err.message}`, {
            status: 401,
        });
    }

    // try {
    //     let item = new ItemModel({});
    //     item.Title = title;
    //     item.Body = "テストあ";
    //     item.setClassHash({ key: "ClassA", value: classA });
    //     item.setClassHash({ key: "ClassB", value: classB });
    //     item.Status = 200;
    //     item.Owner = 1;
    //     const siteId = 11114883;

    //     item.ApiKey = process.env.NEXT_PUBLIC_PLEASANTER_APY_KEY;
    //     item.ApiVersion = 1.1;
    //     let res = await PleasanterApiClient.apiCreate({
    //         id: siteId,
    //         item: item,
    //         url: process.env.NEXT_PUBLIC_PLEASANTER_URL!,
    //     });
    //     //return res;
    //     return NextResponse.json({
    //         message: "登録完了",
    //     });
    // } catch (err) {
    //     console.log(err);
    //     return NextResponse.json({
    //         message: "登録失敗",
    //     });
    // }
}
