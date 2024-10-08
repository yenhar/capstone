<template>
    <div>
        <!-- Responsive Navbar -->
        <nav class=" top-0 left-0 right-0 px-3 py-3 flex justify-between bg-white shadow-md z-50">
            <div class="nav-start flex flex:justify-between">
                <div class="text-white text-2xl">
                    <a class="logo" href="/">
                    <img 
                        src="/public/images/auctionwave-logo-final.png" 
                        class="h-12 object-contain" 
                        alt="Logo"
                    />
                    </a>
                </div>
                <!--Button-->
                <div class="hidden md:flex items-center mt-2 space-x-2">
                    <ul class="flex flex-col md:flex-row md:space-x-6">
                        <li><a class="flex items-center px-2 py-2 text-black text-lg font-semibold hover:text-[#005262]" href="#">Home</a></li>
                        <li><a class="flex items-center px-2 py-2 text-black text-lg font-semibold hover:text-[#005262]" href="#">History</a></li>
                    </ul>
                    <!-- Help Dropdown Button -->
                    <div class="relative">
                        <button @click="toggleHelpDropdown" class="flex items-center px-1 py-2 text-black text-lg font-semibold hover:text-[#005262]">
                            <i class="bx bx-chevron-down ml-4" aria-hidden="true"></i>
                            Help
                        </button>
                        <div v-if="helpDropdownOpen" class="absolute left-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#E6EEEF]">
                                <svg class="w-6 h-6 item-center text-gray-800 dark:text-black" 
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                                        width="24" 
                                        height="24" 
                                        fill="none" 
                                        viewBox="0 0 24 24"
                                    >
                                    <path stroke="currentColor" 
                                        stroke-linecap="round" 
                                        stroke-linejoin="round" 
                                        stroke-width="1.5" 
                                        d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>How to Bid
                            </a>

                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#E6EEEF]">
                                <svg class="w-6 h-6 text-gray-800 flex dark:text-black" 
                                        aria-hidden="true" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="24" 
                                        height="24" 
                                        fill="none" 
                                        viewBox="0 0 24 24"
                                    >
                                    <path stroke="currentColor" 
                                        stroke-linecap="round" 
                                        stroke-linejoin="round" 
                                        stroke-width="1.5" 
                                        d="M18 9V4a1 1 0 0 0-1-1H8.914a1 1 0 0 0-.707.293L4.293 7.207A1 1 0 0 0 4 7.914V20a1 1 0 0 0 1 1h6M9 3v4a1 1 0 0 1-1 1H4m11 13a11.426 11.426 0 0 1-3.637-3.99A11.139 11.139 0 0 1 10 11.833L15 10l5 1.833a11.137 11.137 0 0 1-1.363 5.176A11.425 11.425 0 0 1 15.001 21Z"/>
                                </svg>Privacy Policy
                            </a>

                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#E6EEEF]">
                                <svg class="w-6 h-6 text-gray-800 dark:text-black" 
                                        aria-hidden="true" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="24" 
                                        height="24" 
                                        fill="none" 
                                        viewBox="0 0 24 24"
                                    >
                                    <path stroke="currentColor" 
                                        stroke-linecap="round" 
                                        stroke-linejoin="round" 
                                        stroke-width="1.5"
                                        d="M14.079 6.839a3 3 0 0 0-4.255.1M13 20h1.083A3.916 3.916 0 0 0 18 16.083V9A6 6 0 1 0 6 9v7m7 4v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z"/>
                                </svg>Contact Support
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#E6EEEF]">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke-width="1.5" 
                                        stroke="currentColor" 
                                        class="size-6 dark:text-black">
                                    <path stroke-linecap="round" 
                                        stroke-linejoin="round" 
                                        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                                </svg>Terms & Condition
                            </a>
                        </div>
                    </div>
                </div>
                <!-- Mobile Menu Button -->
                <div class="md:hidden">
                    <button @click="toggleMenu" class="text-gray-300 focus:outline-none">
                        <svg class="h-6 w-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" 
                                stroke-linejoin="round" 
                                stroke-width="2" 
                                d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            <!--Search-->
            <div class=" flex items-center px-4 space-x-5">
                <div class="relative inline-block flex item-center">
                <form action="">
                    <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        type="search" 
                        name="search" 
                        placeholder="Search">
                    <button type="submit" class="absolute right-0 mt-2 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="2" 
                            stroke="currentColor" 
                            class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </form>
                </div>
    
                <div class="relative flex items-center"> 
                    <!--Icon (Envelop)-->
                    <button class="text-gray-800 hover:text-[#005262] focus:outline-none ">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="2" 
                            stroke="currentColor" 
                            class="size-7">
                            <path stroke-linecap="round" 
                                stroke-linejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </button>        
                </div>
        
                <!--Notification-->
                <div class="relative inline-block flex item-center">
                    <!-- Icon (Bell)  -->
                    <button class="text-gray-800 hover:text-[#005262] focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke-width="2" 
                                stroke="currentColor" 
                                class="size-7">
                            <path stroke-linecap="round" 
                                stroke-linejoin="round" 
                                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                    </button>
                    <!-- Notification Badge  -->
                    <span class="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span>
                </div>
                <!-- Profile Image -->
                <div class="relative inline-block flex item-center ">
                    <button type="button" 
                        class="flex item-center text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" 
                        id="user-menu-button" 
                        aria-expanded="false" 
                        data-dropdown-toggle="user-dropdown" 
                        data-dropdown-placement="bottom">
                        <span class="sr-only">Open user menu</span>
                        <img class="w-10 h-10 rounded-full" src="../public/images/Mizuho.jpg">
                    </button> 
                </div>
            </div>
            <!-- Mobile Menu -->
            <div v-if="isMenuOpen" class="md:hidden bg-[#005262] space-y-2 p-4">
                <a href="#" class="block text-gray-300 hover:text-white">Home</a>
                <a href="#" class="block text-gray-300 hover:text-white">About</a>
                <a href="#" class="block text-gray-300 hover:text-white">History</a>
                <!-- Help Dropdown Button for Mobile -->
                <div>
                    <button @click="toggleHelpDropdown" 
                        class="text-white w-full text-left py-2">Help
                    </button>
                    <div v-if="helpDropdownOpen" class="space-y-2 bg-white">
                        <a href="#" class=" text-gray-300 hover:text-white">FAQ</a>
                        <a href="#" class="block text-gray-300 hover:text-white">Support</a>
                        <a href="#" class="block text-gray-300 hover:text-white">Contact</a>
                    </div>
                </div>
            </div>
        </nav>

        
    </div>
</template>
  
<script>

export default {
  data() {
    return {
      isMenuOpen: false,
      helpDropdownOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleHelpDropdown() {
      this.helpDropdownOpen = !this.helpDropdownOpen;
    },
    handleClickOutside(event) {
      // Check if click was outside the dropdown
      if (!this.$el.contains(event.target)) {
        this.helpDropdownOpen = false;
      }
    }
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  }
};
</script>
  <style>
  /* You can add custom styles here if needed */
  </style>