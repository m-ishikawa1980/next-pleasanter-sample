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

const columns = ["IssueId", "Title", "Body", "Owner", "Status"];
const siteId = 11114883;

const getPleasanterRecords = async () => {
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
        return res;
    } catch (err) {
        console.log(err);
    }
};

async function Home() {
    let res = await getPleasanterRecords();
    let rowItems: any[];
    rowItems = res.Response.Data;

    return (
        <>
            <div className=" py-8 px-8">
                <div className=" mx-5 flex justify-between items-center">
                    <h1 className=" text-6xl">Home</h1>
                    <div className=" mr-11">
                        {/* <Button>Button</Button> */}

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">Edit Profile</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Edit profile</DialogTitle>
                                    <DialogDescription>
                                        Make changes to your profile here. Click
                                        save when you're done.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label
                                            htmlFor="name"
                                            className="text-right"
                                        >
                                            Name
                                        </Label>
                                        <Input
                                            id="name"
                                            defaultValue="Pedro Duarte"
                                            className="col-span-3"
                                        />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label
                                            htmlFor="username"
                                            className="text-right"
                                        >
                                            Username
                                        </Label>
                                        <Input
                                            id="username"
                                            defaultValue="@peduarte"
                                            className="col-span-3"
                                        />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button type="submit">Save changes</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
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
