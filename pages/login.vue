<template>
  <div class="flex flex-col min-h-screen">
    <!-- Main content -->
    <div class="flex-grow">
      <!-- Your existing content here -->
      <nav class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div class="flex justify-end items-center px-44  h-16">
          <div class="px-5 font-medium text-white bg-custom-bluegreen rounded-md cursor-pointer h-3/6 flex items-center justify-center" @click="toggleForm">Sign up</div>
          <div class="px-5 font-medium text-black cursor-pointer hover:bg-gray-100 rounded-md transition duration-300 flex items-center">About</div>
        </div>
      </nav>
      
      <!-- Overlay for form -->
      <div v-if="showForm" class="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
        <!-- Form section -->
        <div class="bg-white w-1/4 p-6 rounded-lg shadow-md relative">
          <!-- Close button -->
          <button class="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800" @click="toggleForm">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>  
          </button>
          
          <div class="text-center text-3xl font-bold px-5 text-custom-bluegreen my-14">AuctionWave</div>
          
          <div class="flex justify-center mt-4">
            <input type="text" id="fname" name="fname" class="border p-2 w-5/6 rounded-lg h-14 focus:outline-none focus:border-custom-bluegreen focus:ring-1 focus:ring-custom-bluegreen" placeholder="Username">
          </div>
          
          <div class="flex justify-center mt-4">
            <input type="password" id="fname" name="fname" class="border p-2 w-5/6 rounded-lg h-14 focus:outline-none focus:border-custom-bluegreen focus:ring-1 focus:ring-custom-bluegreen" placeholder="Password">
          </div>
          
          <div class="flex justify-center mt-4">
            <button type="button" class="border w-5/6 bg-custom-bluegreen rounded-lg text-white h-14 transition-shadow duration-300 hover:shadow-inner ">Log In</button>  
          </div>
          
          <div class="text-center mb-5 mt-4">
            <a href="#" class="font-extralight text-center text-black dark:text-black hover:underline">Forgot Password</a>
          </div>
          
          <div class="flex justify-center mt-4">
            <hr class="w-5/6">
          </div>
          
          <div class="flex justify-center my-8">
            <button type="button" class="border w-5/6 bg-custom-yellow rounded-lg text-white h-14 hover:shadow-inner">Create new account</button>  
          </div>
          
          <div class="flex justify-center mt-4 mb-8">
            <img class="w-8 h-8 rounded-full" src="../public/images/Google.png">
          </div>
        </div>
      </div>
    </div>
    <!-- slideshow   -->
    <!-- <div class="flex justify-center items-center py-10 w-full relative"> -->
    <!-- Text Container -->
    <!-- <div class="absolute left-10 top-1/4 z-20 text-white max-w-md mx-44"> -->
        <!-- <h1 class="text-6xl font-medium mb-4">Online Auctions Made Easy</h1> -->
        <!-- <div W Sclass="w-full max-w-4xl"> -->
            <!-- <p class="text-xl text-justify">Experience a seamless and convenient way to participate in online auctions, from anywhere and at any time.</p> -->
        <!-- </div> -->
        <!--  -->
        <!-- <div class="my-4"> -->
            <!-- <button class="px-6 py-3 bg-custom-bluegreen text-white font-semibold rounded-md hover:bg-opacity-90 transition duration-300"> -->
              <!-- Get Started -->
            <!-- </button> -->
        <!-- </div> -->
      <!--  -->
    <!-- </div> -->
    <!--  -->
    <!-- Slideshow Container -->
    <!-- <div class="relative w-full max-w-full h-screen-90 overflow-hidden"> -->
          <!-- <div v-for="(image, index) in images" :key="index" :class="['absolute top-0 left-0 w-full h-full transition-opacity duration-1000', { 'opacity-0': currentImage !== index, 'opacity-100': currentImage === index }]"> -->
              <!-- <img :src="`/images/${image}`" alt="Slideshow Image" class="w-full h-full object-cover"> -->
          <!-- </div> -->
