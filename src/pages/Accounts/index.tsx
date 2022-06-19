import React, { useEffect, useMemo } from 'react';

import { Button } from '../../components/common';
import { AddIcon } from '../../components/common/icons';
import { AccountGroup } from "../../components/items/AccountGroup";

import {
  useAppSelector,
  useAppDispatch
} from '../../store/hooks/redux';

import {IAccount} from "../../types/account";
import { getAllAction } from '../../store/actions/account';
import { getAccounts } from '../../types/redux/selectors';

import './style.css';

const Accounts = () => {
  const accounts = useAppSelector<IAccount[]>(getAccounts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllAction());
  }, [dispatch]);

  const formattedAccounts = useMemo(() => {
    const result: {[key: string]: IAccount[]} = {};

    accounts.forEach(account => {
      const { accountType } = account;

      if (result[accountType]) {
        result[accountType].push(account);
      } else {
        result[accountType] = [account];
      }
    });

    return result;
  }, [accounts]);

  return (
    <div className='account-page'>
      <div className='account-page-header'>
        <span className='page--title'>Accounts</span>
        <div className='account-page-header-actions'>
          <Button
            variant='filled'
            color='red'
            rounded='full'
            icon={<AddIcon />}
          >
            New Account
          </Button>
          <Button
            variant='outlined'
            rounded='full'
            icon={<AddIcon />}
          >
            New Transaction
          </Button>
        </div>
      </div>
      {
        Object.keys(formattedAccounts).map(groupName => (
          <AccountGroup
            key={groupName}
            name={groupName}
            accounts={formattedAccounts[groupName]}
          />
        ))
      }
    </div>
  )
}

export default Accounts;