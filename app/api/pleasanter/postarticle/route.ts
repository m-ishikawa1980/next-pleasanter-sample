import { ItemModel, PleasanterApiClient } from "@/app/lib/pleasanterClient";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { title, body, classA, classB } = await request.json();

    try {
        const siteId = 11114883;

        let item = new ItemModel({});
        item.Title = title;
        item.Body = body;
        item.setClassHash({ key: "ClassA", value: classA });
        item.setClassHash({ key: "ClassB", value: classB });
        item.Status = 200;
        item.Owner = 1;

        item.ApiKey = process.env.NEXT_PUBLIC_PLEASANTER_APY_KEY;
        item.ApiVersion = 1.1;
        let response = await PleasanterApiClient.apiCreate({
            id: siteId,
            item: item,
            url: process.env.NEXT_PUBLIC_PLEASANTER_URL!,
        });
        return NextResponse.json({ message: "登録完了" }, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(
            { message: err.message },
            {
                status: 401,
            }
        );
    }
}
