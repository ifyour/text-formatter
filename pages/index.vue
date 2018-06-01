<template>
  <div class="container grid-lg">
    <GithubBadge slug="ifyour/text-formater" />
    <h1 class="title">{{ title }}</h1>
    <p class="description">{{ description }}</p>
    <textarea class="form-input" v-model="input" rows="10" placeholder="Type your text here..."></textarea>
    <div class="text-center my-2" v-if="output">
      <button class="btn" @click="formatCopy">Format & Copy</button>
    </div>
  </div>
</template>

<script>
import copy from 'modern-copy';
import toast from 'native-toast';
import GithubBadge from 'vue-github-badge';

export default {
  head() {
    return {
      title: this.title,
      meta: [
        {
          name: 'description',
          content: this.description
        }
      ]
    };
  },

  data() {
    return {
      title: 'Text-formater',
      description: 'Another text formatting tool.',
      input: ''
    };
  },

  computed: {
    output() {
      return this.format(this.input);
    }
  },

  methods: {
    format(txt) {
      for (let i = 0; 100 > i; i++) {
        txt = txt
          .replace('　', '')
          .replace(',', '，')
          .replace('......', '……')
          .replace('。。。。。。', '……')
          .replace('?', '？')
          .replace('.', '。')
          .replace(';', '；')
          .replace(':', '：')
          .replace('!', '！')
          .replace('(', '（')
          .replace(')', '）')
          .replace('----', '——')
          .replace('--', '——')
          .replace('[', '［')
          .replace(']', '］');
      }
      return txt.trim();
    },
    formatCopy() {
      this.input = this.output;
      copy(this.output);
      toast({
        message: 'Copied!'
      });
    }
  },

  components: {
    GithubBadge
  }
};
</script>

<style src="native-toast/dist/native-toast.css"></style>
<style src="spectre.css/dist/spectre.min.css"></style>

<style scoped>
.container {
  padding: 1rem 0.5rem;
}
</style>
