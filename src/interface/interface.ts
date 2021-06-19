export interface ICheckbox {
  id?: number;
}

export interface IProduct {
  imageUrl: string;
  name: string;
  price: number;
  priceWas: number;
  productId: number;
  promotionBadge: string;
  available: string;
  quantity: number;
}
