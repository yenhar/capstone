<template>
    <NuxtLayout name="auctionernav"></NuxtLayout>
        <div class="min-h-screen w-full bg-custom-white-green shadow-xl rounded-lg flex overflow-x-auto">
            <div class=" min-h-screen w-64 bg-white px-4">
                <!-- Button -->
                <div class="h-16 flex items-center">
                    <button @click="openModal" class="w-48 mx-auto bg-custom-bluegreen hover:bg-custom-bluegreen hover:bg-opacity-80 flex items-center justify-center text-gray-100 py-2 rounded space-x-2 transition duration-150">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                        <span>Compose</span>
                    </button>
                    </div>
                    <!-- Modal -->
                    <div v-if="isModalOpen" @click="closeModalOutside" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 modal-background">
                    <!-- Modal Content -->
                    <div @click.stop class="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 class="text-xl font-semibold mb-4">Compose a New Message</h2>
                        <input v-model="newMessageTo" placeholder="To:" class="w-full p-2 mb-2 border rounded">
                        <input v-model="newMessageSubject" placeholder="Subject:" class="w-full p-2 mb-2 border rounded">
                        <textarea class="w-full h-32 p-2 border border-gray-300 rounded" placeholder="Write your message here..."></textarea>
                        <div class="flex justify-end mt-4 space-x-2">
                        <button @click="closeModal" class="bg-gray-300 hover:bg-custom-bluegreen hover:bg-opacity-40 hover:text-black text-white py-2 px-4 rounded">Close</button>
                        <button class="bg-custom-bluegreen hover:bg-custom-bluegreen hover:bg-opacity-40 hover:text-black text-white py-2 px-4 rounded">Send</button>
                        </div>
                    </div>
                </div>
                <div class="px-2 pt-2  pb-8 border-r border-gray-300">
                    <ul class="space-y-2">
                        <li>
                            <a class="hover:bg-custom-bluegreen hover:bg-opacity-25 hover:text-custom-bluegreen flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                                <span class="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                        class="h-5 w-5" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor">
                                        <path stroke-linecap="round" 
                                            stroke-linejoin="round" 
                                            stroke-width="2" 
                                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4">
                                        </path>
                                    </svg>
                                    <span>Inbox</span>
                                </span>
                                <span class="bg-custom-bluegreen bg-opacity-80 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">3</span>
                            </a>
                        </li>
                        <li>
                            <a class="hover:bg-custom-bluegreen hover:bg-opacity-25 hover:text-custom-bluegreen flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    class="h-5 w-5" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor">
                                    <path stroke-linecap="round" 
                                        stroke-linejoin="round" 
                                        stroke-width="2" 
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z">
                                    </path>
                                </svg>
                                <span>Snoozed</span>
                            </a>
                        </li>
                        <li>
                            <a class="hover:bg-custom-bluegreen hover:bg-opacity-25 hover:text-custom-bluegreen flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    class="h-5 w-5" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor">
                                    <path stroke-linecap="round" 
                                        stroke-linejoin="round" 
                                        stroke-width="2" 
                                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z">
                                    </path>
                                </svg>
                                <span>Important</span>
                            </a>
                        </li>
                        <li>
                            <a class="hover:bg-custom-bluegreen hover:bg-opacity-25 hover:text-custom-bluegreen flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5 "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20">
                                    </path>
                                </svg>
                                <span>Archive</span>
                            </a>
                        </li>
                        <li>
                            <a class="hover:bg-custom-bluegreen hover:bg-opacity-25 hover:text-custom-bluegreen flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    class="h-5 w-5 rotate-90" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor">
                                    <path stroke-linecap="round" 
                                        stroke-linejoin="round" 
                                        stroke-width="2" 
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8">
                                    </path>
                                </svg>
                                <span>Sent</span>
                            </a>
                        </li>
                        <li>
                            <a class="hover:bg-custom-bluegreen hover:bg-opacity-25 hover:text-custom-bluegreen flex items-center justify-between text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                                <span class="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                        class="h-5 w-5" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor">
                                        <path stroke-linecap="round" 
                                            stroke-linejoin="round" 
                                            stroke-width="2" 
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                                        </path>
                                    </svg>
                                    <span>Drafts</span>
                                </span>
                                <span class="bg-custom-bluegreen bg-opacity-80 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">1</span>
                            </a>
                        </li>
                        <li>
                            <a class="hover:bg-custom-bluegreen hover:bg-opacity-25 hover:text-custom-bluegreen flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    class="h-5 w-5" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor">
                                    <path stroke-linecap="round" 
                                        stroke-linejoin="round" 
                                        stroke-width="2" 
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z">
                                    </path>
                                </svg>
                                <span>Spam</span>
                            </a>
                        </li>
                        <li>
                            <a class="hover:bg-custom-bluegreen hover:bg-opacity-25 hover:text-custom-bluegreen flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    class="h-5 w-5" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor">
                                    <path stroke-linecap="round" 
                                        stroke-linejoin="round" 
                                        stroke-width="2" 
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                    </path>
                                </svg>
                                <span>Trash</span>
                            </a>
                        </li>
                    </ul> 
                </div>
            </div>
            <div class="flex-1 px-2 py-3" x-data="{ checkAll: false, filterMessages: false }">
                <div class="h-10 flex items-center">
                    <div class="flex items-center">
                        <div class="relative flex items-center ml-3 space-x-0.5">
                                <!-- Checkbox for selecting all -->
                                <input 
                                    @click="toggleCheckAll" 
                                    type="checkbox" 
                                    class="focus:ring-0"
                                />
                                
                                <!-- Button to toggle dropdown -->
                                <button @click="toggleFilterMessages">
                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    class="h-4 w-4" 
                                    viewBox="0 0 20 20" 
                                    fill="currentColor"
                                    >
                                    <path 
                                        fill-rule="evenodd" 
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                                        clip-rule="evenodd"
                                    ></path>
                                    </svg>
                                </button>
                                
                                <!-- Dropdown menu -->
                                <div 
                                    v-if="filterMessages" 
                                    v-click-outside="closeFilterMessages" 
                                    class="bg-gray-200 shadow-2xl absolute left-0 top-6 w-32 py-2 text-gray-900 rounded z-10"
                                >
                                    <button 
                                    v-for="option in filterOptions" 
                                    :key="option" 
                                    @click="applyFilter(option)" 
                                    class="w-full text-sm font-semibold py-1 hover:bg-custom-bluegreen hover:bg-opacity-25 hover:text-custom-bluegreen    "
                                    >
                                    {{ option }}
                                    </button>
                                </div>
                        </div>
                    </div>
                    <div class="flex items-center ml-2">
                        <div class="flex items-center ml-3">
                            <button title="Reload" class="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-custom-bluegreen hover:text-white transition duration-100">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    class="h-5 w-5" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor">
                                    <path stroke-linecap="round" 
                                        stroke-linejoin="round" 
                                        stroke-width="2" 
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <span class="bg-gray-300 h-6 w-[.5px] mx-3"></span>
                        <div class="flex items-center space-x-2">
                            <button title="Mark As Read" class="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-custom-bluegreen hover:text-white transition duration-100">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    class="h-5 w-5" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor">
                                    <path stroke-linecap="round" 
                                        stroke-linejoin="round" 
                                        stroke-width="2" 
                                        d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76">
                                    </path>
                                </svg>
                            </button>
                            <button title="Mark As Unread" class="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-custom-bluegreen hover:text-white transition duration-100">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    class="h-5 w-5" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor">
                                    <path stroke-linecap="round" 
                                        stroke-linejoin="round" 
                                        stroke-width="2" 
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                    </path>
                                </svg>
                            </button>
                                <button title="Delete" 
                                    class="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-custom-bluegreen hover:text-white transition duration-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                        class="h-5 w-5" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor">
                                        <path stroke-linecap="round" 
                                            stroke-linejoin="round" 
                                            stroke-width="2" 
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                        </path>
                                    </svg>
                                </button>
                        </div>
                        <span class="bg-gray-300 h-6 w-[.5px] mx-3"></span>
                        <!---->
                        <div class="flex items-center space-x-2">
                            <button title="Archive" class="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-custom-bluegreen hover:text-white transition duration-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5 "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div> 
                    <div class="bg-gray-100 mb-6">
                        <ul>
                            <li class="flex items-center border-y hover:bg-gray-200 px-2">
                                <input
                                type="checkbox"
                                class="focus:ring-0 border-2 border-gray-400"
                                v-model="checkAll"/>
                                <div
                                    @mouseover="messageHover = true"
                                    @mouseleave="messageHover = false"
                                    class="w-full flex items-center justify-between p-1 my-1 cursor-pointer"
                                    >
                                    <div class="flex items-center">
                                        <div class="flex items-center mr-4 ml-1 space-x-1">
                                            <!-- Star Button -->
                                            <button title="Not starred">
                                                <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="text-gray-500 hover:text-custom-bluegreen h-5 w-5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                    ></path>
                                                </svg>
                                            </button>
                                            <!-- Important Button -->
                                            <button title="Click to mark this email as important">
                                                <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="text-gray-500 hover:text-custom-bluegreen h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                
                                                >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                                ></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <!-- Message Info -->
                                        <span class="w-56 pr-2 truncate">Robert jims Aquino </span>
                                        <span class="w-64 truncate">Auctione for rare item</span>
                                        <span class="mx-1">-</span>
                                        <span class="w-96 text-gray-600 text-sm truncate">
                                            This rare late 18th-century porcelain vase features intricate hand-painted floral designs and gold accents, making it a stunning vintage centerpiece.
                                        </span>
                                    </div>
                                    <div
                                        @mouseenter="messageHover = true"
                                        @mouseleave="messageHover = false"
                                        class="w-32 flex items-center justify-end">
                                        <div v-if="messageHover" class="flex items-center space-x-2">
                                            <!-- Archive Button -->
                                            <button title="Archive">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="text-gray-500 hover:text-custom-bluegreen h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                                                    ></path>
                                                </svg>
                                            </button>
                                            <!-- Delete Button -->
                                            <button title="Delete">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="text-gray-500 hover:text-custom-bluegreen h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    ></path>
                                                </svg>
                                            </button>
                                            <!-- Mark as Unread Button -->
                                            <button title="Mark As Unread">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="text-gray-500 hover:text-custom-bluegreen h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                    ></path>
                                                </svg>
                                            </button>
                                            <!-- Snooze Button -->
                                            <button title="Snooze">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="text-gray-500 hover:text-custom-bluegreen h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <span v-if="!messageHover" class="text-sm text-gray-500">3:05 PM</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  data() {
    return {
      checkAll: false,
      messageHover: false,
      filterMessages: false,
      filterOptions: ['All', 'Read', 'Unread', 'Starred', 'Unstarred'],
      isModalOpen: false, // Add this for modal state
    };
  },
  
  methods: {
    // Existing methods
    toggleCheckAll() {
      this.checkAll = !this.checkAll;
    },
    toggleFilterMessages() {
      this.filterMessages = !this.filterMessages;
    },
    closeFilterMessages() {
      this.filterMessages = false;
    },
    applyFilter(option) {
      console.log(`Filter applied: ${option}`);
      this.filterMessages = false;
    },
    deleteMessage() {
      console.log("Message deleted");
    },
    
    // New modal-related methods
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    // Optional: Close modal when clicking outside the modal content
    closeModalOutside(e) {
      if (e.target.classList.contains('modal-background')) {
        this.closeModal();
      }
    },
  }
};
</script>
