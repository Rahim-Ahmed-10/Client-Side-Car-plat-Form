
export const getAllProductsCar = async() =>{
    const res = await fetch ("http://localhost:8085/carProducts");
    const data = await res.json();
    console.log(data);
    return data;
}

export const getProductCarId = async(id) =>{
    const res = await fetch(`http://localhost:8085/carProducts/${id}`);
    const data = await res.json();

    return data;

}