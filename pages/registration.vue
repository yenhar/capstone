<template>

    <NuxtLayout name="formes">
      <button
          type="button"
          class="flex items-center px-2 py-2 mx-14 bg-white text-black rounded-lg  border-transparent hover:bg-gray-200 hover:border-gray-400 transition duration-300"
        >
        <!-- Icon -->
        <img
          src="../public/images/Back.png"
          alt="Back"
          class="w-4 h-4 "
        />
        <!-- Text -->
        <span class="text-base">Back to Home</span>
      </button>
      <div class="w-full p-4">
        <div class="text-center">
          <div class="text-custom-size font-medium px-5 text-custom-bluegreen mt-14 mb-2">Register to </div>
          <div class="text-3xl font-bold px-5 text-custom-bluegreen mb-14">AuctionWave</div>
        </div>
  
        <div class="flex justify-left mt-4 mx-10">
          <input type="text" id="username" name="username" class="border p-2 w-2/3 rounded-lg h-14 mx-2 focus:outline-none focus:border-custom-bluegreen focus:ring-1 focus:ring-custom-bluegreen" placeholder="Username">
        </div>
  
        <div class="flex justify-center mt-4 mx-12 space-x-2">
          <input type="text" id="firstname" name="firstname" class="border p-2 w-full rounded-lg h-14 focus:outline-none focus:border-custom-bluegreen focus:ring-1 focus:ring-custom-bluegreen" placeholder="First name">
          <input type="text" id="lastname" name="lastname" class="border p-2 w-full rounded-lg h-14 focus:outline-none focus:border-custom-bluegreen focus:ring-1 focus:ring-custom-bluegreen" placeholder="Last name">
          <input type="text" id="middlename" name="middlename" class="border p-2 w-full rounded-lg h-14 focus:outline-none focus:border-custom-bluegreen focus:ring-1 focus:ring-custom-bluegreen" placeholder="Middle name">
        </div>
  
        <div class="flex flex-wrap justify-left mt-2 mx-10 space-y-2">
          <input type="text" id="email" name="email" class="border p-2 w-2/3 rounded-lg h-14 mx-2 focus:outline-none focus:border-custom-bluegreen focus:ring-1 focus:ring-custom-bluegreen" placeholder="Email">
          <input type="password" id="password" name="password" class="border p-2 w-full rounded-lg h-14 mx-2 focus:outline-none focus:border-custom-bluegreen focus:ring-1 focus:ring-custom-bluegreen" placeholder="Password">
          <input type="password" id="confirm-password" name="confirm-password" class="border p-2 w-2/3 rounded-lg h-14 mx-2 focus:outline-none focus:border-custom-bluegreen focus:ring-1 focus:ring-custom-bluegreen" placeholder="Confirm Password">
        </div>
  
        <div class="flex mt-2 mx-12 w-1/2">
          <input type="checkbox" id="terms" name="terms" value="agree" class="mr-2">
          <label for="terms" class="mr-2">Agree with AuctionWave's</label>
          <a href="#" class="text-custom-bluegreen underline">Terms of Service</a><p>,&nbsp</p>
          <a href="#" class="text-custom-bluegreen underline">Privacy Policy</a>
        </div>
        <div class="flex mx-12 w-full">
          <a href="#" class="text-custom-bluegreen underline ml-6">Terms of Service</a><p>,&nbsp</p>
          <a href="#" class="text-custom-bluegreen underline">Privacy Policy</a><p></p>
        </div>
       
        
  
        <div class="flex justify-center mt-8">
          <button type="button" class="border p-2 w-full bg-custom-bluegreen rounded-lg text-white h-14 m-12 hover:shadow-inner">Submit</button>
        </div>
      </div>
    </NuxtLayout>   
  </template>

<script setup>
import CustomButton from '@/components/custombutton.vue';

const handleClick = () => {
  alert('Button clicked!');
};
</script>