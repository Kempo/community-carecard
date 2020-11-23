import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useQueryParams = (...keys) => {
  const [query] = useState(new URLSearchParams(useLocation().search));

  const getResult = useCallback(() => {
    const result = {};

    keys.forEach((key) => {
      const param = query.get(key);
      result[key] = param ? encodeURIComponent(param.trim()) : null;
    });

    return result;
  }, [keys, query]);

  return getResult();
};
