<template>
  <div class="flex py-4">
    <Sidebar :visible="isVisible"></Sidebar>
    <div
      id="content"
      :class="[isVisible ? 'w-full px-8 lg:pl-64' : 'w-full px-8']"
    >
      <Menu @toggle="visible"></Menu>
      <router-view></router-view>
      <hr className="my-6" />
      <div class="inline-flex items-center gap-x-4">
        <BuyMeAcoffee></BuyMeAcoffee>
        <Github></Github>
        <PersonalWebsite></PersonalWebsite>
      </div>
    </div>
  </div>
</template>

<script>
  import BuyMeAcoffee from "@/buttons/BuyMeAcoffee.vue";
  import Github from "@/buttons/Github.vue";
  import PersonalWebsite from "@/buttons/PersonalWebsite.vue";
  import Sidebar from "@/Sidebar.vue";
  import Menu from "@/Menu.vue";

export default {
  components: {
    Sidebar,
    Menu,
    BuyMeAcoffee,
    PersonalWebsite,
    Github,
  },
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    visible(e) {
      this.isVisible = e;
    },
  },
};
</script>
