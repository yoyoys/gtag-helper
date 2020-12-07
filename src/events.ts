type WithAny<T extends {} = {}> = T & { [prop: string]: any };
export interface GtagEvent {
  (action: 'begin_checkout', options: BeginCheckoutParam): void;
  (action: 'add_to_cart', options: AddToCartParam): void;
  (action: 'select_item', options: SelectItemParam): void;
  (action: 'page_view', options: PageViewParam): void;
  (action: string, options?: any): void;
}

export interface PageViewParam {
  page_location?: string;
  page_path?: string;
  page_title?: string;
}

export interface SelectItemParam {
  item_list_id?: string;
  item_list_name?: string;
  items?: GtagItemSelect[];
}

interface GtagItemId {
  item_id: string;
}
interface GtagItemName {
  item_name: string;
}
type GtagIdOrName = GtagItemId | GtagItemName | (GtagItemId & GtagItemName);

type GtagItemBase = WithAny<GtagIdOrName>;

export type GtagItemSelect = GtagItemBase & {
  index?: number;
  item_list_name?: string;
  item_list_id?: string;
  coupon?: string;
  discount?: number;
  item_brand?: string;
  item_category?: string;
  item_variant?: string;
  price?: number;
  currency?: string;
};

export interface AddToCartParam {
  currency?: string;
  items?: GtagItemCartItem[];
  value?: number;
}

export interface BeginCheckoutParam extends WithAny {
  coupon?: string;
  currency?: string;
  value?: number;
  items?: GtagItemCartItem[];
}

export type GtagItemCartItem = GtagItemBase & {
  affiliation?: string;
  coupon?: string;
  discount?: number;
  item_brand?: string;
  item_category?: string;
  item_variant?: string;
  price?: number;
  currency?: string;
};
