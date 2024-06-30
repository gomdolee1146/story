export const timeFormat = {
  methods: {
    timeFormat(day) {
      let result = this.$dayjs(day).locale("ko").fromNow(true);
      return result + ' 전';
    },
  },
};
