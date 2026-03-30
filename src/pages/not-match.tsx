import { ArrowLeft, Home, Sprout } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

function NotMatch() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8 p-8 max-w-lg">
        {/* Agricultural Icon + 404 */}
        <div className="space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <Sprout className="h-8 w-8 text-primary-foreground" />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground">404</h1>
            <p className="text-lg text-muted-foreground">Oops! Field Not Found</p>
          </div>
        </div>

        {/* Agricultural-themed description */}
        <p className="text-muted-foreground text-center leading-relaxed">
          Looks like you've wandered off the farm! The page you're looking for
          doesn't exist or has been moved. Let's get you back to your agricultural dashboard.
        </p>

        {/* Farm-themed divider */}
        <div className="flex items-center justify-center space-x-2">
          <div className="h-px bg-border w-12"></div>
          <Sprout className="h-4 w-4 text-muted-foreground" />
          <div className="h-px bg-border w-12"></div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => navigate("/settings")}
            className="flex items-center gap-2"
          >
            <Home className="h-4 w-4" />
            Return to Dashboard
          </Button>

          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
        </div>

        {/* Agricultural footer text */}
        <p className="text-xs text-muted-foreground text-center italic">
          "Every farmer knows that sometimes the best path is the one back home"
        </p>
      </div>
    </div>
  );
}

export default NotMatch;
