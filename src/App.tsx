import React, { Dispatch, useEffect, useState } from 'react';
import './assets/css/tailwind.css';
import { connect } from 'react-redux';
import DisplayProducts from './components/DisplayProducts/DisplayProducts';
import RemoveItems from './components/RemoveItems/RemoveItems';
import { ICheckbox } from './interface/interface';
import ReactLoading from 'react-loading';
import { fetchGetProductsFn } from './actions/ActionsGetProducts';

interface IApp {
  loading: boolean;
  errors: boolean;
  dispatch: Dispatch<any>;
  products: { fetchproducts: [] };
}

function App({ loading, products, dispatch }: IApp) {
  const [checkbox, setCheckbox] = useState<ICheckbox[]>([]);

  useEffect(() => {
    dispatch(fetchGetProductsFn());
  }, []);
  
  if (loading) {
    return (
      <div className='App'>
        <div className='flex justify-center mt-4'>
          <ReactLoading
            type={'spin'}
            color={'#BFDBFE'}
            height={667}
            width={375}
          />
        </div>
      </div>
    );
  }
  return (
    <div className='App'>
      <RemoveItems checkbox={checkbox} setCheckBox={setCheckbox} />
      <DisplayProducts
        products={products}
        checkbox={checkbox}
        setCheckbox={setCheckbox}
      />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  errors: state.error,
  products: state.products,
  loading: state.loading,
});

export default connect(mapStateToProps)(App);
