
import CarsDetailsCard from '@/components/CarsDetailsCard';
import { getProductCarId } from '@/lib/product/data';
import { div } from 'framer-motion/client';
import React from 'react';




const CarsDetailsPage = async ({params}) => {
  
    const pageParams = await params;
    const {id} = pageParams;
    const data = await getProductCarId(id);
    
  return (
    <div className="py-10 px-4 ">
   
      <div>
        <CarsDetailsCard carData={data} />
      </div>
    </div>
  );
};

export default CarsDetailsPage;