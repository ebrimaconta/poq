import React, { Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { ICheckbox } from '../../interface/interface';
interface IRemoveItems {
  checkbox: ICheckbox[];
  setCheckBox: Dispatch<SetStateAction<ICheckbox[]>>;
}
function RemoveItems({checkbox,setCheckBox}: IRemoveItems) {
  const dispatch = useDispatch();
  return (
    <div className=''>
      <button
        onClick={() => {
          dispatch({ type: 'DELETE_IDS', payload: checkbox });
          setCheckBox([]);
        }}
        className='bg-purple-700 text-white p-3 rounded-xl m-3'
      >
        {checkbox.length >= 1
          ? `Remove ${checkbox.length} selected products`
          : `Please click one of the checkbox then click on this button to remove an item`}
      </button>
    </div>
  );
}

export default RemoveItems;
