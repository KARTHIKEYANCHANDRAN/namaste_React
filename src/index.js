import React, { lazy, Suspense, useEffect, useState } from "react"; // optional since we are not using react object
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [username, setusername] = useState();
  useEffect(() => {
    const data = {
      name: "Dhoni",
    };
    setusername(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loginusername: username, setusername }}>
        <div className="app">
          <Header />
          <Outlet />{" "}
          {/* another way to call a function in jsx; comments should also be enclosed inside braces*/}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const indexRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Oops something went wrong</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root1 = ReactDOM.createRoot(document.getElementById("react"));
// console.log(root1);
// root1.render(AppLayout());
/* here u can directly call the function like given or use <AppLayout /> inside render()  */
//console.log(indexRouter);
root1.render(<RouterProvider router={indexRouter} />);
