export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar skeleton */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-sm space-y-4 animate-pulse">
              <div className="h-6 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
          </aside>

          {/* Main content skeleton */}
          <main className="flex-1 space-y-4 animate-pulse">
            {/* Header */}
            <div className="h-8 bg-gray-300 rounded w-1/3"></div>
            {/* Grid of product cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 shadow-sm space-y-2"
                >
                  <div className="h-40 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
