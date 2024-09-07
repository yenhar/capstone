<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <!-- Main content -->
    <div class="flex-grow">
      <!-- Your existing content here -->
      <!-- <nav class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div> <img src="/public/images/auctionwave-logo-final.png" class="h-10" alt="Logo" /></div>
        <div class="flex justify-end items-center px-44  h-16">
          <div class="px-5 font-medium text-white bg-custom-bluegreen rounded-md cursor-pointer h-3/6 flex items-center justify-center" @click="toggleForm">Sign up</div>
          <div class="px-5 font-medium text-black cursor-pointer hover:bg-gray-100 rounded-md transition duration-300 flex items-center">About</div>
        </div>
      </nav> -->

      <nav class="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-16">
        <div class="flex justify-between items-center px-10 h-full">
          <img src="/public/images/auctionwave-logo-final.png" class="h-10 object-contain" alt="Logo" />
          <div class="flex items-center space-x-4">
            <div class="px-5 py-2 font-medium text-white bg-custom-bluegreen rounded-md cursor-pointer flex items-center justify-center hover:bg-white hover:text-custom-bluegreen hover:border hover:border-custom-bluegreen" @click="toggleForm">Sign in</div>
          </div>
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
            <button type="button" class="border w-5/6 bg-green-500 rounded-lg text-white h-14 hover:shadow-inner">Create new account</button>  
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

<div class="flex justify-between items-center w-full  bg-custom-bluegreen">
    <!-- Text Container (50% width on the left) -->
    <div class="w-full text-white max-w-xl text-left ml-44 animate-slide-in-left">
        <h1 class="text-7xl font-bold mb-4 text-white">Online Auctions Made Easy</h1>
        <div class ="full">
          <p class="text-2xl font-semi-bold text-white mb-6">Experience a seamless and convenient way to participate in online auctions, from anywhere and at any time.</p>
        </div>
        
        
        <button class="px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-opacity-90 transition duration-300 hover:bg-white hover:text-custom-bluegreen hover:border hover:border-custom-bluegreen">
          Start Browsing
        </button>
    </div>

    <!-- Image Container (50% width on the right) -->
    <div class="w-1/2 flex justify-center items-center ">
        <img src="/public/images/5989.jpg" alt="Image" class="w-full h-fit rounded-2xl">
    </div>
</div>

<!------------------------------------------------------------->



<!------------------------------------------------------------->

<div class="mx-auto w-9/12 bg-white my-12 rounded-2xl">
  <div class="text-6xl font-bold w-full mt-32 text-custom-bluegreen drop-shadow-3xl text-center">Products Offered</div>
<div class="mx-auto justify-center items-center w-10/12 mt-24 mb-10 transform transition-all hover:-translate-y-2 duration-300 hover:scale-105 ">
    <div class="flex justify-center">
        <div class="text-center  w-3/5">
            <div class="mt-2 rounded-md overflow-hidden hover:drop-shadow-2xl ">
              <img src="public/images/art.jpg" alt="Image 1" class="w-full h-full object-cover">
            </div>
        </div>  
        <div class="w-3/5 mt-4">  
            <div class="bg-custom-bluegreen my-24 py-16 rounded-r-lg hover:drop-shadow-2xl">
              <h1 class="text-3xl font-medium text-white mx-14">Art</h1>
                <p class="mx-14 text-white text-lg">Auction items include paintings, sculptures, and other creative works.</p> 
            </div>
           
        </div>
    </div>
</div>

<div class="mx-auto justify-center items-center w-10/12 mb-10 my-24 transform transition-all hover:-translate-y-2 duration-300 hover:scale-105 ">
    <div class="flex justify-center">
      <div class=" w-3/5 mt-4">  
        <div class="bg-custom-bluegreen my-24 py-16 rounded-l-lg hover:drop-shadow-2xl">
              <h1 class="text-3xl font-medium text-white mx-14">furniture</h1>
                <p class="mx-14 text-white text-lg">Browse a diverse selection of furniture, from modern to antique pieces.</p> 
            </div>  
        </div>
        <div class="text-center  w-3/5">
            <div class="mt-2 rounded-md overflow-hidden hover:drop-shadow-2xl">
              <img src="public/images/furniture.jpg" alt="Image 1" class="w-full h-full object-cover">
            </div>
        </div>
    </div>
</div>

