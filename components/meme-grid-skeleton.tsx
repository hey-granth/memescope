import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function MemeGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i} className="overflow-hidden h-full flex flex-col border-gray-200 dark:border-gray-800">
          <CardHeader className="p-4 pb-2 space-y-2">
            <Skeleton className="h-6 w-full dark:bg-gray-700" />
            <Skeleton className="h-4 w-1/3 dark:bg-gray-700" />
          </CardHeader>
          <CardContent className="p-4 pt-2 flex-grow">
            <Skeleton className="h-48 w-full rounded-md dark:bg-gray-700" />
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between">
            <Skeleton className="h-5 w-16 dark:bg-gray-700" />
            <Skeleton className="h-5 w-16 dark:bg-gray-700" />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
