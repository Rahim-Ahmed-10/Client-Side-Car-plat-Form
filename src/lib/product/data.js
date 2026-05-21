
export const getAllProductsCar = async() =>{
    const res = await fetch ("http://localhost:8085/carProducts");
    const data = await res.json();
    console.log(data);
    return data;
}