<template>
  <div class="flex flex-col min-h-screen bg-custom-blue2">
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
            <div class="px-5 py-2 font-medium text-white  bg-custom-bluegreen rounded-md cursor-pointer flex items-center justify-center hover:bg-green-500 hover:text-white border-custom-bluegreen" @click="toggleForm">Sign in</div>
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
            <button type="button" class="border w-5/6 bg-custom-blue2 rounded-lg text-gray-900 h-14 hover:shadow-inner">Create new account</button>  
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

<!-- <div class="flex justify-between items-center w-full my-32"> 
    Text Container (50% width on the left) 
    <div class="w-full text-white max-w-xl text-left ml-44 animate-slide-in-left">
        <h1 class="text-7xl font-bold mb-4 text-custom-bluegreen">Online Auctions Made Easy</h1>
        <div class ="full">
          <p class="text-2xl font-semi-bold text-custom-bluegreen my-4">Experience a seamless and convenient way to participate in online auctions, from anywhere and at any time.</p>
        </div>
        
        
        <button class="px-6 py-3 bg-green-500 text-white  text-lg font-semibold rounded-md hover:bg-opacity-90  hover:bg-white hover:text-green-500 position: sticky border border-green-500">
          Start Browsing
        </button>
    </div>

     Image Container (50% width on the right) 
    <div class="w-1/2 flex justify-center items-center">
        <img src="/public/images/5989.jpg" alt="Image" class="w-4/6 h-4/6"  >
    </div>
</div>
-->
<section class="bg-white dark:bg-gray-900 mt-16">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-custom-bluegreen dark:text-white italic">Online Auctions Made Easy</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Experience a seamless and convenient way to participate in online auctions, from anywhere and at any time.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg hover:bg-green-500 bg-custom-bluegreen hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-custom-bluegreen border border-custom-bluegreen rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/public/images/5989.jpg" alt="mockup">
        </div>                
    </div>
</section>
<!------------------------------------------------------------->

<section class="py-24 ">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div class="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
                  <div class="relative w-full text-center lg:text-left lg:w-2/4">
                      <h2 class="text-4xl font-bold text-custom-bluegreen leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">Enjoy the finest features with our products</h2>
                  </div>
                  <div class="relative w-full text-center  lg:text-left lg:w-2/4">
                      <p class="text-lg font-normal text-gray-500 mb-5">We simplify your online auction experience, handling all transactions smoothly so you can focus on winning your bids with ease.</p> 
                      <a href="#" class="flex flex-row items-center justify-center gap-2 text-base font-semibold text-custom-bluegreen lg:justify-start hover:text-green-500 ">Try now <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5" stroke="#005262" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          </a> 
                  </div>
              </div>
              <div class="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                  <div class="group relative w-full bg-white rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-custom-bluegreen">
                      <div class="bg-gray-100 rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z" stroke="#005262" stroke-width="2"></path>
                          </svg>
                              
                      </div>
                      <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Easy Payment</h4>
                      <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                        The transaction is facilitated by payment gateways or processors, 
                        such as credit or debit card details. 
                      </p>
                  </div>
                  <div class="group relative w-full bg-white rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-custom-bluegreen">
                      <div class="bg-gray-100 rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.375 15.8571C16.1009 15.8571 17.5 14.458 17.5 12.7321C17.5 11.0062 16.1009 9.6071 14.375 9.6071C12.6491 9.6071 11.25 11.0062 11.25 12.7321C11.25 14.458 12.6491 15.8571 14.375 15.8571ZM14.375 15.8571V20.8571M3.75 13.2264V15.2343C3.75 17.6868 3.75 18.9131 4.27747 19.9685C4.80493 21.0239 5.78567 21.76 7.74715 23.2322L8.57248 23.8516C11.4626 26.0208 12.9077 27.1054 14.5753 27.1054C16.243 27.1054 17.688 26.0208 20.5782 23.8516L21.4035 23.2322C23.365 21.76 24.3457 21.0239 24.8732 19.9685C25.4006 18.9131 25.4006 17.6868 25.4006 15.2343V13.2264C25.4006 9.95932 25.4006 8.32576 24.546 7.05852C23.6913 5.79128 22.1768 5.17918 19.1477 3.95499L18.3223 3.62144C16.4724 2.87381 15.5475 2.5 14.5753 2.5C13.6032 2.5 12.6782 2.87381 10.8283 3.62144L10.003 3.95499C6.97389 5.17919 5.45934 5.79128 4.60467 7.05852C3.75 8.32576 3.75 9.95932 3.75 13.2264Z" stroke="#005262" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                              
                      </div>
                      <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Safe Transaction</h4>
                      <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                          We have the most up-to-date security to support the security of all our customers in carrying out all transactions.  
                      </p>
                  </div>
                  <div class="group relative w-full bg-white rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-custom-bluegreen">
                      <div class="bg-gray-100 rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.0067 10V15.6652C15.0067 16.0358 15.1712 16.3873 15.4556 16.6248L18.75 19.375M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="#005262" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                              
                      </div>
                      <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Fast Customer Service </h4>
                      <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                          Provide Customer Service For Those Of You Who Have Problems 24 Hours A Week  
                      </p>
                  </div>
                  <div class="group relative w-full bg-white rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-custom-bluegreen">
                      <div class="bg-gray-100 rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="#005262" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                              
                      </div>
                      <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Quick Transaction</h4>
                      <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                          We provide faster transaction speeds than competitors, so money arrives and is received faster. 
                      </p>
                  </div>
              </div>
              <div class="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:justify-center lg:gap-x-8 mt-10">
            <div class="group relative w-full bg-white rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-custom-bluegreen">
              <div class="bg-custom-blue2 rounded-full flex justify-center items-center mb-5 w-14 h-14">
                  <img src="../public/images/edit.png">
              </div>
                <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">New Feature 1</h4>
                <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">Description for the new feature 1.</p>
            </div>

            <div class="group relative w-full bg-white rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-custom-bluegreen">
                <div class="bg-custom-blue2 rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                    
                </div>
                <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">New Feature 2</h4>
                <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">Description for the new feature 2.</p>
            </div>
        </div>
        </div>
      </section>

