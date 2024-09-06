<template>
	<NuxtLayout name="navbar">
            
	</NuxtLayout>
    <div class="w-full h-screen bg-gray-100">
        <div class="w-1/2 h-screen bg-white mx-auto">
               	<!-- Auction Listings -->
              <div class="grid grid-cols-4 cursor pointer py-28 px-24 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
                 <div class="bg-white p-4 rounded-lg shadow-md">
                     <!-- Image on top of the card -->
                     <img src="/public/images/22062.jpg" alt="Auction Image" class="w-full h-auto mb-4 rounded-lg">
                
                      <!-- Card content -->
                     <h3 class="text-2xl font-semibold mb-5"></h3>
                     <p class="text-gray-700 mb-2 text-2xl font-medium">Auction name</p>
                     <p class="text-gray-500 mb-2">Location: </p>
                     <p class="text-gray-500 mb-4">Bidding Type: </p>
                     <div class="flex justify-left">
                         <NuxtLink :to="`#`" class="bg-blue-500 text-white px-4 py-2 rounded-lg">
                             View Auction
                         </NuxtLink>
                     </div>
                 </div>
             </div>
        </div>
     
    </div>

    
</template>

<style scoped>
/* Include the same CSS for magnify effect here if not using a global stylesheet */
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





