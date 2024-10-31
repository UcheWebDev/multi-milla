<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-white p-4"
  >
    <!-- Logo -->
    <div class="">
      <!-- <div class="text-3xl font-bold text-indigo-900">
        <span class="text-emerald-400">O</span>Pay
      </div> -->
      <img src="../assets/lg.png" alt="Bank Logo" class="h-15 w-20" />
    </div>

    <!-- Registration Form -->
    <div class="w-full max-w-md space-y-6">
      <div class="text-center text-gray-700 text-lg mb-8">Create Account</div>

      <form @submit.prevent="handleRegister" class="space-y-4">
        <!-- Full Name Input -->
        <div class="relative">
          <input
            type="text"
            placeholder="Full Name"
            v-model="formData.name"
            class="w-full px-4 py-4 bg-gray-100/100 border-none focus:outline-none focus:ring-0 text-gray-700 text-lg placeholder:text-gray-400 shadow-sm"
          />
          <div class="input-background"></div>
          <div class="input-shadow"></div>
        </div>

        <!-- Phone Input -->
        <div class="relative">
          <input
            type="tel"
            placeholder="Phone Number"
            v-model="formData.phone"
            class="w-full px-4 py-4 bg-gray-100/100 border-none focus:outline-none focus:ring-0 text-gray-700 text-lg placeholder:text-gray-400 shadow-sm"
          />
          <div class="input-background"></div>
          <div class="input-shadow"></div>
        </div>

        <!-- Email Input -->
        <div class="relative">
          <input
            type="email"
            placeholder="Email Address"
            v-model="formData.email"
            class="w-full px-4 py-4 bg-gray-100/100 border-none focus:outline-none focus:ring-0 text-gray-700 text-lg placeholder:text-gray-400 shadow-sm"
          />
          <div class="input-background"></div>
          <div class="input-shadow"></div>
        </div>

        <!-- Password Input -->
        <div class="relative">
          <input
            type="password"
            placeholder="Create Password"
            v-model="formData.password"
            class="w-full px-4 py-4 bg-gray-100/100 border-none focus:outline-none focus:ring-0 text-gray-700 text-lg placeholder:text-gray-400 shadow-sm"
          />
          <div class="input-background"></div>
          <div class="input-shadow"></div>
        </div>

        <!-- Password Requirements -->
        <div class="text-sm text-gray-500 space-y-1 px-1 text-right">
          <p>Password must contain:</p>
          <ul class="space-y-1">
            <li class="flex items-center gap-2 justify-end">
              <div
                class="w-1.5 h-1.5 rounded-full"
                :class="hasMinLength ? 'bg-red-500' : 'bg-gray-300'"
              ></div>
              At least 4 characters
            </li>
          </ul>
        </div>

        <!-- Register Button -->
        <button
          type="submit"
          class="w-full bg-red-600 text-white py-4 rounded-full hover:bg-red-500 transition-colors font-medium text-lg mt-8"
          :disabled="!isFormValid"
          :class="{ 'opacity-50 cursor-not-allowed': !isFormValid }"
        >
          Create Account
        </button>

        <!-- Login Link -->
        <div class="text-center pt-6">
          <p class="text-gray-600">
            Already have an account?
            <router-link to="/login" class="text-red-400 font-medium"
              >Log in</router-link
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const formData = ref({
  name: "",
  phone: "",
  email: "",
  password: "",
});

// Password validation computed properties
const hasMinLength = computed(() => formData.value.password.length >= 4);

const isFormValid = computed(() => {
  return (
    formData.value.name.length > 0 &&
    formData.value.phone.length > 0 &&
    isValidEmail(formData.value.email) &&
    hasMinLength.value
  );
});

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const handleRegister = () => {
  if (isFormValid.value) {
    console.log("Registering with data:", formData.value);
    // Handle registration logic here
  }
};
</script>

<style scoped>
.input-field {
  @apply w-full px-4 py-4 rounded-xl bg-gray-50/50 border-none focus:outline-none focus:ring-0 
         text-gray-700 text-lg placeholder:text-gray-400 relative z-10;
}

.input-background {
  @apply absolute inset-0 rounded-xl bg-gray-100/50 -z-10;
}

.input-shadow {
  @apply absolute inset-0 rounded-xl shadow-inner-custom -z-10;
}

.shadow-inner-custom {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
}

/* Custom autofill styling */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 30px #fafafa inset !important;
  -webkit-text-fill-color: #374151 !important;
  caret-color: #374151 !important;
}

/* Hide password reveal button */
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
