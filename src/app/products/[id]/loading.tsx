export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 animate-pulse">
          {/* Gallery skeleton */}
          <aside className="w-full lg:w-1/2 shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
              <div className="h-96 bg-gray-300 rounded"></div>
              <div className="flex space-x-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-20 w-20 bg-gray-300 rounded"></div>
                ))}
              </div>
            </div>
          </aside>

          {/* Info skeleton */}
          <main className="flex-1 space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
              <div className="h-8 bg-gray-300 rounded w-3/4"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="h-4 bg-gray-300 rounded w-2/3"></div>
              <div className="h-10 bg-gray-300 rounded w-1/3"></div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
