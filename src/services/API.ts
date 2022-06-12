const apiKey = "7763ce4f9a2e23385648fc36d554bf74";

export const getGeneros = async ():Promise<TypeGeneros[]>=>{
    const req = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=pt-br`);
    const response = await req.json()
    return response.genres
}
export type TypeGeneros = {
    id:number,
    name:string
}


export const getPopularity = async(genre?:number):Promise<TypePopularity[]>=>{
    const req = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-br&sort_by=popularity.desc${genre?`&with_genres=${genre}`:``}`);
    const response = await req.json()
    return response.results

}
export type TypePopularity = {
    adult:boolean,
    backdrop_path:string,
    genre_ids:number[],
    id:number,
    original_language:string,
    original_title:string,
    overview:string,
    popularity:number,
    poster_path: string,
    release_date:string,
    title:string,
    video:boolean,
    vote_average:number,
    vote_count:number
}
