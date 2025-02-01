<template>
  <div class="video-wrapper">
    <div class="video-container">
      <iframe
        :src="iframeSrc"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        title="Vimeo Video"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  videoId: {
    type: String,
    required: true,
  },
});

const iframeSrc = computed(
  () =>
    `https://player.vimeo.com/video/${props.videoId}?h=9237b1296c&badge=0&autopause=0&player_id=0&app_id=58479`
);
</script>

<style scoped>
.video-wrapper {
  display: flex;
  justify-content: center;
}

.video-container {
  width: 80%;
  position: relative;
  padding-top: 45%; /* Maintain 16:9 aspect ratio */
  border-radius: 10px;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
