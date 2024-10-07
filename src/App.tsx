import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import "../styles/globals.scss"
import Formulario from './pages/Formulario';
import LeitorQrCode from './pages/LeitorQRCode';
import Error404 from './pages/Error404';
import Protocolo from './pages/Protocolo';


function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <LeitorQrCode/>
    },
    {
      path: "/:tag",
      element: <Home/> 
    },
    {
      path: "/Protocolo",
      element: <Formulario/>
    },
    {
      path: "/404",
      element: <Error404/>
    },
    {
      path: "/teste",
      element: <Protocolo EmpresaExecutor='Lynx' ResponsavelExecutor='Rafael' DataExecutor='05/10' EmpresaVerificador='TSA' ResponsavelVerificador='Mateus' DataVerificador='06/10' EmpresaAprovador='TSA' ResponsavelAprovador='Juliano' DataAprovador='07/10' Dado1="C" Dado2='C' Dado3='C' Dado4='CA' Dado5='C' Dado6='CA' Dado7='C' Dado8='C' tag="Tag1" accept={1} notAccept={0}/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App
