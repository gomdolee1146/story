export default function({app, redirect}){
  let cookieData = app.$cookies.get('userInfo');

  if (!cookieData) {
    return redirect('/auth/login')
  }
}