<!------------------------------------------------------------->

<div class="w-8/12 mx-auto">
    <div class="container mx-auto  my-32 flex flex-col items-center gap-16">
      <div class="flex flex-col gap-16">
        <div class="flex flex-col gap-2 text-center">
          <h2 class="mb-2 text-3xl font-bold text-custom-bluegreen lg:text-4xl">
            How AuctionWave works?
          </h2>
          <p class="text-base font-medium leading-7 text-dark-grey-600">
            Tellus rutrum tellus pellentesque eu tincidunt tortor condimentum.
          </p>
        </div>
      </div>
      <div class="flex w-full flex-col items-center justify-between gap-y-10 lg:flex-row lg:gap-x-8 lg:gap-y-0 xl:gap-x-10">
        <div class="flex items-start gap-4">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-solid border-custom-bluegreen bg-transparent text-purple-blue-500">
                <span class="text-base font-bold leading-7">1</span>
            </div>
          <div class="flex flex-col">
            <h3 class="mb-2 text-base font-bold leading-tight text-dark-grey-900">
              Create your Account
            </h3>
            <p class="text-base font-medium leading-7 text-dark-grey-600">
              Condimentum vit pellemsque habitant morbi at molestie.
            </p>
          </div>
        </div>
        <div class="rotate-90 lg:rotate-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
            <g clip-path="url(#clip0_3346_6663)">
              <path
                d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                fill="#68769F"
              />
            </g>
            <defs>
              <clipPath id="clip0_3346_6663">
                <rect width="42" height="42" fill="white" transform="translate(0.666748)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="flex items-start gap-4">
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-solid border-custom-bluegreen bg-transparent text-purple-blue-500">
            <span class="text-base font-bold leading-7">2</span>
          </div>
          <div class="flex flex-col">
            <h3 class="mb-2 text-base font-bold leading-tight text-dark-grey-900">
              Setup your Account
            </h3>
            <p class="text-base font-medium leading-7 text-dark-grey-600">
              Condimentum vit pellemsque habitant morbi at molestie.
            </p>
          </div>
        </div>
        <div class="rotate-90 lg:rotate-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
            <g clip-path="url(#clip0_3346_6663)">
              <path
                d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                fill="#68769F"
              />
            </g>
            <defs>
              <clipPath id="clip0_3346_6663">
                <rect width="42" height="42" fill="white" transform="translate(0.666748)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="flex items-start gap-4">
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-solid border-custom-bluegreen bg-transparent text-purple-blue-500">
            <span class="text-base font-bold leading-7">3</span>
          </div>
          <div class="flex flex-col">
            <h3 class="mb-2 text-base font-bold leading-tight text-dark-grey-900">
              Start creating with Horizon
            </h3>
            <p class="text-base font-medium leading-7 text-dark-grey-600">
              Condimentum vit pellemsque habitant morbi at molestie.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

