<template>
  <div class="post grid grid-cols-2 cursor-pointer mt-8">
    <div class="cover">
      <img
        src="../assets/img/Article_Image.png"
        class="rounded-md w-full object-cover "
      />
    </div>
    <div class="content ml-4 flex-1 flex flex-col ">
      <h3 class="text-lg font-bold leading-6 text-neutral-100">
        {{ post.title }}
      </h3>
      <p class="text-neutral-100 mt-4 text-sm font-normal">
       {{ post.description }}
      </p>
      <div class="author mt-auto pt-16 flex items-center">
      <div class="author-pic rounded-full bg-teal-200 h-14 w-14 mr-4"></div>
      <div class="author-info">
        <p class="text-base leading-5 font-medium text-neutral-black">
          Dasteen
        </p>
        <span class="block text-sm leading-4 font-normal mt-2"
          >Jan 10, 2022 ∙ 3 min read</span
        >
      </div>
    </div>
    </div>

  </div>
</template>

<script setup>
import { defineComponent, onMounted, ref } from "vue";
import { supabase} from '../supabase/supabase.js'

defineComponent({
  name: 'PostCard'
})

defineProps({
  post: Object
})

</script>
