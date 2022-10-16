export interface CoursesResponse {
  _id?: string;
  name: string;
  slug: string;
  status?: boolean | string;
  teacher: string;
  price: string;
  description: string;
  __v?: number;
}

export interface PropChildrenJsx {
  children: JSX.Element[] | JSX.Element;
}

export interface CreatePropCourse {
  endpoint: string;
  data: CoursesResponse;
}
