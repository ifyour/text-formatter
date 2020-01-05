<template>
  <div class="container grid-lg">
    <GithubBadge slug="ifyour/text-formatter" />
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <textarea
      class="form-input"
      v-model.trim="input"
      rows="10"
      @click="select"
      placeholder="Type your text here..." />
    <div class="text-center my-2" v-if="output">
      <button class="btn" @click="formatCopy">Format & Copy</button>
    </div>
  </div>
</template>

<script>
import copy from 'modern-copy';
import toast from 'native-toast';
import pangu from 'pangu';
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
      title: 'Text-formatter',
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
    select(e) {
      this.input && e.target.select();
    },
    format(txt) {
      txt = txt
        .replace(/[，][ ]+/g, ', ')
        .replace(/[。][ ]+/g, '. ')
        .replace(/；/g, '; ')
        .replace(/：/g, ': ')
        .replace(/。/g, '. ')
        .replace(/，/g, ', ');
      txt = pangu.spacing(txt);
      return txt;
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
