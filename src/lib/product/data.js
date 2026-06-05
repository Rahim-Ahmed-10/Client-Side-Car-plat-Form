
export const getAllProductsCar = async (search = "") => {
    try {
        const res = await fetch(`http://localhost:8085/carProducts?search=${search}`, {
            cache: 'no-store'
        });

        if (!res.ok) {
            throw new Error("Data fetch failed");
        }

        const data = await res.json();
        console.log("Fetched Data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching cars:", error);
        return []; 
    }
}

export const getProductCarId = async (id) => {
    try {
        const res = await fetch(`http://localhost:8085/carProducts/${id}`, { cache: 'no-store' });
        if (!res.ok) throw new Error("No car found with the given ID");
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching car details:", error);
        return null;
    }
}