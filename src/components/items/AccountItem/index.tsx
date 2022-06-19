import React from "react";

import {
  CurrencyEURIcon,
  CurrencyBTCIcon,
  CurrencyETHIcon,
  CurrencyGBPIcon,
  CurrencyUSDIcon
} from "../../common/icons";

import { IAccount } from "../../../types/account";

import './style.css';

type AccountItemProps = {
  value: IAccount
}

const CurrencyIcons = {
  euro: <CurrencyEURIcon />,
  dollar: <CurrencyUSDIcon />,
  gbp: <CurrencyGBPIcon />,
  eth: <CurrencyETHIcon />,
  btc: <CurrencyBTCIcon />,
}

export const AccountItem: React.FC<AccountItemProps> = (
  {
    value
  }) => {

  return (
    <div className='account-item-card'>
      <div className='account-item__balance'>
        <i className='account-item__balance-currency'>{CurrencyIcons[value.currency]}</i>
        <span className='account-item__balance-value'>{value.balance}</span>
      </div>
      <div className='account-item__name flex items-center'>
        <div className='account-item__name-indicator' />
        <span>{value.accountName}</span>
      </div>
    </div>
  )
}