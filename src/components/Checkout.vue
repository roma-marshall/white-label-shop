<template>
  <div class="bg-white flex-auto">
    <div>
      <main class="mx-auto container px-4 sm:px-6 lg:px-8">
        <div class="flex items-baseline justify-center md:justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900">Checkout</h1>
        </div>
        <section aria-labelledby="checkout" class="pt-10 pb-24">
          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
            <div class="divide-y divide-solid space-y-10">
              <div class="top-10 sticky">
                <button class="flex justify-center bg-black hover:bg-gray-800 rounded-md w-full py-2.5 transform active:scale-90 transition-transform duration-300">
                  <svg aria-hidden="true" class="flex-none w-14 h-5" fill="#ffffff">
                    <use xlink:href="../icons/icons.svg#apple-pay" />
                  </svg>
                </button>
                <div class="relative flex py-7 items-center">
                  <div class="flex-grow border-t border-gray-200"></div>
                  <span class="flex-shrink mx-4 text-sm font-medium text-gray-500">or</span>
                  <div class="flex-grow border-t border-gray-200"></div>
                </div>
                <div class="flex flex-col space-y-4">
                  <label for="email" class="text-sm font-medium text-gray-600">Email address</label>
                  <input type="email" id="email" name="email" autocomplete="email" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1.5">
                </div>
                <div class="flex flex-col mt-5 space-y-4">
                  <label for="card-holder" class="text-sm font-medium text-gray-600">Name on card</label>
                  <input type="text" id="card-holder" name="card-holder" autocomplete="card-holder" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1.5">
                </div>
                <div class="flex flex-col mt-5 space-y-4">
                  <label for="card-number" class="text-sm font-medium text-gray-600">Card number</label>
                  <input type="text" placeholder="0000 0000 0000 0000" id="card-number" name="card-number" autocomplete="card-number" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1.5">
                </div>
                <div class="flex flex-col md:flex-row mt-5 space-y-3 md:space-x-3 md:space-y-0">
                  <div class="flex flex-col space-y-4 md:w-9/12">
                    <label for="expiration-date" class="text-sm font-medium text-gray-600">Expiration date (MM/YY)</label>
                    <input type="text" placeholder="MM/YY" id="expiration-date" name="expiration-date" autocomplete="expiration-date" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1.5">
                  </div>
                  <div class="flex flex-col space-y-4 md:w-3/12">
                    <label for="card-cvv" class="text-sm font-medium text-gray-600">CVV</label>
                    <input type="tel" maxlength="3" placeholder="***" id="card-cvv" name="card-cvv" autocomplete="card-cvv" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1.5">
                  </div>
                </div>
                <div class="flex flex-col md:flex-row mt-5 space-y-3 md:space-x-3 md:space-y-0">
                  <div class="flex flex-col space-y-4 md:w-9/12">
                    <label for="address" class="text-sm font-medium text-gray-600">Address</label>
                    <input type="text" id="address" name="address" autocomplete="address" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1.5">
                  </div>
                  <div class="flex flex-col space-y-4 md:w-3/12">
                    <label for="postal-code" class="text-sm font-medium text-gray-600">Postal code</label>
                    <input type="text" id="postal-code" name="postal-code" autocomplete="postal-code" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1.5">
                  </div>
                </div>
                <div class="flex flex-col md:flex-row mt-5 space-y-3 md:space-x-3 md:space-y-0">
                  <div class="flex flex-col space-y-4 w-full">
                    <label for="city" class="text-sm font-medium text-gray-600">City</label>
                    <input type="text" id="city" name="city" autocomplete="city" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1.5">
                  </div>
                  <div class="flex flex-col space-y-4 w-full">
                    <label for="state" class="text-sm font-medium text-gray-600">State / Province</label>
                    <input type="text" id="state" name="state" autocomplete="state" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1.5">
                  </div>
                </div>
                <button type="submit" class="flex justify-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md w-full py-2.5 mt-7 transform active:scale-90 transition-transform duration-300">Pay ${{ orderTotal }}</button>
                <div class="flex justify-center align-middle mt-4">
                  <svg aria-hidden="true" class="flex-none w-5 h-5" fill="#9BA3AF">
                    <use xlink:href="../icons/icons.svg#lock" />
                  </svg>
                  <span class="text-sm text-gray-500 ml-2">Payment details stored in plain text</span>
                </div>
              </div>
            </div>
            <div class="top-10 bg-gray-50 px-7 py-6 rounded-lg h-fit divide-y divide-solid space-y-10">
              <div v-for="product in products" :key="product.id" :pid="product.id" class="transition-all duration-500 flex flex-col 2xl:flex-row w-full items-center sm:items-stretch first:pt-0 pt-10">
                <div class="order-1 aspect-h-1 aspect-w-1 w-fit overflow-hidden mx-auto 2xl:mx-0 2xl:mr-6 xl:aspect-h-8 xl:aspect-w-7">
                  <img :src="product.imageSrc" :alt="product.imageAlt" class="rounded-lg h-48 w-48 object-cover object-center group-hover:opacity-75" />
                </div>
                <div class="flex flex-col order-2 space-y-2 2xl:space-y-0 justify-between">
                  <div class="flex flex-col space-y-2 text-center 2xl:text-left">
                    <span class="font-medium text-gray-700">{{ product.name }}</span>
                    <span class="font-medium text-gray-700">{{ product.price }}</span>
                    <span class="text-sm text-gray-500 opacity-70">{{ product.color }}</span>
                  </div>
                  <div class="flex space-x-3 divide-x justify-center 2xl:justify-start">
                    <span @click="$router.push('/cart')" class="cursor-pointer text-sm text-indigo-500 hover:text-indigo-700 duration-300">Edit</span>
                    <span @click="removeItem(product.id)" class="cursor-pointer text-sm text-indigo-500 hover:text-indigo-700 duration-300 pl-3">Remove</span>
                  </div>
                </div>
              </div>
              <div v-if="subTotal === 0" class="flex flex-col items-center space-y-5">
                <ShoppingCartIcon class="h-40 w-40 text-gray-200" />
                <span class="font-medium text-xl">Your cart is empty</span>
                <span class="text-center text-sm text-gray-600">Looks like you haven't added anything to your cart.</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
import { mocked_products } from '../mocked-data/products.json'

const products = ref([])
products.value = mocked_products

const removeItem = (pid) => {
  document.querySelector(`div[pid="${pid}"]`).classList.add('translate-x-96', 'opacity-0')
  setTimeout(() => {products.value = products.value.filter(item => item.id !== pid)}, 400)
}

const subTotal = computed(() => {
  let amount = 0
  products.value.forEach((item) => {
    amount += item.priceNumber
  })
  return amount
})

const shipping = computed(() => {
  if (subTotal.value === 0)
    return 0
  else return 5
})

const tax = computed(() => {
  return Math.round((subTotal.value * 0.08) * 100) / 100
})

const orderTotal = computed(() => {
  return subTotal.value + shipping.value + tax.value
})
</script>