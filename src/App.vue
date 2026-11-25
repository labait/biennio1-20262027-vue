<script setup>
import { ref, provide, onMounted } from 'vue'
import Headline from './components/Headline.vue'
import ThemeToggle from './components/ThemeToggle.vue'

const projects = ref([]) 


onMounted(async () => {
  projects.value = await fetchSheet(
    '1LsKlWPSWpogwFFHdCUsasywAylZKuZm04Jkz_fIq35U',
    'projects'
  );
  console.log(projects.value)

}) 


async function fetchSheet(sheetId, sheetName, query = null) {
  let url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheetName)}`;
  if (query) url += `&tq=${encodeURIComponent(query)}`;

  const res = await fetch(url);
  const text = await res.text();
  const json = JSON.parse(text.match(/setResponse\((.*)\);?$/s)[1]);

  const cols = json.table.cols.map(c => c.label || c.id);
  return json.table.rows.map(row => {
    const obj = {};
    row.c.forEach((cell, i) => {
      let value = cell ? cell.v : null;
      // Parsing date stringhe "Date(YYYY,M,D)"
      if (typeof value === 'string' && value.startsWith('Date(')) {
        const [y, m, d] = value.match(/\d+/g).map(Number);
        value = new Date(y, m, d);
      }
      obj[cols[i]] = value;
    });
    return obj;
  });
}

provide('projects', projects)
</script>

<template>
  <main class="min-h-screen flex flex-col justify-center mx-auto container -border mb-4 px-4">
    <Headline />
    <router-view />
  </main>
  <ThemeToggle />
</template>

