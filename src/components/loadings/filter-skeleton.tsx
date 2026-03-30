import { Skeleton } from "../ui/skeleton";

function FilterSkeleton() {
  return (
    <div className="space-y-6 px-5">
      {/* TagsFormField Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-full" />

      </div>

      {/* CommentsFormField Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-full" />

      </div>

      {/* ProductionsFormField Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-full" />

      </div>

      {/* PestsFormField Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-full" />

      </div>

      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-full" />

      </div>
    </div>
  );
}

export default FilterSkeleton;
