"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [classA, setClassA] = useState("");
    const [classB, setClassB] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const response = await fetch(
            "http://localhost:3000/api/pleasanter/postarticle",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title,
                    body: body,
                    classA: classA,
                    classB: classB,
                }),
            }
        );
        router.push("/");
    };
    return (
        <div className="my-10">
            <div className="ml-[250px]">
                <form onSubmit={handleSubmit}>
                    <div className=" flex flex-col gap-4 w-[200px] items-center">
                        <div className="flex items-center gap-3">
                            <p>Title</p>
                            <input
                                className="border h-10"
                                type="text"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <p>Body</p>
                            <input
                                className="border h-10"
                                type="text"
                                name="Body"
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <p>ClassA</p>
                            <input
                                className="border h-10"
                                type="text"
                                name="classA"
                                value={classA}
                                onChange={(e) => setClassA(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <p>ClassB</p>
                            <input
                                className="border h-10"
                                type="text"
                                name="classB"
                                onChange={(e) => setClassB(e.target.value)}
                            />
                        </div>
                        <Button
                            className=" w-[150px]"
                            variant="outline"
                            type="submit"
                        >
                            送信
                        </Button>
                    </div>
                </form>
            </div>
            <div className="m-5">
                <Button variant="outline">
                    <Link href="/">戻る</Link>
                </Button>
            </div>
        </div>
    );
};

export default page;
