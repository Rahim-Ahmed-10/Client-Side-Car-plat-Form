import AllCarsCard from '@/components/AllCarsCard';

import { getAllProductsCar } from '@/lib/product/data';
import React from 'react';

const AllCarsDetails =async () => {
    
    const CarItems = await getAllProductsCar();
    return (
        <div className='max-w-7xl mx-auto mt-8 px-4'>
            <h2 className='text-2xl font-bold mb-6'>All Cars</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    CarItems.map(car => <div key={car._id}>
                        <AllCarsCard car={car} />
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllCarsDetails   ;