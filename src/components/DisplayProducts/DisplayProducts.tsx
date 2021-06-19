import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { ICheckbox, IProduct } from '../../interface/interface';
interface IDisplayProducts {
  products: { fetchproducts: [] };
  checkbox: ICheckbox[];
  setCheckbox: Dispatch<SetStateAction<ICheckbox[]>>;
}
function DisplayProducts({
  checkbox,
  setCheckbox,
  products: { fetchproducts },
}: IDisplayProducts) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-blue-200'>
      {fetchproducts?.map((product: IProduct, index: number) => {
        const optionFindIndex = checkbox.findIndex(
          (getId) => getId.id === +product.productId
        );

        return (
          <div key={index} className='mx-4 my-10 '>
            <div className='relative'>
              <input
                type='checkbox'
                className='  h-5 w-5 checked:bg-purple-400 absolute left-1  top-1'
                value={product.productId}
                checked={optionFindIndex !== -1 ? true : false}
                onChange={(e) => {
                  const optionFindIndex = checkbox.findIndex(
                    (getId) => String(getId.id) === e.target.value
                  );

                  if (optionFindIndex === -1) {
                    setCheckbox((prevState: any) => [
                      ...prevState,
                      { id: +e.target.value },
                    ]);
                  } else {
                    const removeId = checkbox.filter(
                      (value) => String(value.id) !== e.target.value
                    );
                    setCheckbox(removeId);
                  }
                }}
              />
              <img src={product.imageUrl} alt='' />
              <div
                className={`${
                  product.promotionBadge
                    ? 'absolute bottom-0 text-xl pt-1 h-9 text-center bg-pink-400 opacity-70  text-white flex justify-center w-full'
                    : ''
                } `}
              >
                {product.promotionBadge}
              </div>
            </div>
            <div className='bg-white h-52'>
              <div className='text-lg pt-10 pl-10 w-3/4'>{product.name}</div>
              <div className='pl-10 text-xl'>
                <span className='font-bold text-xl'> £{product.price}</span>
                <span className='ml-3 text-red-600 line-through '>
                  £{product.priceWas}
                </span>
              </div>
              <div className='pl-10 text-xl'>
                {product.available === 'TRUE' && product.quantity > 10 ? (
                  <span className='text-green-500'>
                    {product.quantity} in stock
                  </span>
                ) : product.available === 'TRUE' &&
                  product.quantity >= 1 &&
                  product.quantity < 5 ? (
                  <>
                    <div className='text-green-500 '>
                      {product.quantity} in stock
                    </div>
                    <div className='text-yellow-500 uppercase'>
                      Low on Stock
                    </div>
                  </>
                ) : (
                  <span className='text-red-500 uppercase'>Out of stock</span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayProducts;
