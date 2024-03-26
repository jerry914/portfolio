<template lang="pug">
nav.nav-bar
    router-link(to="/").nav-brand {{ name }}
    button.nav-toggle(@click="toggleNav") Menu
    ul.nav-menu(v-bind:class="{ 'is-active': navActive }")
      li.nav-item
        router-link(to="/") About
      li.nav-item
        router-link(to="/work") Work
    //-   li.nav-item
    //-     router-link(to="/publications") Publications
</template>

<script>
export default {
  data() {
    return {
      name: "Chieh-Jui Ho",
      navActive: false,
    };
  },
  methods: {
    toggleNav() {
      this.navActive = !this.navActive;
    },
  },
};
</script>

<style scoped>
/* Basic Styles */
.nav-bar {
  display: flex;
  flex-wrap: nowrap !important;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  width: 90%;
  margin: auto;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #000;
}
.nav-item a{
    font-size: 1.2rem;
    text-decoration: none !important;
    color: #000;
}

.nav-menu {
  list-style-type: none;
  display: flex;
  gap: 1rem;
}

.nav-toggle {
  display: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    right: 1rem;
    top: 60px;
    background-color: white;
    border: 1px solid #ccc;
    padding: 1rem;
  }

  .nav-menu.is-active {
    display: flex;
  }

  .nav-toggle {
    display: inline-block;
  }
}
</style>
