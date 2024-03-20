<template>
  <div class="bg-white flex-auto">
    <div>
      <main class="mx-auto max-w-max px-4 sm:px-6 lg:px-8">
        <div class="flex items-baseline justify-center md:justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900">Profile</h1>
        </div>
        <section aria-labelledby="profile" class="pt-10 pb-24">
          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <div class="lg:col-span-3 min-w-[19rem] sm:min-w-[25rem] md:min-w-[42rem] lg:min-w-[45rem] xl:min-w-[65rem] 2xl:min-w-[80rem]">
              <div class="bg-gray-50 p-7 rounded-lg h-fit divide-y divide-solid space-y-10">
                <div>
                  <span class="text-xl font-medium text-gray-900">Contact information</span>
                  <div class="flex flex-col md:flex-row mt-5 space-y-3 md:space-x-3 md:space-y-0">
                    <div class="flex flex-col space-y-4 w-full">
                      <label for="email-address" class="text-sm font-medium text-gray-600">Email address</label>
                      <input type="email" id="email-address" name="email-address" autocomplete="email" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1.5 w-full">
                    </div>
                    <div class="flex flex-col space-y-4 w-full">
                      <label for="phone" class="text-sm font-medium text-gray-600">Phone</label>
                      <input type="text" id="phone" name="phone" autocomplete="phone" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1.5 w-full">
                    </div>
                  </div>
                </div>
                <div class="pt-10">
                  <span class="text-xl font-medium text-gray-900">Shipping information</span>
                  <div class="flex flex-col md:flex-row mt-5 space-y-3 md:space-x-3 md:space-y-0">
                    <div class="flex flex-col space-y-4 w-full">
                      <label for="first-name" class="text-sm font-medium text-gray-600">First Name</label>
                      <input type="text" id="first-name" name="first-name" autocomplete="first-name" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1.5">
                    </div>
                    <div class="flex flex-col space-y-4 w-full">
                      <label for="last-name" class="text-sm font-medium text-gray-600">Last Name</label>
                      <input type="text" id="last-name" name="last-name" autocomplete="last-name" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1.5">
                    </div>
                  </div>
                  <div class="flex flex-col mt-5 space-y-4">
                    <label for="company" class="text-sm font-medium text-gray-600">Company</label>
                    <input type="text" id="company" name="company" autocomplete="company" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1.5 w-full">
                  </div>
                  <div class="flex flex-col mt-5 space-y-4">
                    <label for="address" class="text-sm font-medium text-gray-600">Address</label>
                    <input type="text" id="address" name="address" autocomplete="address" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1.5 w-full">
                  </div>
                  <div class="flex flex-col mt-5 space-y-4">
                    <label for="apartment" class="text-sm font-medium text-gray-600">Apartment, suite, etc.</label>
                    <input type="text" id="apartment" name="apartment" autocomplete="apartment" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1.5 w-full">
                  </div>
                  <div class="flex flex-col md:flex-row mt-5 space-y-3 md:space-x-3 md:space-y-0">
                    <div class="flex flex-col space-y-4 w-full">
                      <label for="city" class="text-sm font-medium text-gray-600">City</label>
                      <input type="text" id="city" name="city" autocomplete="city" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1.5">
                    </div>
                    <div class="flex flex-col space-y-4 w-full">
                      <label for="country" class="text-sm font-medium text-gray-600">Country</label>
                      <input type="text" id="country" name="country" autocomplete="country" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1.5">
                    </div>
                  </div>
                  <div class="flex flex-col md:flex-row mt-5 space-y-3 md:space-x-3 md:space-y-0">
                    <div class="flex flex-col space-y-4 w-full">
                      <label for="state" class="text-sm font-medium text-gray-600">State / Province</label>
                      <input type="text" id="state" name="state" autocomplete="state" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1.5">
                    </div>
                    <div class="flex flex-col space-y-4 w-full">
                      <label for="postal-code" class="text-sm font-medium text-gray-600">Postal code</label>
                      <input type="text" id="postal-code" name="postal-code" autocomplete="postal-code" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1.5">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 p-7 rounded-lg h-fit divide-y divide-solid space-y-10">
              <div class="flex flex-col space-y-2">
                <div class="flex flex-row items-baseline justify-between">
                  <span class="text-base text-gray-600">User ID</span>
                  <span class="text-base text-gray-900">131550704</span>
                </div>
                <div class="flex flex-row items-baseline justify-between">
                  <span class="text-base text-gray-600">Department</span>
                  <span class="text-base text-gray-900">Sales and Marketing</span>
                </div>
                <div class="pt-6">
                  <button type="submit" class="w-full text-white bg-indigo-600 hover:bg-indigo-700 rounded-md py-3 px-4 transform active:scale-90 transition-transform duration-300">Save</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>

</script>