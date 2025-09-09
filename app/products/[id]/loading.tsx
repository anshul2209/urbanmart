export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Breadcrumb skeleton */}
      <div className="mb-6">
        <div className="h-4 bg-gray-200 rounded w-48"></div>
      </div>

      {/* Product skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-4 sm:gap-6 lg:gap-10">
        {/* Image skeleton */}
        <div className="relative w-full max-w-sm mx-auto md:mx-0 md:max-w-xl lg:max-w-2xl aspect-[3/2] md:aspect-square bg-gray-200 rounded-lg"></div>

        {/* Content skeleton */}
        <div className="flex flex-col gap-3 sm:gap-4 md:pl-4 lg:pl-6">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="h-6 bg-gray-200 rounded w-16"></div>
            <div className="h-4 bg-gray-200 rounded w-12"></div>
            <div className="h-4 bg-gray-200 rounded w-16"></div>
          </div>
          <div className="h-10 bg-gray-200 rounded w-32"></div>
        </div>
      </div>
    </div>
  )
}
