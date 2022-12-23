<template>
  <div>
    <IntroBlog />
    <SectionCard />
  </div>
</template>

<script setup>
import IntroBlog from "../components/IntroBlog.vue";
import SectionCard from "../components/SectionCard.vue";
components: {
  SectionCard, IntroBlog;
}
</script>
