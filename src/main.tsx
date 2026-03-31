import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AlertCircleIcon } from "lucide-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";

import "./index.css";
import toast from "react-hot-toast";

import App from "./app.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert.tsx";

export const queryClient = new QueryClient({
  defaultOptions: {
    // This part handles your data fetching (GET requests)
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes in milliseconds
      // Optional: It's often good practice to disable this for data-heavy apps
      refetchOnWindowFocus: false,
      networkMode: "online",
    },
    // This part handles your data changes (POST/PUT/DELETE)
    mutations: {
      onError: (error: any) => {
        // Handle validation errors (422 status)
        if (error?.response?.status === 422 && error?.response?.data?.errors) {
          const errors = error.response.data.errors;
          const firstError = Object.values(errors)[0] as string;
          toast.error(firstError || "Validation failed");
        }
        else {
          toast.error(error?.response?.data?.message || "An error occurred");
        }
      },
    },
  },
});

function fallbackRender({ error }: { error: any }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert" className="flex items-center justify-center h-screen w-screen bg-accent">
      <Alert variant="default" className="w-100">
        <AlertCircleIcon />
        <AlertTitle>🔄 Something went wrong</AlertTitle>
        <AlertDescription>

          <ul className="list-inside list-disc text-sm">
            <li>{error.message}</li>

          </ul>
        </AlertDescription>
      </Alert>

    </div>
  );
}

async function enableMocking() {
  // Only enable in development (and during the code test)
  if (import.meta.env.DEV) {
    const { worker } = await import("./mocks/browser");

    // worker.start() returns a Promise. We wait for it.
    return worker.start({
      onUnhandledRequest: "bypass", // Keeps the console clean from other assets
    });
  } else {
    // Unregister MSW service worker in production to prevent 404s
    if ("serviceWorker" in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      for (const registration of registrations) {
        if (registration.active?.scriptURL.includes("mockServiceWorker.js")) {
          await registration.unregister();
        }
      }
    }
  }
}

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <ErrorBoundary
//       fallbackRender={fallbackRender}
//     // onReset={(details) => {
//     //   // Reset the state of your app so the error doesn't happen again
//     // }}
//     >
//       <QueryClientProvider client={queryClient}>
//         <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
//           <App />
//         </ThemeProvider>
//         <ReactQueryDevtools initialIsOpen={false} />
//       </QueryClientProvider>
//     </ErrorBoundary>
//   </StrictMode>,
// );

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <ErrorBoundary fallbackRender={fallbackRender}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <App />
          </ThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ErrorBoundary>
    </StrictMode>,
  );
});
