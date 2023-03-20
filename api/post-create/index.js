export default (context) => {
  //   console.log('contextcontextcontextcontextcontext', context)
  return {
    apiText: () => context.$axios.get('/todo').then((data) => data.data.todos)
  }
}
