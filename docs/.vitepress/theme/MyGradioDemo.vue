<template>
  <div class="mygradio-demo">
    <div class="demo-header">
      <h3>{{ title }}</h3>
      <button @click="toggleCode" class="toggle-btn">
        {{ showCode ? 'Hide Code' : 'Show Code' }}
      </button>
    </div>
    
    <div class="demo-content">
      <slot></slot>
    </div>
    
    <div v-if="showCode" class="demo-code">
      <pre><code>{{ code }}</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Demo'
  },
  code: {
    type: String,
    default: ''
  }
})

const showCode = ref(false)

const toggleCode = () => {
  showCode.value = !showCode.value
}
</script>

<style scoped>
.mygradio-demo {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 1.5rem 0;
  overflow: hidden;
}

.demo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: var(--vp-c-bg-alt);
  border-bottom: 1px solid var(--vp-c-divider);
}

.demo-header h3 {
  margin: 0;
  font-size: 1.1em;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.toggle-btn {
  padding: 0.5rem 1rem;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.toggle-btn:hover {
  background: var(--vp-c-brand-dark);
}

.demo-content {
  padding: 1.5rem;
  background: var(--vp-c-bg);
}

.demo-code {
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
  padding: 1.5rem;
}

.demo-code pre {
  margin: 0;
  background: var(--vp-c-bg);
  border-radius: 4px;
  padding: 1rem;
}
</style>
