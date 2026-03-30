import { Construction, Sprout } from "lucide-react";

import { Badge } from "@/components/ui/badge";

function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <div className="text-center space-y-6 max-w-md">
        {/* Construction Icon */}
        <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
          <Construction className="h-10 w-10 text-primary" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>

        {/* Status Badge */}
        <Badge variant="secondary" className="text-sm px-4 py-2">
          Under Construction
        </Badge>

        {/* Agricultural-themed message */}
        <p className="text-muted-foreground leading-relaxed">
          We're cultivating something amazing! Your agricultural dashboard is currently
          being prepared with the best tools and features to help you manage your farm efficiently.
        </p>

        {/* Farm-themed divider */}
        <div className="flex items-center justify-center space-x-2">
          <div className="h-px bg-border w-16"></div>
          <Sprout className="h-4 w-4 text-muted-foreground" />
          <div className="h-px bg-border w-16"></div>
        </div>

        {/* Progress message */}
        <p className="text-sm text-muted-foreground italic">
          "Great things take time to grow, just like the best crops!"
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
