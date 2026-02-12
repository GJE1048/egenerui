<template>
  <div class="mygradio-playground">
    <div ref="mount" class="gradio-app gradio-container"></div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gr from '../../../packages/my-gradio/src/index.ts'
import '../../../packages/my-gradio/style.css'
const props = defineProps<{ render: () => any }>()
const mount = ref<HTMLDivElement | null>(null)
onMounted(() => {
  const ui = props.render()
  if (!mount.value) return
  if (Array.isArray(ui)) {
    ui.forEach((c: any) => mount.value!.appendChild(c.render()))
  } else {
    mount.value!.appendChild(ui.render())
  }
})
</script>
<style scoped>
.mygradio-playground {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 1rem 0 1.5rem 0;
  overflow: hidden;
}
.gradio-app {
  padding: 16px;
  background: var(--vp-c-bg);
}
</style>
