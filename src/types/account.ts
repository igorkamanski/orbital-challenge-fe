export type IAccount = {
  currency: 'euro' | 'dollar' | 'gbp' | 'eth' | 'btc',
  balance: string,
  accountName: string,
  accountType: string,
}