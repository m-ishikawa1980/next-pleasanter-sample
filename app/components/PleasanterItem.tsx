import React from "react";

type props = {
    rowItem: any;
    columns: string[];
};

const PleasanterItem = ({ rowItem, columns }: props) => {
    return (
        <>
            <div className="">
                <div className=" m-3 p-2 border w-auto">
                    {columns.map((column) => (
                        <p key={column} className=" text-3xl text-cyan-600">
                            {column} = {rowItem[column]}
                        </p>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PleasanterItem;
