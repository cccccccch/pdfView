<template>
  <div class="home">
    <div>这下面是我用来预览pdf文件的</div>
    <pdf :pdfUrl="pdfUrl"></pdf>
  </div>
</template>

<script>
import pdf from './pdf.vue';

export default {
  name: 'HomeView',
  components: {
    pdf
  },
  data() {
    return {
      pdfUrl: 'http://localhost:8080/xxxx.pdf'
    }
  },
  created() {

  },
};
</script>
