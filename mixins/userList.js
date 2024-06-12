export const userList = {
  methods: {
    getUserList() {
      this.$store.commit("auth/getUserInfo");
    },
  },
};
