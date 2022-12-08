import React from "react";
import Input from "../Input/Input";
import CheckoutHeader from "./CheckoutHeader";

const Address = () => {
  return (
    <form>
      <div className="p-4 bg-white shadow-sm">
        <CheckoutHeader number="1" title="Customer Information" />
        <div className="flex gap-2 mb-3">
          <div>
            <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
              First Name
            </label>
            <Input
              type="text"
              placeholder="First Name"
              class=" p-2 border border-gray rounded-md outline-none focus:border-gray w-full"
              //   handleChange={handleChange}
              name="firstName"
            />
          </div>
          <div>
            <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
              Last Name
            </label>
            <Input
              type="text"
              placeholder="Last Name"
              class=" p-2 border border-gray rounded-md outline-none focus:border-gray w-full"
              name="lastName"
              //   handleChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="mt-4 after:content-['*'] after:ml-0.5 after:text-red-500">
            Address
          </label>
          <Input
            type="text"
            placeholder="Address"
            class=" p-2 border border-gray rounded-md outline-none focus:border-gray w-full"
            name="address"
            //   handleChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="mt-4 after:content-['*'] after:ml-0.5 after:text-red-500">
            Mobile
          </label>
          <Input
            type="number"
            placeholder="Telephone"
            class=" p-2 border border-gray rounded-md outline-none focus:border-gray w-full"
            name="number"
            //   handleChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="mt-4 after:content-['*'] after:ml-0.5 after:text-red-500">
            Mobile
          </label>
          <Input
            type="email"
            placeholder="E-mail"
            class=" p-2 border border-gray rounded-md outline-none focus:border-gray w-full"
            name="email"
            //   handleChange={handleChange}
          />
        </div>
        <div className="flex gap-2 mb-3">
          <div>
            <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
              City
            </label>
            <Input
              type="text"
              placeholder="City"
              class=" p-2 border border-gray rounded-md outline-none focus:border-gray w-full"
              //   handleChange={handleChange}
              name="city"
            />
          </div>
          <div>
            <label className="after:content-['*'] after:ml-0.5 after:text-red-500 ">
              Zone
            </label>
            <select className="p-2 border border-gray rounded-md outline-none focus:border-gray w-full">
              <option value="">Dhaka</option>
              <option value="">Chittagong</option>
              <option value="">Borishal</option>
            </select>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Address;
