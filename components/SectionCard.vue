<template>
  <div class="py-20">
    <div class="container mx-auto">
      <TitleSection />
      <div class="grid grid-cols-4 gap-8 py-14">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>

    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { supabase} from '../supabase/supabase.js'
import PostCard from "./PostCard.vue";
import TitleSection from "./TitleSection.vue";

export default {
  name: "SectionCards",
  components: { PostCard, TitleSection },

  setup() {
    const dados = ref([]);
    async function getData() {
      const { data, error } = await supabase.from("posts").select();
        if(error){
          console.log(error)
          return
        }
        if (data){
          dados.value = data
          console.log(dados.value)
        }
    }
    onMounted(() => {
      getData()
    });
  },

};
</script>
