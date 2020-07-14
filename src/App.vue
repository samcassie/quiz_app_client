<template>
  <v-app id="inspire">

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      dark
      class="justify-space-between"
    >
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->

      <v-btn class="ml-3" icon href="/">
          <v-icon size="35">mdi-home</v-icon>
      </v-btn>

      <v-toolbar-title
        style="width: 400px"
        class="ml-0 pl-4"
      >
            <span class="white--text ml-3">Quiz Clock - Fun, timed quizzing</span>

      </v-toolbar-title>
      <!-- Search bar wouldnt scale properly so commented out for now -->
      <!-- <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class=""
      ></v-text-field> -->
      <v-spacer></v-spacer>
      <v-btn class="pr-3 mr-3" color="primary">
          <label>Sign Up</label>
          <span class="mdi mdi-account-plus"></span>
      </v-btn>
      <v-btn class="pr-3 mr-3" color="primary">
          <label>Log In</label>
          <span class="mdi mdi-account-check"></span>
      </v-btn>

  </v-app-bar>


    <v-main class="secondary">

        <!-- <quiz-category-grid /> -->
        <router-view class="router-view"/>

    </v-main>

  </v-app>

</template>

<script>

  export default {
    props: {
      source: String,
    },
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        { icon: 'mdi-contacts', text: 'Contacts' },
        { icon: 'mdi-history', text: 'Frequently contacted' },
        { icon: 'mdi-content-copy', text: 'Duplicates' },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Labels',
          model: true,
          children: [
            { icon: 'mdi-plus', text: 'Create label' },
          ],
        },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'More',
          model: false,
          children: [
            { text: 'Import' },
            { text: 'Export' },
            { text: 'Print' },
            { text: 'Undo changes' },
            { text: 'Other contacts' },
          ],
        },
        { icon: 'mdi-cog', text: 'Settings' },
        { icon: 'mdi-message', text: 'Send feedback' },
        { icon: 'mdi-help-circle', text: 'Help' },
        { icon: 'mdi-cellphone-link', text: 'App downloads' },
        { icon: 'mdi-keyboard', text: 'Go to the old version' },
      ],
    }),
  }
</script>

<style lang="css" scoped>

    @import url('https://fonts.googleapis.com/css2?family=Modak&display=swap');

    .router-view {
        padding-top: 1.5em;
    }

    .account-buttons {
        font-size: 5em;
    }

</style>
