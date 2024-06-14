import {
    ApiColumnKeyDisplayType,
    ApiDataType,
    ItemModel,
    PleasanterApiClient,
    View,
} from "@/app/lib/pleasanterClient";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const siteId = 11114883;
    const columns = [
        "IssueId",
        "Title",
        "Body",
        "Owner",
        "Status",
        "ClassA",
        "ClassB",
    ];

    try {
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

        return NextResponse.json({ data: res }, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(
            { message: err.message },
            {
                status: 401,
            }
        );
    }
}