<!--  -->
          <!-- Button Container -->
          <!-- <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 z-10"> -->
              <!-- <button @click="prevImage" class="bg-white bg-opacity-50 p-2 rounded-full"> -->
                  <!-- <img src="../public/images/Back.png" alt="Previous" class="w-6 h-6"> -->
              <!-- </button> -->
              <!-- <button @click="nextImage" class="bg-white bg-opacity-50 p-2 rounded-full"> -->
                  <!-- <img src="../public/images/Forward.png" alt="Next" class="w-6 h-6"> -->
              <!-- </button> -->
          <!-- </div> -->
      <!-- </div> -->
    <!-- </div> -->

<div class="flex justify-center items-center py-10 w-full relative">
    <!-- Text Container -->
    <div class="absolute left-10 top-1/4 z-20 text-white max-w-md mx-44">
        <h1 class="text-6xl font-medium mb-4 text-custom-bluegreen">Online Auctions Made Easy</h1>
        <div class="w-full max-w-4xl">
            <p class="text-xl text-justify text-custom-bluegreen">Experience a seamless and convenient way to participate in online auctions, from anywhere and at any time.</p>
        </div>
        
        <div class="my-4">
            <button class="px-6 py-3 bg-custom-bluegreen text-white font-semibold rounded-md hover:bg-opacity-90 transition duration-300">
              Get Started
            </button>
        </div>
    </div>
    
    <!-- Placeholder for Slideshow with Images -->
    <div class="relative w-full  max-w-full h-screen-90 overflow-hidden">
        <div class="absolute top-0 right-0 flex flex-col items-end space-y-4 p-4">
            <div class="relative w-1/2 h-1/2">
                <img src="/images/posternew.png" alt="Image 1" class="w-full h-full object-cover">
            </div>
          
        </div>
    </div>
</div>



    <div class="mx-auto justify-center items-center w-3/5 my-24">
    <div class="flex justify-center">
        <div class="text-center mx-4 w-3/5">
            <img class="w-24 h-24 mx-auto" src="../public/images/usermanage.png">
            <div class="mt-2">
                Users are provided with the option to choose whether they want to register as an Auctioneer or a Bidder.
            </div>
        </div>
        <div class="text-center mx-4 w-3/5">
            <img class="w-24 h-24 mx-auto" src="../public/images/CMS.png">
            <div class="mt-2">
              a user-friendly interface specifically designed for auctioneers to create new auction listings.
            </div>
        </div>
        <div class="text-center mx-4 w-3/5">
            <img class="w-24 h-24 mx-auto" src="../public/images/Transaction.png">
            <div class="mt-2">
              bidders have the option to place bids on auction listings with different bidding types, including lowest bid and offer-type.
            </div>
        </div>
    </div>
    <div class="flex justify-center mt-4">
        <div class="text-center mx-4 w-1/3">
            <img class="w-24 h-24 mx-auto" src="../public/images/payment.png">
            <div class="mt-2">
              The transaction is facilitated by payment gateways or processors, 
              which securely transmit payment information, such as credit or debit card details, bank account information, or digital wallet credentials.
            </div>
        </div>
        <div class="text-center mx-4 w-1/3">
            <img class="w-24 h-24 mx-auto" src="../public/images/admin.png">
            <div class="mt-2">
              The platform provides administrators with dependable user management tools, allowing them to track and monitor user account activities, 
              including registrations, updates, logs and suspensions.

            </div>
        </div>
    </div>
</div>

   
    
    
    <!-- Footer -->
    <NuxtLayout name="footer"></NuxtLayout>
  </div>
</template> 

<script setup>
import { ref } from 'vue';

const intervalDuration = 8000; // Interval duration in milliseconds (3 seconds)
let intervalId = null;

const showForm = ref(false);

const images = ref([
  'posternew.png',
  
]);

function startSlideshow() {
  intervalId = setInterval(nextImage, intervalDuration);
}

function stopSlideshow() {
  if (intervalId) {
    clearInterval(intervalId);
  }
}

onMounted(() => {
  startSlideshow();
});

onUnmounted(() => {
  stopSlideshow();
});


const currentImage = ref(0);

function toggleForm() {
  showForm.value = !showForm.value;
}

function nextImage() {
  currentImage.value = (currentImage.value + 1) % images.value.length;
}

function prevImage() {
  currentImage.value = (currentImage.value - 1 + images.value.length) % images.value.length;
}



</script>

<style>
/* Styles for the overlay */
.bg-gray-900 {
  background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity as needed */
}
</style>
