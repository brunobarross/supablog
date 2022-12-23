<template>
  <div class="py-20">
    <div class="container mx-auto">
      <TitleSection />
      <div class="grid gap-8 py-14" :style="gridBlog">
        <PostCard
          v-if="dados"
          v-for="post in dados"
          :key="post.id" :post="post"
        />
      </div>
    </div>
  </div>
</template>

<script setup>

import { onMounted,computed, onUnmounted, ref } from "vue";
import { supabase } from "../supabase/supabase.js";
import PostCard from "./PostCard.vue";
import TitleSection from "./TitleSection.vue";
name: "SectionCards";
components: {
  PostCard, TitleSection;
}

const dados = ref([]);
const length = ref(0)

async function getData() {
  try {
    const { data: posts, error } = await supabase.from("posts").select();
    dados.value = posts;
  } catch (err) {
    console.log(err);
  }
}

const gridBlog = computed(() => {
  return `gridTemplateColumns:repeat(2, 1fr)`
})


onMounted(() => {
  getData();
});
</script>
