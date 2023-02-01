export interface ITodo {
  id: string;
  title: string;
  description: string;
  colorBadge: string;
  isClosed: boolean;
  date: Date;
}

export type QueryRefetch = <TPageData>(
  options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
) => Promise<QueryObserverResult<FetchedTodo, unknown>>;

export type FetchedTodo = { [key: string]: ITodo[] };
