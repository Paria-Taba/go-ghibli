import { useEffect, useState } from "react"
import * as z from "zod";

const filmZ = z.object({
  id: z.string(),
  title: z.string(),
  original_title:z.string(),
  original_title_romanised:z.string(),
  image: z.string(),
  description: z.string(),
  director: z.string(),
  release_date:z.string()
});

const filmsZ = z.array(filmZ);
type FilmType = z.infer<typeof filmZ>; 

function useFilmsApi(){
	const[data,setData]=useState<FilmType[] | null >(null)

useEffect(()=>{
	async function getData(){
		try{
			
			const res = await fetch("/api/films");
			  if (!res.ok) throw new Error("Failed to fetch data");
           const jsonData: FilmType[] = await res.json();
                const result = filmsZ.safeParse(jsonData);
				console.log(result)
				if (result.success) {
          setData(result.data); 
	
        } else {
          console.error("Validation error:", result.error.format());
        }
			


		}catch(error){
			console.log("has error",error)
		}
		
	}
	getData()
	
},[])

return(data)

}

export default useFilmsApi

