// Loading animation

export function CardSkeleton() {
    return (
      <div className="max-w-5xl w-64 h-[20rem] bg-gray-200 rounded-lg animate-pulse">
      <div className="h-48 w-full bg-gray-300 rounded-t-lg mb-4">
      </div>
      <div className="px-5 pb-5">
        <div className="h-4 bg-gray-300 rounded w-3/4 mt-2 mb-2">
        </div>
        <div className="h-4 bg-gray-300 rounded w-full mb-4">
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 bg-gray-300 rounded w-1/4"></div>
          <button className="hidden md:block h-8 bg-gray-300 rounded w-32 md:w-44"></button>
          <button className="block md:hidden h-8 bg-gray-300 rounded w-32 md:w-44 mt-4">
          </button>
        </div>
      </div>
    </div>
    );
  }
  
  export function CardsSkeleton() {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    );
  }