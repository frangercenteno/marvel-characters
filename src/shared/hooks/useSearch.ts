import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import { fetchData } from "../lib/fetch";
import { type Character } from "../types";

const useSearch = (
  urlApi: string,
  params?: { [key: string]: string | number }
) => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [loading, setLoading] = useState(false);
  const [searchCalled, setSearchCalled] = useState(false);
  const [data, setData] = useState<Character[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const result = await fetchData({
          url: urlApi,
          queryParams: {
            ...params,
            nameStartsWith: debouncedSearch,
          },
        });
        setData(result.data.results);
      } catch (error) {
        throw new Error(error as string);
      } finally {
        setSearchCalled(true);
        setLoading(false);
      }
    };

    if (!debouncedSearch) {
      setSearchCalled(false);
      setData([]);
      return;
    }
    loadData();
  }, [debouncedSearch, urlApi, params]);

  return { search, setSearch, loading, data, searchCalled };
};

export default useSearch;
