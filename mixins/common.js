export const common = {
  methods: {
    escapeToEnter(str){
      str = str.replaceAll('\n', '<br />');
      return str
    }
  }
}