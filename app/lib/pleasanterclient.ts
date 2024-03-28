export interface ApiOptions {
    ApiVersion?: number | null;
    ApiKey?: string | null;
}

export class Api implements ApiOptions {
    ApiVersion: number | null = 1.1;
    ApiKey: string | null | undefined;
    constructor(apiOptions: ApiOptions) {
        this.ApiVersion = apiOptions.ApiVersion || null;
        this.ApiKey = apiOptions.ApiKey || null;
    }
}

export enum ApiDataType {
    KeyValues = "KeyValues",
}

export enum ApiColumnKeyDisplayType {
    LabelText = "LabelText",
    ColumnName = "ColumnName",
}

export enum ApiColumnValueDisplayType {
    DisplayValue = "DisplayValue",
    Value = "Value",
    Text = "Text",
}

export interface RequestOpsions extends ApiOptions {
    SiteId?: number | null;
    UpdatedTime?: Date | null;
    IssueId?: Number | null;
    ResutId?: Number | null;
    Ver?: Number | null;
    Title?: string | null;
    Body?: string | null;
    StartTime?: Date | null;
    CompletionTime?: Date | null;
    WorkValue?: Number | null;
    ProgressRate?: Number | null;
    Status?: Number | null;
    Manager?: Number | null;
    Owner?: Number | null;
    Locked?: boolean | null;
    Comments?: string | null;
    Creator?: Number | null;
    Updator?: Number | null;
    CreatedTime?: Date | null;
    ProcessId?: Number | null;
    ClassHash?: Map<string, string> | null;
    DateHash?: Map<string, Date> | null;
    NumHash?: Map<string, Number> | null;
    CheckHash?: Map<string, boolean> | null;
    DescriptionHash?: Map<string, string> | null;
    AttachmentsHash?: Map<string, any> | null;
}

export class ItemModel extends Api implements RequestOpsions {
    SiteId?: number | null;
    UpdatedTime?: Date | null;
    IssueId?: Number | null;
    ResutId?: Number | null;
    Ver?: Number | null;
    Title?: string | null;
    Body?: string | null;
    StartTime?: Date | null;
    CompletionTime?: Date | null;
    WorkValue?: Number | null;
    ProgressRate?: Number | null;
    Status?: Number | null;
    Manager?: Number | null;
    Owner?: Number | null;
    Locked?: boolean | null;
    Comments?: string | null;
    Creator?: Number | null;
    Updator?: Number | null;
    CreatedTime?: Date | null;
    ProcessId?: Number | null;
    ClassHash?: Map<string, string> | null;
    DateHash?: Map<string, Date> | null;
    NumHash?: Map<string, Number> | null;
    CheckHash?: Map<string, boolean> | null;
    DescriptionHash?: Map<string, string> | null;
    AttachmentsHash?: Map<string, any> | null;
    constructor(requestOpsions: RequestOpsions) {
        super({});
        this.SiteId = requestOpsions.SiteId || null;
        this.UpdatedTime = requestOpsions.UpdatedTime || null;
        this.IssueId = requestOpsions.IssueId || null;
        this.ResutId = requestOpsions.ResutId || null;
        this.Ver = requestOpsions.Ver || null;
        this.Title = requestOpsions.Title || null;
        this.Body = requestOpsions.Body || null;
        this.StartTime = requestOpsions.StartTime || null;
        this.CompletionTime = requestOpsions.CompletionTime || null;
        this.WorkValue = requestOpsions.WorkValue || null;
        this.ProgressRate = requestOpsions.ProgressRate || null;
        this.Status = requestOpsions.Status || null;
        this.Manager = requestOpsions.Manager || null;
        this.Owner = requestOpsions.Owner || null;
        this.Locked = requestOpsions.Locked || null;
        this.Comments = requestOpsions.Comments || null;
        this.Creator = requestOpsions.Creator || null;
        this.Updator = requestOpsions.Updator || null;
        this.CreatedTime = requestOpsions.CreatedTime || null;
        this.ProcessId = requestOpsions.ProcessId || null;
        this.ClassHash = requestOpsions.ClassHash || null;
        this.DateHash = requestOpsions.DateHash || null;
        this.NumHash = requestOpsions.NumHash || null;
        this.CheckHash = requestOpsions.CheckHash || null;
        this.DescriptionHash = requestOpsions.DescriptionHash || null;
        this.AttachmentsHash = requestOpsions.AttachmentsHash || null;
    }
}

