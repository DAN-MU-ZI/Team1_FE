import instance from 'apis/instance';

export const getTest = () => {
  return instance.get(`/test`);
};

// export const useFetch = () => {
//   const query = useQuery(['test', getTest]);
//   return query;
// };
