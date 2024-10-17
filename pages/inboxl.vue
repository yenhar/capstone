<template>
    <div class="flex flex-col min-h-screen bg-anti-flash-white">
      <NuxtLayout name="navbar">
        <!-- Your navbar content -->
      </NuxtLayout>
  
      <div class="flex-grow flex flex-col lg:flex-row w-full">
        <!-- Sidebar for Actions -->
        <div class="w-full lg:w-1/4 bg-white border-r border-gray-300 p-4">
          <h2 class="text-xl font-bold mb-4 text-midnight-green">Inbox Actions</h2>
          <div class="flex flex-col space-y-2">
            <button @click="addMessage" class="p-2 bg-midnight-green text-black rounded hover:bg-green-500 transition duration-300 ease-in-out border-2 border-midnight-green hover:border-green-500">Add Message</button>
                <button @click="viewSentMail" class="p-2 bg-midnight-green text-black rounded hover:bg-green-500 transition duration-300 ease-in-out border-2 border-midnight-green hover:border-green-500">Sent Mail</button>
                <button @click="markAsRead" class="p-2 bg-midnight-green text-black rounded hover:bg-green-500 transition duration-300 ease-in-out border-2 border-midnight-green hover:border-green-500">Mark as Read</button>
                <button @click="deleteSelected" class="p-2 bg-midnight-green text-black rounded hover:bg-green-500 transition duration-300 ease-in-out border-2 border-midnight-green hover:border-green-500">Delete</button>
          </div>
          <div class="mt-4">
            <input type="checkbox" id="selectAll" class="mr-2" @change="toggleSelectAll">
            <label for="selectAll" class="text-midnight-green">Select All</label>
          </div>
        </div>
  
        <!-- Main Content Area -->
        <div class="w-full lg:w-3/4 flex flex-col h-full overflow-y-auto bg-white">
          <!-- Message List -->
          <div class="border-b border-gray-300 p-4">
            <h2 class="text-xl font-bold mb-4 text-midnight-green">Messages</h2>
            <ul>
              <li v-for="message in messages" :key="message.id" class="mb-4 p-2 border rounded hover:bg-anti-flash-white">
                <div class="flex items-center">
                  <input type="checkbox" :id="'message-' + message.id" v-model="message.selected" class="mr-2">
                  <div class="flex-grow">
                    <p class="font-semibold text-midnight-green">{{ message.subject }}</p>
                    <p class="text-sm text-gray-500 truncate">{{ message.preview }}</p>
                  </div>
                  <span :class="message.read ? 'bg-gray-300' : 'bg-midnight-green'" class="h-3 w-3 rounded-full"></span>
                </div>
              </li>
            </ul>
          </div>
  
          <!-- Active Conversations -->
          <div class="p-4 flex-grow">
            <h2 class="text-xl font-bold mb-4 text-midnight-green">Messages</h2>
            <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <li v-for="conversation in conversations" :key="conversation.id" @click="selectConversation(conversation)" class="p-2 border rounded cursor-pointer hover:bg-anti-flash-white">
                <p class="font-semibold text-midnight-green">{{ conversation.name }}</p>
                <p class="text-sm text-gray-500 truncate">{{ conversation.lastMessage }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
      <!-- Small Chat Box -->
  <div v-if="showChatBox" class="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg overflow-hidden">
    <div class="flex justify-between items-center bg-midnight-green text-white p-3">
      <h3 class="font-bold text-lg">{{ selectedConversation?.name }}</h3>
      <button @click="closeChatBox" class="text-white hover:text-gray-300 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div class="h-64 overflow-y-auto p-4 bg-gray-50">
      <div v-for="(message, index) in selectedConversation?.messages" :key="message.id" 
           class="mb-3 p-2 rounded-lg shadow-sm transition-all duration-200 ease-in-out transform hover:scale-102"
           :class="[
             message.sender === 'You' ? 'bg-blue-100 ml-8' : 'bg-white mr-8',
             {'opacity-75 hover:opacity-100': !message.isRead}
           ]">
        <div class="flex justify-between items-center mb-1">
          <p class="font-semibold text-sm" :class="message.sender === 'You' ? 'text-blue-600' : 'text-midnight-green'">
            {{ message.sender }}
          </p>
          <p class="text-xs text-gray-500">{{ message.timestamp }}</p>
        </div>
        <p class="text-gray-800 text-sm">{{ message.content }}</p>
      </div>
    </div>
    <div class="p-3 bg-white border-t border-gray-200">
      <div class="flex items-center bg-gray-100 rounded-full">
        <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message..." 
               class="flex-grow p-2 bg-transparent outline-none text-sm">
        <button @click="sendMessage" class="p-2 text-midnight-green hover:text-blue-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  
      <!-- New Message Modal -->
      <div v-if="showNewMessageModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <div class="bg-white p-5 rounded-lg shadow-xl w-full max-w-md">
          <h2 class="text-xl font-bold mb-4 text-midnight-green">New Message</h2>
          <input v-model="newMessageTo" placeholder="To:" class="w-full p-2 mb-2 border rounded">
          <input v-model="newMessageSubject" placeholder="Subject:" class="w-full p-2 mb-2 border rounded">
          <textarea v-model="newMessageBody" placeholder="Message body" class="w-full p-2 mb-4 border rounded h-32"></textarea>
          <div class="flex justify-end">
            <button @click="cancelNewMessage" class="px-4 py-2 bg-gray-300 rounded mr-2">Cancel</button>
            <button @click="sendNewMessage" class="px-4 py-2 bg-midnight-green text-white rounded">Send</button>
          </div>
        </div>
      </div>
  
      <NuxtLayout name="footer"></NuxtLayout>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive } from 'vue'
  
  // Define reactive properties
  const showChatBox = ref(false)
  const showNewMessageModal = ref(false)
  const newMessage = ref('')
  const newMessageTo = ref('')
  const newMessageSubject = ref('')
  const newMessageBody = ref('')
  
  interface Message {
    id:number
    sender: string;
    isRead: boolean;
    timestamp: string;
    content: string;
}

