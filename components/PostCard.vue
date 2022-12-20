<template>
  <div class="post flex flex-col cursor-pointer">
    <div class="cover">
      <img
        src="../assets/img/Article_Image.png"
        class="rounded-md w-full object-cover"
      />
    </div>
    <div class="content mt-8">
      <h3 class="text-lg font-bold leading-6 text-neutral-100">
        Grid CSS make your life easier
      </h3>
      <p class="text-neutral-100 mt-4 text-sm font-normal">
        asdasdasdhgjasd hsagdhjgashjdg hjagsdjhagsdhjga sjhdgb
      </p>
    </div>
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
</template>

<script>
import { onMounted, ref } from "vue";
import { supabase} from '../supabase/supabase.js'

export default {
  name: "PostCard",
};
</script>
