<template>
    <NuxtLayout name="navbar">
      <div class="min-h-screen bg-custom-white w-full mt-16">
        <div class="bg-white w-3/5 mx-auto px-12 py-12 rounded-lg flex items-start">
          <div class="mr-6">
            <img class="w-48 rounded-full" src="../public/images/jobert.jpg" alt="Profile Picture">
          </div>
          <div class="my-2 mx-8">
            <h1 class="text-3xl font-medium">Robert_Gyms</h1>
            <h1 class="text-sm font-medium text-gray-500 my-2">Auctioneer</h1>
            <div class="flex justify left">
                <button type="button" class="border p-2 w-24 h-20 bg-custom-bluegreen rounded-lg text-white font-medium mr-2 hover:shadow-inner">Contact</button>
                <button type="button" class="border-2 border-custom-bluegreen p-2 w-24 h-20 bg-white rounded-lg text-custom-bluegreen font-medium ml-2 outline-custom-bluegreen hover:shadow-inner">Resume</button>
            </div>
            
          </div>
          <div class="w-px h-52 bg-gray-300 ml-48"></div>
          <div class="flex">
            <div class="mx-10 my-2">
                <div class="font-medium my-2">Full name:</div>
                <div class="font-medium my-2">Contact no:</div>
                <div class="font-medium my-2">Email:</div>
                <div class="font-medium my-2">Location:</div>
            </div>
            <div class="my-2">
                <div class="font-normal my-2">Robert Jims Aquino</div>
                <div class="font-normal my-2">09033228423</div>
                <div class="font-normal my-2">arobertjims@gmail.com</div>
                <div class="font-normal my-2">Ma-a, Davao City</div>
            </div>
          </div>
          
         
        </div>
        <div class="bg-white w-3/5 mx-auto my-6 px-12 py-12 rounded-lg items-start">
          <div class="mr-6">
             <div class="text-2xl font-medium">About</div>
          </div>
          <div class="mr-6">
             <div class="font-normal my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
             </div>
          </div>
          <div class="flex justify-center my-8">
            <hr class="w-full">
          </div>
          <div class="mr-6">
             <div class="text-2xl font-medium">Likes</div>
          </div>
          <div class="flex justify left">
            <div class="my-6">
                <button type="button" class="border leading-none border-gray-300 p-2 w-16  bg-white rounded-full text-gray-600 font-normal mx-1">Cars</button>
                <button type="button" class="border leading-none border-gray-300 p-2 w-40  bg-white rounded-full text-gray-600 font-normal mx-1 outline-custom-bluegreen ">Heavy Equipment</button>
                <button type="button" class="border leading-none border-gray-300 p-2 w-32  bg-white rounded-full text-gray-600 font-normal mx-1">Smartphones</button>
                <button type="button" class="border leading-none border-gray-300 p-2 w-40  bg-white rounded-full text-gray-600 font-normal mx-1 outline-custom-bluegreen ">Real Estate</button>
                <button type="button" class="border leading-none border-gray-300 p-2 w-28  bg-white rounded-full text-gray-600 font-normal mx-1">Antiques</button>
            </div>
                
                
          </div>
        
        </div>
      </div>
    </NuxtLayout>
  </template>