import Router from 'next/router';

const checkAuth = () => {
  return{
    isAuth: true
  }
}

const WithAuth = (Component) => {
  const Auth = ({...props}) => {
    return <Component {...props}></Component>
  }

  Auth.getInitialProps = async (ctx) => {
    const auth = checkAuth();
    if (!auth.isAuth) {
      if(ctx.res) {
        // server
        ctx.res?.writeHead(302, {
          Location: '/login',
        });
        ctx.res?.end();
      }else{
        // client
        Router.replace('/login')
      }
      return {
        auth: false
      }
    }else if(Component.getInitialProps){
      console.log('hola')
      const pageProps = await Component.getInitialProps({...ctx, auth});
      return{
        ...pageProps,
        auth
      }
    }else{
      return {
        auth
      }
    }
  }

  return Auth;
}

export default WithAuth;