export const getMoviesData = async (queryParam) => {
 try{
   const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&${queryParam}`);
    const data =  response.json();
    return data;
   
} catch (error) {
    console.log(error)
}
}