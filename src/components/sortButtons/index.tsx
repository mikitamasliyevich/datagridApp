import React, { useCallback } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { sortAsc, sortDec, sortCancel } from '../../features/redux_actions/index';

interface Props {
  column: number,
  active: string,
}

function SortButtons({ column, active }: Props) {
  const dispatch = useAppDispatch();

  const handler = useCallback(
    // eslint-disable-next-line no-shadow
    ({ target }, column, active) => {
      if (target.dataset.sort === active) {
        dispatch(sortCancel(0));
      } else if (target.dataset.sort === 'SORT_ASC') {
        dispatch(sortAsc(column));
      } else if (target.dataset.sort === 'SORT_DES') {
        dispatch(sortDec(column));
      }
    },
    [dispatch],
  );

  const arrowASC = (
    <span
      className={active === 'SORT_ASC' ? 'activeBtn arrowASC' : 'arrowASC'}
      data-sort="SORT_ASC"

    >
      ▲
    </span>
  );
  const arrowDES = (
    <span
      className={active === 'SORT_DES' ? 'activeBtn arrowDES' : 'arrowDES'}
      data-sort="SORT_DES"
    >
      ▼
    </span>
  );

  return (
    <button type="button" className="SortBtn" onClick={(e) => handler(e, column, active)}>
      <span>
        {arrowASC}
        {arrowDES}
      </span>
    </button>
  );
}

export default SortButtons;
