
const API_URL = "http://localhost:1337/api";


export const strapiGet = async<T> (endpoint: string, params?: URLSearchParams) : Promise<T> =>{
const res = await fetch(`${API_URL}${endpoint}${params ? `?${params}`: ''}`,{
  headers:{
   'Authorization': `Bearer ${process.env.CMS_STRAPI_TOKEN}`
  }
});

 if (!res.ok) {
    throw new Error ("Error al recuperar EN STRAPI:"+ endpoint)
  }

return res.json();
}