export interface ViewOptions extends ApiOptions {
    Incomplete?: boolean | null;
    Own?: boolean | null;
    NearCompletionTime?: boolean | null;
    Delay?: boolean | null;
    Overdue?: boolean | null;
    Search?: string | null;
    ColumnFilterHash?: Map<string, string> | null;
    ColumnFilterSearchTypes?: Map<string, string> | null;
    ColumnFilterNegatives?: string[] | null;
    ColumnSorterHash?: Map<string, string> | null;
    ApiDataType?: ApiDataType | null;
    ApiColumnKeyDisplayType?: ApiColumnKeyDisplayType | null;
    ApiColumnValueDisplayType?: ApiColumnValueDisplayType | null;
    ApiColumnHash?: Map<string, object> | null;
    GridColumns?: string[] | null;
    MergeSessionViewFilters?: boolean | null;
    MergeSessionViewSorters?: boolean | null;
}

export class View extends Api implements ViewOptions {
    Incomplete: boolean | null;
    Own: boolean | null;
    NearCompletionTime: boolean | null;
    Delay: boolean | null;
    Overdue: boolean | null;
    Search: string | null;
    ColumnFilterHash: Map<string, string> | null;
    ColumnFilterSearchTypes: Map<string, string> | null;
    ColumnFilterNegatives: string[] | null;
    ColumnSorterHash: Map<string, string> | null;
    ApiDataType: ApiDataType | null;
    ApiColumnKeyDisplayType: ApiColumnKeyDisplayType | null;
    ApiColumnValueDisplayType: ApiColumnValueDisplayType | null;
    ApiColumnHash: Map<string, object> | null;
    GridColumns: string[] | null;
    MergeSessionViewFilters: boolean | null;
    MergeSessionViewSorters: boolean | null;

    constructor(viewOptions: ViewOptions) {
        super({});
        this.Incomplete = viewOptions.Incomplete || null;
        this.Own = viewOptions.Own || null;
        this.NearCompletionTime = viewOptions.NearCompletionTime || null;
        this.Delay = viewOptions.Delay || null;
        this.Overdue = viewOptions.Overdue || null;
        this.Search = viewOptions.Search || null;
        this.ColumnFilterHash = viewOptions.ColumnFilterHash || null;
        this.ColumnFilterSearchTypes =
            viewOptions.ColumnFilterSearchTypes || null;
        this.ColumnFilterNegatives = viewOptions.ColumnFilterNegatives || null;
        this.ColumnSorterHash = viewOptions.ColumnSorterHash || null;
        this.ApiDataType = viewOptions.ApiDataType || null;
        this.ApiColumnKeyDisplayType =
            viewOptions.ApiColumnKeyDisplayType || null;
        this.ApiColumnValueDisplayType =
            viewOptions.ApiColumnValueDisplayType || null;
        this.ApiColumnHash = viewOptions.ApiColumnHash || null;
        this.GridColumns = viewOptions.GridColumns || null;
        this.MergeSessionViewFilters =
            viewOptions.MergeSessionViewFilters || null;
        this.MergeSessionViewSorters =
            viewOptions.MergeSessionViewSorters || null;
    }

    setColumnFilterHash({ key, value }: { key: string; value: string }) {
        if (this.ColumnFilterHash === null) {
            this.ColumnFilterHash = new Map();
        }
        this.ColumnFilterHash.set(key, value);
    }

    setColumnFilterSearchTypes({ key, value }: { key: string; value: string }) {
        if (this.ColumnFilterSearchTypes === null) {
            this.ColumnFilterSearchTypes = new Map();
        }
        this.ColumnFilterSearchTypes.set(key, value);
    }

    setColumnSorterHash({ key, value }: { key: string; value: string }) {
        if (this.ColumnSorterHash === null) {
            this.ColumnSorterHash = new Map();
        }
        this.ColumnSorterHash.set(key, value);
    }

    setColumnFilterNegatives({ value }: { value: string }) {
        if (this.ColumnFilterNegatives === null) {
            this.ColumnFilterNegatives = new Array();
        }
        this.ColumnFilterNegatives.push(value);
    }

