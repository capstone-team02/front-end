import ReactDOM from "react-dom/client";
import React, { useEffect } from "react";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();
root.render(
  <>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RouterProvider router={Router} />
        
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </>
);
