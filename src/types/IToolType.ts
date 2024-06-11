export type IToolType = {
  id: string;
  title: string;
  place?: string;
  idGroup: string;
};

export interface TableData {
  [title: string]: IToolType[];
}
