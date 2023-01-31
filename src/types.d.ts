export interface ITodo {
  id: string;
  title: string;
  description: string;
  colorBadge: string;
  opened: boolean;
  date: Date;
}

export type refetch = <TPageData>(
  options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
) => Promise<
  QueryObserverResult<
    {
      [key: string]: ITodo[];
    },
    unknown
  >
>;
