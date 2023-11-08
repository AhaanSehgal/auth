interface Wallet {
  name: string;
  address: string;
  balanceInUSD: number;
  balanceInTokens: number;
}

interface Transaction {
  timestamp: number;
  chainName: string;
  txnHash: string;
  from: {
    address: string;
    name: string | null;
  };
  to: {
    address: string;
    name: string | null;
  };
  feesInUsd: number;
  viewInExplorer: string;
  success: boolean;
  description: string;
  desc: {
    action?: string;
    assetSymbol?: string;
    assetLogo?: string | null;
    value?: string;
    decimals?: number;
    sentTo?: {
      name: string;
      address: string;
    };
    receivedFrom?: {
      name: string;
      address: string;
    };
  };
}

export interface AssetDetail {
  asset: {
    name: string;
    symbol: string;
    logoUrl: string | null;
    chainName: string;
    chainLogo: string;
    balanceInTokens: number;
    balanceOfTokensInUnits: string;
    decimals: number;
    balanceInUSD: number;
    quoteRate: number;
    tokenAddress: string;
    isNativeToken: boolean;
    isSpam: boolean;
    percentChangeIn24hr: number;
    isFavroutie: boolean;
    wallets: Wallet[];
    history: Transaction[];
  };
}
export interface GetAssetBalanceForATriaName {
  success: boolean
  data?: {
    balanceInTokens: number
    balanceInUSD: number
  }
  message?: string
}

export interface TriaNameResponse {
 success : boolean,
 triaName: string,
}

export interface GetAssetDetailResponse{
 success: boolean,
  data: Asset[]
}

export interface Asset {
  name: string;
  symbol: string;
  assetLogo: string | null;
  chainName: string;
  chainLogo: string;
  rate: number;
  percentChangeIn24hr: number;
  totalBalanceInUSD: number;
  balance: number;
  balanceInUnits: string;
  decimals: number;
  isFavroutie: boolean;
}