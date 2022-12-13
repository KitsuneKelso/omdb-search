type SearchParams = {
  title?: string;
  type?: string;
  year?: string;
};

const useSearch = () => {
  const searchFor = async ({ type, title, year }: SearchParams) => {
    let url = `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}`;
    if (title && title.length > 0) url += `&t=${title}`;
    if (type && type.length > 0) url += `&type=${type}`;
    if (year && year.length > 0) url += `&y=${year}`;

    const response = await fetch(url);

    console.log(response.body);
  };

  return searchFor;
};

export default useSearch;
