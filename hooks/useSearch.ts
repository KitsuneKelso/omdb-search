const useSearch = async () => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&t=indiana`
  );

  console.log(response);
};

export default useSearch;
