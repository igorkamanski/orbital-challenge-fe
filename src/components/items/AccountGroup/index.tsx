import React, {useMemo, useState} from "react";

import { IAccount } from "../../../types/account";

import { AccountItem } from "../AccountItem";
import { Button } from "../../common";
import { ShowMoreIcon } from "../../common/icons";

import './style.css';

type AccountGroupProps = {
  name: string,
  accounts: IAccount[]
}

export const AccountGroup: React.FC<AccountGroupProps> = (
  {
    name,
    accounts,
  }) => {

  const [visibleCount, setVisibleCount] = useState(4);

  const showMoreAccount = () => {
    if (visibleCount < accounts.length && (accounts.length - visibleCount >=8 )) setVisibleCount(prevState => prevState + 8);
    else setVisibleCount(accounts.length);
  }

  const visibleAccounts = useMemo(() => {
    return accounts.slice(0, visibleCount);
  }, [visibleCount, accounts]);

  return (
    <div className='account-group'>
      <div className='account-group-name'>
        <span>{name} Accounts</span>
      </div>
      <div className='account-group-content'>
        {
          visibleAccounts.map((item, index) => (
            <AccountItem
              key={index}
              value={item}
            />
          ))
        }
      </div>
      <div className='account-group-action'>
        <Button
          icon={<ShowMoreIcon />}
          iconPosition='end'
          onClick={showMoreAccount}
        >
          See more
        </Button>
      </div>
    </div>
  )
}