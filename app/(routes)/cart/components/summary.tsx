"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import {Button} from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { cn } from "@/lib/utils";

interface Shipping {
      shipping_id: number;
      shipping_name: string;
      ship_cost: number
      estimated_time: number
}

interface Discount {
      discount_id: number;
      description: string;
      percent: number;
      expired: Date
}


const Summary = () => {

  const searchParams = useSearchParams();

  //  CART STATE
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.');
      removeAll();
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong.');
    }
  }, [searchParams, removeAll]);


  // DISCOUNT STATE
  const [discountCode, setDiscountCode] = useState(0);
  const [isValidDiscount, setIsValidDiscount] = useState(false);

  const handleDiscountChange = (event : any) => {
    setDiscountCode(event.target.value);
  };

  useEffect(() => {
     if (discountCode) {
      fetch('http://localhost:3000/discount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ discountCode }),
      })
        .then(response => response.json())
        .then(data => {
          const isValid = data !== null;

          // Set the isValidDiscount based on the JSON response
          setIsValidDiscount(isValid);

          // If the JSON response is null, display an error message
          if (data === null) {
            console.error('Invalid JSON response from the server.');
          }
          
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }, [discountCode]);

  
  //  SHIPPING STATE
  const [open, setOpen] = useState(false)
  const [value, setShipping] = useState('')
  const [shippingOptions, setShippingOptions]  = useState<Shipping[]>([]);

  useEffect(() => {
   
    // Gọi API để kiểm tra mã giảm giá
    fetch(`http://localhost:3000/shipping/get-shippings`, {
      method: "GET",
      next: { revalidate: 0 },
    })
      .then(response => response.json())
       .then((data: Shipping[]) => {
   
    const shippingOptions = data.map(shipping => ({
      shipping_id: shipping.shipping_id,
      shipping_name: shipping.shipping_name,
      ship_cost: shipping.ship_cost,
      estimated_time: shipping.estimated_time,
    }));
    setShippingOptions( shippingOptions);
  })
      .catch(error => {
        console.error("Error:", error);
      });
  }, []);



  //  Total
  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0);


  const shippingCost 
  =shippingOptions.find((shipping) => 
  shipping.shipping_name.toUpperCase() === value.toUpperCase())?.ship_cost || 0;
  const totalWithShipping = totalPrice + shippingCost;



  const onCheckout = async () => {
    const shipping_id = shippingOptions.find((shipping) => 
      shipping.shipping_name.toUpperCase() === value.toUpperCase())?.shipping_id;

    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: items.map((item) => item.product_id),
      shipping_id: shipping_id,
      discount_id: discountCode,
      total_price: totalWithShipping,
    },{
      
    });

    window.location = response.data.url;
  }


  return ( 
    <div className="mt-16 rounded-lg bg-gray-50 p-6 lg:col-span-5 lg:mt-0 lg:p-8">
  <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
  <div className="mt-6 space-y-4">
    <div className="flex items-center justify-between border-t border-gray-200 pt-4">
      <div className="text-base font-medium text-gray-900">Order total</div>
      <Currency value={totalWithShipping} />
    </div>
    <div className="flex items-center justify-between border-t border-gray-200 pt-4">
      <Label>Discount Code</Label>
      <div className="flex space-x-2 items-center">
        <Input
          value={discountCode}
          onChange={handleDiscountChange}
          className="border rounded px-2 py-1 w-36"
        />
        {isValidDiscount ? (
          <p className="text-green-600">Discount code is valid!</p>
        ) : (
          <p className="text-red-600">Invalid discount code.</p>
        )}
      </div>
    </div>
    <div className="flex items-center justify-between border-t border-gray-200 pt-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? shippingOptions.find((shipping) => 
  shipping.shipping_name.toUpperCase() === value.toUpperCase())?.shipping_name
              : "Select Shipping..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search shipping..." />
            <CommandEmpty>No Shipping found.</CommandEmpty>
            <CommandGroup>
              {shippingOptions.map((shipping) => (
                <CommandItem
                  key={shipping.shipping_id}
                  value={shipping.shipping_name}
                  onSelect={(currentValue) => {
                    setShipping(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === String(shipping.shipping_id) ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {shipping.shipping_name}
                
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
    <Button onClick={onCheckout} disabled={items.length === 0} className="w-full mt-6">
      Checkout
    </Button>
  </div>
</div>

  );
}
 
export default Summary;