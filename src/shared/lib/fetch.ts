import CryptoJS from "crypto-js";
import { BASE_API_URL, PRIVATE_API_KEY, PUBLIC_API_KEY } from "./constants";

export const fetchData = async ({
  url,
  params,
  queryParams,
}: {
  url: string;
  params?: { [key: string]: string | number };
  queryParams?: { [key: string]: string | number };
}) => {
  try {
    const ts = new Date().getTime().toString();
    const str = `${ts}${PRIVATE_API_KEY}${PUBLIC_API_KEY}`;
    const hash = CryptoJS.MD5(str).toString() || "";
    const defaultQueryParams = {
      ts,
      apikey: PUBLIC_API_KEY || "",
      hash,
      ...queryParams,
    };
    const fullUrl = `${BASE_API_URL}${url}?${new URLSearchParams({
      ...defaultQueryParams,
    })}`;
    const response = await fetch(fullUrl, {
      headers: {
        Accept: "*/*",
      },
      cache: "force-cache",
      method: "GET",
      ...params,
    });
    return response.json();
  } catch (error) {
    throw new Error(error as string);
  }
};
