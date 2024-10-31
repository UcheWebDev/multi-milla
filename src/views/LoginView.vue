<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-white p-4"
  >
    <!-- Logo -->
    <div>
      <img src="../assets/lg.png" alt="Bank Logo" class="h-15 w-20" />
    </div>

    <!-- Login Form -->
    <div class="w-full max-w-md space-y-6">
      <!-- Username Display -->
      <div class="text-center text-gray-700 text-lg mb-8">Welcome back</div>

      <!-- Password Input -->
      <div class="space-y-4">
        <div class="relative">
          <input
            type="text"
            placeholder="Enter Phone Number"
            v-model="password"
            maxlength="6"
            class="w-full px-4 py-4 bg-gray-100/100 border-none focus:outline-none focus:ring-0 text-gray-700 text-lg placeholder:text-gray-400 shadow-sm"
            :class="{
              'letter-spacing-wide': password.length > 0,
            }"
          />
          <div class="absolute inset-0 rounded-xl bg-gray-100/50 -z-10"></div>
          <div
            class="absolute inset-0 rounded-xl shadow-inner-custom -z-10"
          ></div>
        </div>
      </div>

      <!-- Password Input -->
      <div class="space-y-4">
        <div class="relative">
          <input
            type="password"
            placeholder="Enter 6-digit Password"
            v-model="password"
            maxlength="6"
            class="w-full px-4 py-4 bg-gray-100/100 border-none focus:outline-none focus:ring-0 text-gray-700 text-lg placeholder:text-gray-400 shadow-sm"
            :class="{
              'letter-spacing-wide': password.length > 0,
            }"
          />
          <div class="absolute inset-0 rounded-xl bg-gray-100/50 -z-10"></div>
          <div
            class="absolute inset-0 rounded-xl shadow-inner-custom -z-10"
          ></div>
        </div>

        <div class="text-right">
          <a href="#" class="text-red-600 text-sm font-medium"
            >Forgot Password?</a
          >
        </div>
      </div>

      <!-- Login Button -->
      <button
        @click="handleLogin"
        class="w-full bg-red-600 text-white py-4 rounded-full hover:bg-red-500 transition-colors font-medium text-lg mt-8"
      >
        Log in
      </button>

      <!-- Switch Account Link -->
      <div class="text-center pt-6">
        <router-link to="/join" class="text-red-600 font-medium"
          >Create new account</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const password = ref("");

const handleLogin = () => {
  // Handle login logic here
  console.log("Logging in with password:", password.value);
};
</script>

<style scoped>
.shadow-inner-custom {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
}

.letter-spacing-wide {
  letter-spacing: 8px;
}

/* Custom autofill styling */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 30px #fafafa inset !important;
  -webkit-text-fill-color: #374151 !important;
  caret-color: #374151 !important;
}

/* Hide password reveal button in Edge/IE */
input::-ms-reveal,
input::-ms-clear {
  display: none;
}

/* Custom placeholder styling */
::placeholder {
  font-weight: 400;
  opacity: 0.7;
}
</style>
