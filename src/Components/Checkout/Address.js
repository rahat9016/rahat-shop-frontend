import React from "react";
import Input from "../Input/Input";
import CheckoutHeader from "./CheckoutHeader";

const Address = ({ handleUserInformation, values }) => {
  return (
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
            handleChange={handleUserInformation}
            name="firstName"
            value={values?.firstName}
            required
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
            value={values?.lastName}
            handleChange={handleUserInformation}
            required
          />
        </div>
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
          value={values?.number}
          handleChange={handleUserInformation}
          required
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
          value={values?.email}
          handleChange={handleUserInformation}
          required
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
            handleChange={handleUserInformation}
            name="city"
            value={values?.city}
            required
          />
        </div>
        <div>
          <label className="after:content-['*'] after:ml-0.5 after:text-red-500 ">
            Zone
          </label>
          <select
            className="p-2 border border-gray rounded-md outline-none focus:border-gray w-full"
            onChange={handleUserInformation}
            name="zone"
            value={values?.zone}
            required
          >
            <option value="dhaka">Dhaka</option>
            <option value="chittagong">Chittagong</option>
            <option value="borishal">Borishal</option>
          </select>
        </div>
      </div>
      <div className="mb-3">
        <label className="mt-4 after:content-['*'] after:ml-0.5 after:text-red-500">
          Full Address
        </label>
        <Input
          type="text"
          placeholder="Full Address"
          class=" p-2 border border-gray rounded-md outline-none focus:border-gray w-full"
          value={values?.fullAddress}
          name="fullAddress"
          handleChange={handleUserInformation}
          required
        />
      </div>
    </div>
  );
};

export default Address;
