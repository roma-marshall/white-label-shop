<template>
  <Listbox v-model="selectedLanguage">
    <div class="relative ml-3">
      <ListboxButton
          class="outline-none bg-transparent text-white relative w-full cursor-pointer py-2 px-5 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
      >
        <span class="block truncate border-b-2 rounded-sm">{{ selectedLanguage.name }}</span>
      </ListboxButton>

      <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
      >
        <ListboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
              v-slot="{ active, selected }"
              v-for="language in languages"
              :key="language.name"
              :value="language"
              as="template"
          >
            <li
                :class="[
                  active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-5 pr-4',
                ]"
            >
                <span
                    :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                >{{ language.name }}</span
                >
              <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-1 text-amber-600"
              >
                  <CheckIcon class="h-3 w-3" aria-hidden="true" />
                </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup>
import { ref } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/20/solid'

const languages = [
  { id: 1, name: 'EN' },
  { id: 2, name: 'DE' },
]
const selectedLanguage = ref(languages[0])
</script>
