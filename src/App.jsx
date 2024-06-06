import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import Product from "./Product/Product";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { GamesContext } from "./Context/GameContext";
import SignUp from "./Pages/SignUp";
import Members from "./Members/Members";
import About from "./Pages/About";
import Community from "./Pages/Community";
import Orders from "./Orders/Orders";
import NewAddress from "./Checkout/NewAddress";
import Terms from "./Terms/Terms";
import AStore from "./Accessories/AStore";
import Timeline from "./Timeline/Timeline";
import Tracking from "./Tracking/Tracking";
import Collection from "./Collection/Collection";
import Modal from "./Utils/Modal";
import Review from "./Utils/Review";
import List from "./List/List";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import PrivateRoute from "./ProtectedRoute/PrivateRoute";
import Login from "./Pages/Login";



function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <GamesContext>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/"
              element={
                
                  <Home />

              }
            />
            <Route
              path="/store"
              element={
                <ProtectedRoute>
                  <Store />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
            
                  <Login />
              }
            />
           
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route
              path="/product"
              element={
                <ProtectedRoute>
                  <Product />
                </ProtectedRoute>
              }
            />
            <Route
              path="/member"
              element={
                <ProtectedRoute>
                  <Members />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path="/community"
              element={
                <ProtectedRoute>
                  <Community />
                </ProtectedRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              }
            />
            <Route
              path="/address"
              element={
                <ProtectedRoute>
                  <NewAddress />
                </ProtectedRoute>
              }
            />
            <Route
              path="/terms"
              element={
                <ProtectedRoute>
                  <Terms />
                </ProtectedRoute>
              }
            />
            <Route
              path="/accessories"
              element={
                <ProtectedRoute>
                  <AStore />
                </ProtectedRoute>
              }
            />
            <Route
              path="/timeline"
              element={
                <ProtectedRoute>
                  <Tracking />
                </ProtectedRoute>
              }
            />
            <Route
              path="/collection"
              element={
                <ProtectedRoute>
                  <Collection />
                </ProtectedRoute>
              }
            />
            <Route
              path="/list"
              element={
              
                  <PrivateRoute>
          
                    <List />
                
                  </PrivateRoute>
                  
                
              }
            />
            <Route
              path="/modal"
              element={
                <ProtectedRoute>
                  <Modal>
                    <Review />
                  </Modal>
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </GamesContext>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
