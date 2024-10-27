<template>
  <div class="h-screen w-full flex items-center justify-center p-4 font-sans">
    <div
      class="bg-white rounded-lg shadow-xl w-full max-w-[360px] overflow-hidden"
    >
      <!-- Upper section with background -->
      <div class="bg-gradient-to-br from-red-800 to-red-600 p-8 pb-16 relative">
        <div
          class="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-bl-full opacity-50"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-24 h-24 bg-red-500 rounded-tr-full opacity-30"
        ></div>
        <div class="relative z-10 text-center">
          <div class="inline-block p-2 bg-white rounded-lg mb-4">
            <svg
              class="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
          </div>
          <h2 class="text-xl font-bold text-white">Welcome back</h2>
          <p class="text-sm text-blue-100 mt-1">Enter your details to login.</p>
        </div>
      </div>

      <!-- Lower section with form -->
      <div class="p-6 pt-8">
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Email</label
            >
            <div class="relative">
              <input
                type="email"
                id="email"
                v-model="email"
                required
                class="appearance-none block w-full pl-3 pr-10 py-2 border-0 border-gray-300 bg-gray-50 text-gray-900 rounded-md focus:outline-none focus:ring-0 focus:border-blue-600 text-sm"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Password</label
            >
            <div class="relative">
              <input
                :type="showPassword ? 'text' : 'password'"
                id="password"
                v-model="password"
                required
                class="appearance-none block w-full pl-3 pr-10 py-2 border-0 border-gray-300 bg-gray-50 text-gray-900 rounded-md focus:outline-none focus:ring-0 focus:border-blue-600 text-sm"
                placeholder="Enter your password"
              />
              <button
                type="button"
                @click="togglePasswordVisibility"
                class="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <svg
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="text-right">
            <a
              href="#"
              class="text-sm font-medium text-red-600 hover:text-blue-500"
              >Forgot Password?</a
            >
          </div>

          <div class="pt-2">
            <button
              type="button"
              @click="handleBiometricLogin"
              class="w-full flex flex-col justify-center items-center py-3 px-4 rounded-md text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg
                class="w-5 h-5 mb-1 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                ></path>
              </svg>
              Fingerprint ID
            </button>
          </div>

          <div class="pt-2">
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800"
            >
              Log In
            </button>
          </div>
        </form>

        <div class="mt-6 text-center text-sm">
          <span class="text-gray-600">No account yet ?</span>
          <router-link
            to="/join"
            class="font-medium text-red-500 hover:text-red-600 ml-1"
          >
            Sign up</router-link
          >
          <!-- <button
              @click="handleSwitchAccount"
              class="font-medium text-red-500 hover:text-red-600 ml-1"
            ></button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const password = ref("");
const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const handleSubmit = () => {
  console.log("Login submitted with password:", password.value);
};

const handleBiometricLogin = () => {
  console.log("Biometric login requested");
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

.font-sans {
  font-family: "Inter", sans-serif;
}

.bg-blue-600 {
  background-color: #2563eb;
}

.text-blue-600 {
  color: #2563eb;
}

.from-blue-400 {
  --tw-gradient-from: #60a5fa;
  --tw-gradient-to: #2563eb;
}

.to-blue-600 {
  --tw-gradient-to: #2563eb;
}
</style>
