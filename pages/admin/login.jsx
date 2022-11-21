// import axios from "axios";
// import { useRouter } from "next/router";
// import React from "react";
// import styles from "../../styles/Login.module.css";
// function Login() {
//   const [username, setUsername] = React.useState(null);
//   const [password, setPassword] = React.useState(null);
//   const [error, setError] = React.useState(false);
//   const router = useRouter();
//   const handleClick = async (e) => {
//     try {
//       await axios.post("http://localhost:3000/api/login", {
//         username,
//         password,
//       });
//        console.log("login success")
//       router.push("/admin");
//     } catch (err) {
//       setError(true);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.wrapper}>
//         <h1>Admin Dashboard</h1>

//         <input
//           type="text"
//           className={styles.input}
//           placeholder="Username"
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="text"
//           className={styles.input}
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button onClick={handleClick} className={styles.button}>
//           Sign In
//         </button>
//         {error && <span className={styles.error}>Wrong creadentials</span>}
//       </div>
//     </div>
//   );
// }

// export default Login;
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { useRouter } from "next/router";
import { useToast } from '@chakra-ui/react';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

 function Login() {
  const toast=useToast()
  const router = useRouter();
 
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      await axios.post("http://localhost:3000/api/login", {
        username:data.get('email'),
        password:data.get('password'),
      });
      setTimeout(()=>{
        toast({
          title: 'Login Seccessfully',
   
          status: 'success',
          duration: 9000,
          position: 'top-right',
          isClosable: true,
        })
      },2000)
     
      router.push("/admin");
    } catch (err) {
      toast({
        title: 'Invalid email or password.',

        
        status: 'error',
        duration: 9000,
        position: 'top-right',
        isClosable: true,
      })
    }
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '90vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#006491' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2,bgColor:"#006491" }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export default Login;