    setApiColumnHash({ key, value }: { key: string; value: object }) {
        if (this.ApiColumnHash === null) {
            this.ApiColumnHash = new Map();
        }
        this.ApiColumnHash.set(key, value);
    }

    setGridColumns({ value }: { value: string }) {
        if (this.GridColumns === null) {
            this.GridColumns = new Array();
        }
        this.GridColumns.push(value);
    }

    setGridColumnsByArray({ value }: { value: string[] }) {
        if (this.GridColumns === null) {
            this.GridColumns = new Array();
        }
        this.GridColumns.push(...value);
    }
}

export class PleasanterApiClient {
    static async apiGetByScript({ id, view }: { id: number; view: View }) {
        let res: any;

        /*@ts-ignore*/
        await $p.apiGet({
            id: id,
            data: PleasanterApiClient.setGetRequest({ view: view }),
            done: function (data: any) {
                res = data;
            },
        });
        return res;
    }

    static apiGetByServerScript({ id, view }: { id: number; view: View }) {
        let data = PleasanterApiClient.setGetRequest({ view: view });
        /*@ts-ignore*/
        let res = Array.from(items.Get(id, JSON.stringify(data)));
        return res;
    }

    static async apiGet({
        id,
        view,
        url,
    }: {
        id: number;
        view: View;
        url: string;
    }) {
        let data = PleasanterApiClient.setGetRequest({ view: view });

        let response = await fetch(
            `${url}${url.slice(-1) !== "/" ? "/" : ""}api/items/${id}/get`,
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.json();
    }

    static setGetRequest({ view }: { view: View }) {
        let data: any = {};
        data.ApiKey = view.ApiKey;
        data.ApiVersion = view.ApiVersion;
        data.View = {};
        if (view.Incomplete != null) {
            data.View.Incomplete = view.Incomplete;
        }
        if (view.Own != null) {
            data.View.Own = view.Own;
        }
        if (view.NearCompletionTime != null) {
            data.View.NearCompletionTime = view.NearCompletionTime;
        }
        if (view.Delay != null) {
            data.View.Delay = view.Delay;
        }
        if (view.Overdue != null) {
            data.View.Overdue = view.Overdue;
        }
        if (view.Search != null) {
            data.View.Search = view.Search;
        }
        if (view.ColumnFilterHash != null) {
            let columnFilterHash: any = {};
            view.ColumnFilterHash.forEach((value, key) => {
                columnFilterHash[key] = value;
            });
            data.View.ColumnFilterHash = columnFilterHash;
        }
        if (view.ColumnFilterSearchTypes != null) {
            let columnFilterSearchTypes: any = {};
            view.ColumnFilterSearchTypes.forEach((value, key) => {
                columnFilterSearchTypes[key] = value;
            });
            data.View.ColumnFilterHash = columnFilterSearchTypes;
        }
        if (view.ColumnFilterNegatives != null) {
            data.View.ColumnFilterNegatives = view.ColumnFilterNegatives;
        }
        if (view.ColumnSorterHash != null) {
            let columnSorterHash: any = {};
            view.ColumnSorterHash.forEach((value, key) => {
                columnSorterHash[key] = value;
            });
            data.View.ColumnSorterHash = columnSorterHash;
        }
        if (view.ApiDataType != null) {
            data.View.ApiDataType = view.ApiDataType;
        }
        if (view.ApiColumnKeyDisplayType != null) {
            data.View.ApiColumnKeyDisplayType = view.ApiColumnKeyDisplayType;
        }
        if (view.ApiColumnValueDisplayType != null) {
            data.View.ApiColumnValueDisplayType =
                view.ApiColumnValueDisplayType;
        }
        if (view.ApiColumnHash != null) {
            data.View.ApiColumnHash = view.ApiColumnHash;
        }
        if (view.GridColumns != null) {
            data.View.GridColumns = view.GridColumns;
        }
        if (view.MergeSessionViewFilters != null) {
            data.View.MergeSessionViewFilters = view.MergeSessionViewFilters;
        }
        if (view.MergeSessionViewSorters != null) {
            data.View.MergeSessionViewSorters = view.MergeSessionViewSorters;
        }
        return data;
    }
}
