export interface IServerData {
    amount: string;
    asset_description: string;
    cap_gains_over_200_usd: boolean;
    disclosure_date: string;
    disclosure_year: number;
    district: string;
    owner: string;
    ptr_link: string;
    representative: string;
    ticker: string;
    transaction_date: string;
    type: string;
  }

export interface IReduxState {
    dataTable: IServerData[];
    dataTableSearch: string;
    activeSort: any ;
  }
