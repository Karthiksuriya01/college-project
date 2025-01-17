import { createBrowserRouter, RouterProvider } from "react-router"
import Applayout from "./layout/app-layout";
import Homepage from "./pages/Homepage";
import Profilepage from "./pages/Profilepage";
import Resourcespage from "./pages/Resourcespage";
import Searchpage from "./pages/Searchpage";
const App = () => {

  const router = createBrowserRouter(
    [
      {
        path:'/',
        element: <Applayout />,
        children: [
          {
            path:'/Homepage',
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
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