<!------------------------------------------------------------->


  <div class="text-4xl font-bold w-full mt-32 text-custom-bluegreen  text-center">Products Offered</div>
  <div class="mx-auto justify-center items-center w-8/12 mt-24 mb-10 transform transition-all hover:-translate-y-2 duration-300 hover:scale-105 ">
      <div class="flex justify-center">
          <div class="text-center  w-3/5">
              <div class="mt-2 rounded-md overflow-hidden  ">
                <img src="public/images/art.jpg" alt="Image 1" class="w-full h-full object-cover">
              </div>
          </div>  
          <div class="w-3/5 mt-4">  
              <div class="bg-custom-bluegreen my-24 py-16 rounded-r-lg ">
                <h1 class="text-3xl font-medium text-white mx-14 my-2">Art</h1>
                  <p class="mx-14 text-white text-2xl font-light">Auction items include paintings, sculptures, and other creative works.</p> 
              </div>
            
          </div>
      </div>
</div>

  <div class="mx-auto justify-center items-center w-8/12 mb-10 my-24 transform transition-all hover:-translate-y-2 duration-300 hover:scale-105 ">
      <div class="flex justify-center">
        <div class=" w-3/5 mt-4">  
          <div class="bg-custom-bluegreen my-24 py-16 rounded-l-lg ">
                <h1 class="text-3xl font-medium text-white mx-14 my-2">Furniture</h1>
                  <p class="mx-14 text-white font-light text-2xl">Browse a diverse selection of furniture, from modern to antique pieces.</p> 
              </div>  
          </div>
          <div class="text-center  w-3/5">
              <div class="mt-2 rounded-md overflow-hidden ">
                <img src="public/images/furniture.jpg" alt="Image 1" class="w-full h-full object-cover">
              </div>
          </div>
      </div>
  </div>

  <div class="mx-auto justify-center items-center w-8/12 mb-10 my-24 transform transition-all hover:-translate-y-2 duration-300 hover:scale-105">
      <div class="flex justify-center">
          <div class="text-center  w-3/5">
              <div class="mt-2 rounded-md overflow-hidden ">
                <img src="public/images/electronics.jpg" alt="Image 1" class="w-full h-full object-cover">
              </div>
          </div>
          <div class=" w-3/5 mt-4">  
              <div class="bg-custom-bluegreen my-24 py-16 rounded-r-lg">
                <h1 class="text-3xl font-medium text-white mx-14 my-2 ">Electronics</h1>
                  <p class="mx-14 text-white text-2xl font-light">Auction items cover gadgets like smartphones, laptops, and audio equipment.</p> 
              </div>  
          </div>
      </div>
  </div>

  <div class="mx-auto justify-center items-center w-8/12 mb-10 my-24 transform transition-all hover:-translate-y-2 duration-300 hover:scale-105 ">
      <div class="flex justify-center">
        <div class=" w-3/5 mt-4">  
              <div class="bg-custom-bluegreen my-24 py-16 rounded-l-lg">
                <h1 class="text-3xl font-medium text-white mx-14 my-2">Collectibles</h1>
                  <p class="mx-14 text-white text-2xl font-light">Explore rare and valuable items such as coins, stamps, and memorabilia. </p> 
              </div>  
        </div>
          <div class="text-center  w-3/5">
              <div class="mt-2 rounded-md overflow-hidden ">
                <img src="public/images/collectibles.jpg" alt="Image 1" class="w-full h-full object-cover">
              </div>
          </div>
      </div>
  </div>

  <div class="mx-auto justify-center items-center w-8/12 my-24 transform transition-all hover:-translate-y-2 duration-300 hover:scale-105 ">
      <div class="flex justify-center">
          <div class="text-center w-3/5">
              <div class="mt-2 rounded-md overflow-hidden">
                <img src="public/images/realestate.jpg" alt="Image 1" class="w-full h-full object-cover">
              </div>
          </div>
          <div class=" w-3/5 mt-4">  
              <div class="bg-custom-bluegreen my-24 py-16 rounded-r-lg ">
                <h1 class="text-3xl font-medium text-white mx-14 my-2">Real estate</h1>
                  <p class="mx-14 text-white text-2xl font-light">Bid on a range of properties, including homes, commercial buildings, and land.</p> 
              </div>  
          </div>
      </div>




