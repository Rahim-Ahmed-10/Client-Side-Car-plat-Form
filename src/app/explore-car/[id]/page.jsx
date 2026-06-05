import CarsDetailsCard from '@/components/CarsDetailsCard';
import { auth } from '@/lib/auth';
// import { getProductCarId } from '@/lib/product/data'; // 
import { headers } from 'next/headers';
import React from 'react';

const CarsDetailsPage = async ({params}) => {
    const pageParams = await params;
    const {id} = pageParams;
  
    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    const res = await fetch(`http://localhost:8085/carProducts/${id}`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        cache: 'no-store' 
    });
    
    const data = await res.json();

    return (
        <div className="py-10 px-4 ">
            <div>
                <CarsDetailsCard carData={data} />
            </div>
        </div>
    );
};

export default CarsDetailsPage;