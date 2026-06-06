"use client";

import { addCarProduct } from "@/lib/product/action"; 
import { Check } from "@gravity-ui/icons";
import { Button, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function ProductForm() {
  const router = useRouter();


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null; 
    
    // if (!token) {
    //   alert("You must be logged in to add a car!");
    //   return;
    // }

    const formData = new FormData(e.target);

    try {
      const response = await addCarProduct(formData, token);

      if (response?.success || response?.insertedId) {
        toast.success("Car Product Added Successfully!");
        e.target.reset(); 
      } else {
        toast.error(`Failed to add car: ${response?.error || 'Unknown error'}`);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while communicating with the server!");
    }
  };

  return (
    <div className="flex justify-center items-center w-full my-6">
      
      <Form
        onSubmit={handleFormSubmit} 
        className="flex w-[450px] flex-col gap-4 border p-8 rounded-md bg-white shadow-sm"
      >
        {/* Car Name */}
        <TextField isRequired>
          <Label>Car Name</Label>
          <Input name="carName" placeholder="Enter Car Name (e.g., Toyota Corolla)" />
        </TextField>

        {/* Car Type */}
        <TextField isRequired>
          <Label>Car Type</Label>
          <Input name="carType" placeholder="Enter Car Type (e.g., Sedan, SUV)" />
        </TextField>

        {/* Daily Rent Price & Capacity */}
        <div className="flex gap-4 w-full">
          <TextField isRequired className="w-1/2">
            <Label>Daily Rent Price ($)</Label>
            <Input name="dailyRentPrice" type="number" placeholder="Price" />
          </TextField>

          <TextField isRequired className="w-1/2">
            <Label>Capacity (Seats)</Label>
            <Input name="capacity" type="number" placeholder="Seats" />
          </TextField>
        </div>

        {/* Pickup Location */}
        <TextField isRequired>
          <Label>Pickup Location</Label>
          <Input name="pickupLocation" placeholder="Enter Pickup Location" />
        </TextField>

        {/* Image URL */}
        <TextField isRequired>
          <Label>Car Image URL</Label>
          <Input name="imageUrl" type="url" placeholder="Enter Image Link" />
        </TextField>

        {/* Description */}
        <TextField isRequired>
          <Label>Description</Label>
          <Input name="description" placeholder="Enter Car Details..." />
        </TextField>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-2">
          <Button type="submit" className="bg-blue-600 text-white flex items-center gap-1">
            <Check />
            Add Car Product
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
}