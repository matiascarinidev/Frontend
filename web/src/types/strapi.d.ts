export interface StrapiResponse<T> {
  data: {
    id: number;
    attributes: T;
  }[];
}

export interface MenuItem {
  name: string;
  price: number;
  category: string;
}

export interface ReservationData {
  name: string;
  email: string;
  date: string;
  time: string;
}
