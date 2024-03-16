<template>
  <header class="w-full h-auto">
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
      <div class="mx-auto max-w-full px-2 sm:px-6 md:px-16 xl:px-20 2xl:px-56">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex items-center justify-center">
            <div class="cursor-pointer h-10 w-10 flex items-center justify-center border-dashed border-2 border-white rounded-full">
              <CakeIcon @click="$router.push(`${headerPath}`)" class="h-7 w-7 text-white" />
            </div>
            <div id="white-logo-2" class="hidden text-white cursor-pointer">
              <svg @click="$router.push(`${headerPath}`)" aria-hidden="true" class="flex-none w-20 h-8" fill="currentColor">
                <use xlink:href="../icons/icons.svg#btc" />
              </svg>
            </div>
            <LanguageSwitcher />
          </div>
          <div v-show="checkPath" class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
                type="button"
                @click="$router.push('/cart')"
                class="h-10 w-10 rounded-full border-2 border-white flex justify-center items-center relative bg-transparent text-gray-400 hover:outline-none hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-gray-800"
            >
              <ShoppingCartIcon class="h-6 w-6 text-white" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton
                    class="h-10 w-10 rounded-full border-2 border-white flex justify-center items-center relative bg-transparent text-sm hover:outline-none hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-gray-800"
                >
                  <UserIcon class="h-6 w-6 text-white" />
                </MenuButton>
              </div>
              <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div class="py-1">
                    <span class="block px-4 py-2 text-sm text-gray-700">uid: 131550704</span>
                  </div>
                  <div class="py-1 cursor-pointer">
                    <MenuItem v-slot="{ active }">
                      <a @click="$router.push('/profile')" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a @click="$router.push('/history')" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Order History</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a href="/" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>
  </header>
</template>

<script setup>
import LanguageSwitcher from './LanguageSwitcher.vue'
import { Disclosure, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { UserIcon, ShoppingCartIcon, CakeIcon } from '@heroicons/vue/24/outline'

import { computed } from 'vue'

const checkPath = computed(() => {
  return !(window.location.pathname === '/' || window.location.pathname === '/register')
})

const headerPath = computed(() => {
  return window.location.pathname !== '/' && window.location.pathname !== '/register' ? '/content' : '/'
})
</script>