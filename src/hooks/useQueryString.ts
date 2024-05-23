import { useSearchParams } from "react-router-dom";
/**
 * 
 * @param key string
 * @returns key의 value 값
 */

const useQueryString = (key: string) => {
    const [searchParams] = useSearchParams();
    const isShared = Boolean(searchParams.get(key))
  return {isShared}
}

export default useQueryString