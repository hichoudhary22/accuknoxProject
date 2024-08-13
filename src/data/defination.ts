export interface widget {
  id: number;
  title: string;
  image: string;
  details: string;
  added: boolean;
}

export interface categories {
  id: number;
  name: string;
  widgets: Array<widget>;
}
