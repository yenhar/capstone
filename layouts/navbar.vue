<template>
    <div class="bg-custom-white first-line:min-h-screen"> <!-- Ensure the background color covers the full viewport height -->
      <nav class="fixed top-0 left-0 right-0 px-4 py-4 flex justify-between items-center bg-white shadow-md z-50"> <!-- Add shadow to navbar for better visibility -->
        <a class="text-3xl font-bold leading-none" href="#">
          LOGO
        </a>
        <div class="lg:hidden">
          <button class="navbar-burger flex items-center text-blue-600 p-3">
            <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <a class="px-5 py-5 text-sm text-gray-600 font-bold cursor-pointer hover:bg-gray-100 rounded-md transition duration-300 flex items-center h-full" href="#">Home</a>
            </li>
            <li class="text-gray-300"></li>
            <li>
              <a class="px-5 py-5 text-sm text-gray-600 font-bold cursor-pointer hover:bg-gray-100 rounded-md transition duration-300 flex items-center h-full" href="#">Auctions</a>
            </li>
            <li class="text-gray-300"></li>
            <li>
              <a class="px-5 py-5 text-sm text-gray-600 font-bold cursor-pointer hover:bg-gray-100 rounded-md transition duration-300 flex items-center h-full" href="#">FAQS</a>
            </li>
            <li class="text-gray-300"></li>
            <li>
              <a class="px-5 py-5 text-sm text-gray-600 font-bold cursor-pointer hover:bg-gray-100 rounded-md transition duration-300 flex items-center h-full" href="#">Contact Us</a>
            </li>
            <li class="text-gray-300"></li>
        </ul>
        <div class="flex items-center space-x-4">
            <div class="p-2  cursor-pointer hover:bg-gray-300 rounded-full transition duration-300">
                <img class="w-6 h-6" src="../public/images/Notification.png" alt="Notification Icon">
            </div>
            <button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span class="sr-only">Open user menu</span>
              <img class="w-9 h-9 rounded-full" src="../public/images/Mizuho.jpg">
            </button>
        </div>
      </nav>
      <div>
        <slot/>
      </div>
    </div>
  </template>