import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DataLayout from "@/layouts/data-layout";

function DashboardList() {
  return (
    <DataLayout breadCrumbs={[]} title="Dashboard">
      <div className="text-left">

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Calendar Features</CardTitle>
            <CardDescription>Key capabilities of the Myanmar Calendar system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-gray-600 text-left">
              <p>• 4-month calendar view for easy navigation</p>
              <p>• Public holidays clearly marked and highlighted</p>
              <p>• Interactive hover tooltips showing holiday names</p>
              <p>• 5-year holiday data coverage (2021-2026)</p>
              <p>• Clean grid layout with proper date alignment</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">System Information</CardTitle>
            <CardDescription>About the Myanmar Calendar management system</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 text-left">
              The Myanmar Calendar system provides traditional calendar dates with public holiday tracking.
              Navigate through the sidebar to access the calendar features and manage holiday data.
            </p>
          </CardContent>
        </Card>
      </div>
    </DataLayout>
  );
}

export default DashboardList;
