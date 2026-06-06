import { ProductForm } from '@/components/ProductForm';
import React from 'react';

const ProductFormPage = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold text-center mt-6 text-gray-800'>Add New Car for Rental</h2>
            <ProductForm />
        </div>
    );
};

export default ProductFormPage;