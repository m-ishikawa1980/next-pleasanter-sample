import {
    ApiColumnKeyDisplayType,
    ApiDataType,
    PleasanterApiClient,
    View,
} from "./lib/pleasanterclient";
import Pleasanter from "./components/Pleasanter";

const columns = ["IssueId", "Title", "Body", "Owner", "Status"];

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
            id: 11114883,
            view: view,
            url: process.env.NEXT_PUBLIC_PLEASANTER_URL!,
        });
        return res;
    } catch (err) {
        console.log(err);
    }
};

export default async function Home() {
    // let [rowItems, setRowItems] = useState<any[]>([]);
    // useEffect(() => {
    //     const getPlPosts = async () => {
    //         let resJson = await getPleasanterRecords();
    //         setRowItems(resJson.Response.Data);
    //     };
    //     getPlPosts();
    // }, [columns]);

    let resJson = await getPleasanterRecords();
    let rowItems: any[];
    rowItems = resJson.Response.Data;

    return (
        <>
            <div className=" py-8 px-8">
                <h1 className=" text-6xl">Home</h1>
                <div className=" flex">
                    {rowItems.map((rowItem) => (
                        <div key={rowItem.IssueId}>
                            <Pleasanter rowItem={rowItem} columns={columns} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