<!----------------------------------------------------------------------------------->


</div>


  <!-- <div class="text-6xl font-bold w-full my-24 text-custom-bluegreen drop-shadow-3xl text-center">How It Works</div>
    <div class="mx-auto justify-center items-center w-5/6 my-24">
      <div class="flex justify-center">
          <div class=" mx-4 w-3/5 my-4">
              <img class="w-24 h-24 mx-auto" src="../public/images/usermanage.png">
              <div class="mt-2 text-base text-center">
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

</div> -->
<div class="mx-auto px-5 w-full mb-32">
    <div class="flex items-start max-w-6xl mx-auto">
        <!-- Image Section -->
        <div class="flex-shrink-0 w-1/2 pr-8">
            <img src="/public/images/faq.jpg" alt="Description of image" class="w-full h-auto">
        </div>

        <!-- FAQ Section -->
        <div class="w-2/3">
            <div class="flex flex-col items-start">
                <h2 class="mt-5 text-custom-bluegreen text-4xl font-bold tracking-tight md:text-5xl">FAQ</h2>
                <p class="mt-3 text-lg text-neutral-500 md:text-xl">Frequently asked questions</p>
            </div>
            <div class="mt-8 grid max-w-xl divide-y divide-neutral-200">
                <div class="py-5">
                    <details class="group">
                        <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                            <span class="text-xl"> How does the billing work?</span>
                            <span class="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p class="group-open:animate-fadeIn mt-3 text-neutral-600">Springerdata offers a variety of
                            billing options, including monthly and annual subscription plans, as well as pay-as-you-go
                            pricing for certain services. Payment is typically made through a credit card or other
                            secure online payment method.
                        </p>
                    </details>
                </div>
                <div class="py-5">
                    <details class="group">
                        <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                            <span class="text-xl"> Can I get a refund for my subscription?</span>
                            <span class="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p class="group-open:animate-fadeIn mt-3 text-neutral-600">We offer a 30-day money-back
                            guarantee for most of its subscription plans. If you are not satisfied with your
                            subscription within the first 30 days, you can request a full refund. Refunds for
                            subscriptions that have been active for longer than 30 days may be considered on a
                            case-by-case basis.
                        </p>
                    </details>
                </div>
                <div class="py-5">
                    <details class="group">
                        <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                            <span class="text-xl"> How do I cancel my subscription?</span>
                            <span class="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p class="group-open:animate-fadeIn mt-3 text-neutral-600">To cancel your subscription, you can
                            log in to your account and navigate to the subscription management page. From there, you
                            should be able to cancel your subscription and stop future billing.
                        </p>
                    </details>
                </div>
                <div class="py-5">
                    <details class="group">
                        <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                            <span class="text-xl"> Is there a free trial?</span>
                            <span class="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p class="group-open:animate-fadeIn mt-3 text-neutral-600">We offer a free trial of our software
                            for a limited time. During the trial period, you will have access to a limited set of
                            features and functionality, but you will not be charged.
                        </p>
                    </details>
                </div>
                <div class="py-5">
                    <details class="group">
                        <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                            <span class="text-xl"> How do I contact support?</span>
                            <span class="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p class="group-open:animate-fadeIn mt-3 text-neutral-600">If you need help with our platform or
                            have any other questions, you can contact the company's support team by submitting a support
                            request through the website or by emailing support@ourwebsite.com.
                        </p>
                    </details>
                </div>
                <div class="py-5">
                    <details class="group">
                        <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                            <span class="text-xl"> Do you offer any discounts or promotions?</span>
                            <span class="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p class="group-open:animate-fadeIn mt-3 text-neutral-600">We may offer discounts or promotions
                            from time to time. To stay up-to-date on the latest deals and special offers, you can sign
                            up for the company's newsletter or follow it on social media.
                        </p>
                    </details>
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

<script setup >

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
