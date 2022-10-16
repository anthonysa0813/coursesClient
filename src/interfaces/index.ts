export interface CoursesResponse {
  _id: string;
  name: string;
  slug: string;
  status: boolean;
  teacher: string;
  price: string;
  description: string;
  __v: number;
}

export interface PropChildrenJsx {
  children: JSX.Element[] | JSX.Element;
}