interface Conversation {
    name: string;
    messages?: Message[]; // messages are now optional
}


  // Define the selectedConversation as a reactive reference
  const selectedConversation = ref<Conversation | null>(null)
  
  // Define methods
  const selectConversation = (conversation: Conversation) => {
    selectedConversation.value = conversation
    showChatBox.value = true
  }
  
  const closeChatBox = () => {
    showChatBox.value = false
  }
  
  const sendMessage = () => {
    // Implement send message logic
    console.log('Sending message:', newMessage.value)
    newMessage.value = ''
  }
  
  const cancelNewMessage = () => {
    showNewMessageModal.value = false
    newMessageTo.value = ''
    newMessageSubject.value = ''
    newMessageBody.value = ''
  }
  
  const sendNewMessage = () => {
    // Implement send new message logic
    console.log('Sending new message:', {
      to: newMessageTo.value,
      subject: newMessageSubject.value,
      body: newMessageBody.value
    })
    cancelNewMessage()
  }
  
  const addMessage = () => {
    showNewMessageModal.value = true
  }
  
  const viewSentMail = () => {
    // Implement view sent mail logic
    console.log('Viewing sent mail')
  }
  
  const markAsRead = () => {
    // Implement mark as read logic
    console.log('Marking selected messages as read')
  }
  
  const deleteSelected = () => {
    // Implement delete selected messages logic
    console.log('Deleting selected messages')
  }
  
  const toggleSelectAll = (event: Event) => {
    const isChecked = (event.target as HTMLInputElement).checked
    // Implement logic to select/deselect all messages
    console.log('Select all:', isChecked)
  }
  
  // Mock data for messages and conversations (replace with real data fetching logic)
  const messages = reactive([
    { id: 1, subject: 'Hello', preview: 'How are you?', read: false, selected: false },
    { id: 2, subject: 'Meeting', preview: 'Can we schedule a meeting?', read: true, selected: false },
    // Add more messages as needed
  ])
  
  const conversations = reactive([
    { id: 1, name: 'John Doe', lastMessage: 'See you tomorrow!' },
    { id: 2, name: 'Jane Smith', lastMessage: 'Thanks for your help.' },
    // Add more conversations as needed
  ])
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  :root {
    --anti-flash-white: #E6EEEF;
    --white: #FFFFFF;
    --midnight-green: #005262;
    --dark-midnight-green: #004050;
  }
  
  .bg-dark-midnight-green {
    background-color: var(--dark-midnight-green);
  }
  </style>
  
  