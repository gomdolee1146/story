export const timeFormat = {
  methods: {
    timeFormat(day) {
      let result = this.$dayjs(day).locale("ko").fromNow(true);
      console.log(result);
      console.log(this.$dayjs().locale());
      return result;
    },
  },
};
