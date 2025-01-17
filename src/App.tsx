import { createBrowserRouter, RouterProvider } from "react-router"
import Applayout from "./layout/app-layout";
import Homepage from "./pages/Homepage";
import Profilepage from "./pages/Profilepage";
import Resourcespage from "./pages/Resourcespage";
import Searchpage from "./pages/Searchpage";
import { ThemeProvider } from "@/components/theme-provider"
const App = () => {

  const router = createBrowserRouter(
    [
      {
        path:'/',
        element: <Applayout />,
        children: [
          {
            path:'/home',
            element:<Homepage/>

          },
          {
            path:'/profile',
            element:<Profilepage/>
          },
          {
            path:'/resources',
            element:<Resourcespage/>
          },
          {
            path:'/search',
            element:<Searchpage/>
          },
        ]

        
      }

    ]
  )
  return (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    {<RouterProvider router={router}/>}  
  </ThemeProvider>
  );
}

export default App;
