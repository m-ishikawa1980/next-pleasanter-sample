import React from "react";

const Pleasanter = (props: any) => {
    //console.log("Pleasanter");
    return (
        <>
            <div className="">
                <div className=" m-3 bg-orange-300 w-56">
                    <p className=" text-cyan-600">
                        Pleasanter {props.recordid}
                    </p>
                    <p className=" text-3xl text-cyan-600">{props.title}</p>
                </div>
            </div>
        </>
    );
};

export default Pleasanter;