<div class="mx-auto justify-center items-center w-10/12 mb-10 my-24 transform transition-all hover:-translate-y-2 duration-300 hover:scale-105">
    <div class="flex justify-center">
        <div class="text-center  w-3/5">
            <div class="mt-2 rounded-md overflow-hidden hover:drop-shadow-2xl">
              <img src="public/images/electronics.jpg" alt="Image 1" class="w-full h-full object-cover">
            </div>
        </div>
        <div class=" w-3/5 mt-4">  
            <div class="bg-custom-bluegreen my-24 py-16 rounded-r-lg">
              <h1 class="text-3xl font-medium text-white mx-14 ">Electronics</h1>
                <p class="mx-14 text-white text-lg">Auction items cover gadgets like smartphones, laptops, and audio equipment.</p> 
            </div>  
        </div>
    </div>
</div>

<div class="mx-auto justify-center items-center w-10/12 mb-10 my-24 transform transition-all hover:-translate-y-2 duration-300 hover:scale-105 ">
    <div class="flex justify-center">
      <div class=" w-3/5 mt-4">  
            <div class="bg-custom-bluegreen my-24 py-16 rounded-l-lg">
              <h1 class="text-3xl font-medium text-white mx-14">Collectibles</h1>
                <p class="mx-14 text-white text-lg">Explore rare and valuable items such as coins, stamps, and memorabilia. Each piece is selected for its uniqueness.</p> 
            </div>  
      </div>
        <div class="text-center  w-3/5">
            <div class="mt-2 rounded-md overflow-hidden hover:drop-shadow-2xl">
              <img src="public/images/collectibles.jpg" alt="Image 1" class="w-full h-full object-cover">
            </div>
        </div>
    </div>
</div>

<div class="mx-auto justify-center items-center w-10/12 my-24 transform transition-all hover:-translate-y-2 duration-300 hover:scale-105 ">
    <div class="flex justify-center">
        <div class="text-center w-3/5">
            <div class="mt-2 rounded-md overflow-hidden hover:drop-shadow-2xl">
              <img src="public/images/realestate.jpg" alt="Image 1" class="w-full h-full object-cover">
            </div>
        </div>
        <div class=" w-3/5 mt-4">  
            <div class="bg-custom-bluegreen my-24 py-16 rounded-r-lg ">
              <h1 class="text-3xl font-medium text-white mx-14">Real estate</h1>
                <p class="mx-14 text-white text-lg">Bid on a range of properties, including homes, commercial buildings, and land. Each listing provides detailed information</p> 
            </div>  
        </div>
    </div>
</div>



<!----------------------------------------------------------------------------------->


</div>

<div class="w-9/12 bg-white mb-12 rounded-2xl mx-auto">
  <div class="text-6xl font-bold w-full my-24 text-custom-bluegreen drop-shadow-3xl text-center">How It Works</div>
    <div class="mx-auto justify-center items-center w-5/6 my-24">
      <div class="flex justify-center">
          <div class=" mx-4 w-3/5 my-4">
              <img class="w-24 h-24 mx-auto" src="../public/images/usermanage.png">
              <div class="mt-2 text-center">
                  Users are provided with the option to choose whether they want to register as an Auctioneer or a Bidder.
              </div>
          </div>
          <div class=" mx-4 w-3/5 my-4">
              <img class="w-24 h-24 mx-auto" src="../public/images/CMS.png">
              <div class="mt-2 text-center">
                a user-friendly interface specifically designed for auctioneers to create new auction listings.
              </div>
          </div>
          <div class=" mx-4 w-3/5 my-4">
              <img class="w-24 h-24 mx-auto" src="../public/images/Transaction.png">
              <div class="mt-2 text-center">
                bidders have the option to place bids on auction listings with different bidding types, including lowest bid and offer-type.
              </div>
          </div>
      </div>
      <div class="flex justify-center mt-4">
          <div class=" mx-4 w-1/3 my-4">
              <img class="w-24 h-24 mx-auto" src="../public/images/payment.png">
              <div class="mt-2 text-center">
                The transaction is facilitated by payment gateways or processors, 
                which securely transmit payment information, such as credit or debit card details.
              </div>
          </div>
          <div class=" mx-4 w-1/3 my-4">
              <img class="w-24 h-24 mx-auto" src="../public/images/admin.png">
              <div class="mt-2 text-center">
                The platform provides administrators with dependable user management tools, allowing them to track and monitor user account activities.
              </div>
          </div>
      </div>
</div>
</div>

<!----------------------------------------------------------------------------------->


<!--------------------------------------------------------------->
    









 
   
    
    
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

/* assets/css/custom.css */
.magnify-container {
    position: relative;
    overflow: hidden;
}
.magnify-image {
    transition: transform 0.3s ease;
}
.magnify-container:hover .magnify-image {
    transform: scale(1.5); /* Adjust zoom level as needed */
}
.magnify-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    pointer-events: none;
}
</style>
