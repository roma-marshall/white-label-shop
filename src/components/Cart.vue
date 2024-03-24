<template>
  <div class="bg-white flex-auto">
    <div>
      <main class="mx-auto max-w-max px-4 sm:px-6 lg:px-8">
        <div class="flex items-baseline justify-center md:justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900">Shopping Cart</h1>
        </div>
        <section aria-labelledby="shopping-cart" class="pt-10 pb-24">
          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <div class="lg:col-span-3 min-w-[19rem] sm:min-w-[25rem] md:min-w-[42rem] lg:min-w-[45rem] xl:min-w-[65rem] 2xl:min-w-[80rem] divide-y divide-solid space-y-10">
              <div v-for="product in products" :key="product.id" :pid="product.id" class="transition-all duration-500 flex flex-col sm:flex-row w-full items-center sm:items-stretch first:pt-0 pt-10">
                <div class="shrink-0 mt-5 sm:mt-0 order-2 sm:order-1 aspect-h-1 aspect-w-1 w-fit overflow-hidden sm:mr-6 xl:aspect-h-8 xl:aspect-w-7">
                  <span class="flex flex-col items-center md:items-start space-y-2 text-center sm:text-left">
                    <img :src="product.imageSrc" :alt="product.imageAlt" class="rounded-lg h-48 w-48 object-cover object-center group-hover:opacity-75" />
                    <span class="flex">
                      <svg aria-hidden="true" class="flex-none w-5 h-5" fill="#22C55E">
                        <use xlink:href="../icons/icons.svg#in-stock" />
                      </svg>
                      <span class="text-sm text-gray-700 ml-2">In stock</span>
                    </span>
                  </span>
                </div>
                <div class="flex flex-col order-1 sm:order-2 shrink justify-between w-9/12 lg:w-4/12 xl:w-3/12">
                  <div class="flex justify-between relative">
                    <div class="flex flex-col space-y-1.5 order-1 sm:order-0 items-center sm:items-start">
                      <span class="text-center text-sm font-medium text-gray-700">{{ product.name }}</span>
                      <span class="text-sm text-gray-500 opacity-70">{{ product.color }} | Large</span>
                      <span class="text-sm font-medium text-gray-700">{{ product.price }}</span>
                    </div>
                    <div class="order-0 sm:order-1">
                      <select id="quantity-0" name="quantity-0"
                              class="text-sm font-medium text-gray-700 outline-none">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                      </select>
                    </div>
                    <div class="order-2">
                      <button type="button" @click="removeItem(product.id)">
                        <svg aria-hidden="true" class="flex-none w-5 h-5" fill="#9CA3AF">
                          <use xlink:href="../icons/icons.svg#remove-icon" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="subTotal === 0" class="flex flex-col items-center space-y-5">
                <ShoppingCartIcon class="h-40 w-40 text-gray-200" />
                <span class="font-medium text-xl">Your cart is empty</span>
                <span class="text-center text-sm text-gray-600">Looks like you haven't added anything to your cart.</span>
              </div>
            </div>
            <div class="sticky top-10 bg-gray-50 px-7 py-6 rounded-lg h-fit">
              <span class="font-medium text-xl">Order summary</span>
              <div class="flex flex-col divide-y divide-solid mt-6 space-y-4">
                <div class="flex justify-between">
                  <span class="text-sm text-gray-600">Subtotal</span>
                  <span class="text-sm text-gray-900 font-medium">${{ subTotal }}</span>
                </div>
                <div class="flex justify-between pt-4">
                  <span class="text-sm text-gray-600">Shipping estimate</span>
                  <span class="text-sm text-gray-900 font-medium">${{ shipping }}</span>
                </div>
                <div class="flex justify-between pt-4">
                  <span class="text-sm text-gray-600">Tax estimate</span>
                  <span class="text-sm text-gray-900 font-medium">${{ tax }}</span>
                </div>
                <div class="flex justify-between pt-4">
                  <span class="text-base text-gray-900 font-medium">Order total</span>
                  <span class="text-base text-gray-900 font-medium">${{ orderTotal }}</span>
                </div>
              </div>
              <div class="pt-6">
                <button @click="$router.push('/checkout')" type="submit" class="w-full text-white bg-indigo-600 hover:bg-indigo-700 rounded-md py-3 px-4 transform active:scale-90 transition-transform duration-300">Checkout</button>
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
  document.querySelector(`div[pid="${pid}"]`).classList.add('-translate-x-96', 'opacity-0')
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