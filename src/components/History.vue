<template>
  <div class="bg-white flex-auto">
    <div>
      <main class="mx-auto max-w-max px-4 sm:px-6 lg:px-8">
        <div class="flex items-baseline justify-center md:justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900">Order History</h1>
        </div>
        <section aria-labelledby="order-history" class="pt-10 pb-24">
          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <div class="lg:col-span-3 min-w-[19rem] sm:min-w-[25rem] md:min-w-[42rem] lg:min-w-[45rem] xl:min-w-[65rem] 2xl:min-w-[80rem] divide-y divide-solid space-y-10">
              <div v-for="product in products" :key="product.id" :pid="product.id" class="relative transition-all duration-500 flex flex-col sm:flex-row w-full items-center sm:items-stretch first:pt-0 pt-10 space-y-6 md:space-y-0">
                <div class="shrink-0 mt-5 sm:mt-0 order-2 sm:order-1 aspect-h-1 aspect-w-1 w-fit overflow-hidden md:mr-6 xl:aspect-h-8 xl:aspect-w-7">
                  <span class="flex flex-col items-center md:items-start space-y-2 text-center sm:text-left">
                    <img :src="product.imageSrc" :alt="product.imageAlt" class="rounded-lg h-48 w-48 object-cover object-center group-hover:opacity-75" />
                    <span class="text-sm text-gray-700">Order number:
                      <span class="uppercase">{{ (Math.random() + 1).toString(36).substring(7) }}</span>
                    </span>
                    <div class="flex">
                      <span class="text-sm text-gray-700 mr-2">
                        Delivered on July {{ Math.floor(Math.random() * 10) + 1 }}, 202{{ Math.floor(Math.random() * 3) + 1 }}
                      </span>
                      <svg aria-hidden="true" class="flex-none w-5 h-5" fill="#22C55E">
                        <use xlink:href="../icons/icons.svg#in-stock" />
                      </svg>
                    </div>
                  </span>
                </div>
                <div class="flex flex-row order-1 sm:order-2">
                  <div class="flex flex-col space-y-5 text-center sm:text-left">
                    <span class="font-medium text-gray-700">{{ product.name }}</span>
                    <span class="text-sm text-gray-500 opacity-70 w-6xl">{{ product.imageAlt }}</span>
                  </div>
                </div>
                <div class="flex flex-col order-3 sm:absolute right-10">
                  <span class="font-medium text-gray-700">{{ product.price }}</span>
                </div>
                <div class="order-4 sm:absolute right-10 bottom-0 space-x-3 divide-x">
                  <span @click="$router.push('/content')" class="cursor-pointer text-sm text-indigo-500 hover:text-indigo-700 duration-300">View Product</span>
                  <span @click="$router.push('/content')" class="cursor-pointer text-sm text-indigo-500 hover:text-indigo-700 duration-300 pl-3">Buy again</span>
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
import { ref } from 'vue'
import { mocked_products } from '../mocked-data/products.json'

const products = ref([])
products.value = mocked_products
</script>