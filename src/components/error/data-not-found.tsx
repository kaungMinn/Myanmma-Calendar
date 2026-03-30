import { AlertTriangle, RefreshCw, Sprout, Wheat } from "lucide-react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import { Button } from "@/components/ui/button";

function DataNotFound() {
  const error = useRouteError();
  const isRouteError = isRouteErrorResponse(error);

  const handleReload = () => {
    // Hard reload the page
    window.location.reload();
  };

  const goHome = () => {
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Agricultural Icon */}
        <div className="relative mx-auto w-16 h-16">
          <div className="absolute inset-0 bg-linear-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center">
            <Wheat className="h-8 w-8 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <AlertTriangle className="h-2.5 w-2.5 text-white" />
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-2">
          <h1 className="text-lg font-semibold text-gray-900">Data Not Found</h1>

          {isRouteError
            ? (
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">
                    {error.status === 404
                      ? "The page you're looking for doesn't exist."
                      : `An error occurred (${error.status})`}
                  </p>
                  {error.statusText && (
                    <p className="text-xs text-gray-500">{error.statusText}</p>
                  )}
                </div>
              )
            : (
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">
                    Something went wrong while loading this page.
                  </p>
                  <p className="text-xs text-gray-500">
                    Please try refreshing the page or contact support if the problem persists.
                  </p>
                </div>
              )}
        </div>

        {/* Agricultural Illustration */}
        <div className="flex justify-center space-x-3 py-3">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
            <Sprout className="h-3 w-3 text-green-600" />
          </div>
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
          <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button
            onClick={handleReload}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white text-xs py-2"
          >
            <RefreshCw className="h-3 w-3 mr-1" />
            Reload
          </Button>

          <Button
            onClick={goHome}
            variant="outline"
            className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 text-xs py-2"
          >
            Dashboard
          </Button>
        </div>

        {/* Footer Message */}
        <div className="pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            If the problem continues, please contact your system administrator
          </p>
        </div>
      </div>
    </div>
  );
}

export default DataNotFound;
