import { Users } from "lucide-react";

const SidebarSkeleton = () => {
  const skeletonContacts = Array(8).fill(null);

  // Random widths for names & statuses
  const nameWidths = ["w-28", "w-32", "w-36"];
  const statusWidths = ["w-12", "w-16", "w-20"];

  return (
    <aside
      className="h-full w-20 lg:w-72 border-r border-base-300 
    flex flex-col transition-all duration-200 animate-pulse"
    >
      {/* Header */}
      <div className="border-b border-base-300 w-full p-5">
        <div className="flex items-center gap-2">
          <Users className="w-6 h-6 text-base-content/60" />
          <span className="font-medium hidden lg:block text-base-content/60">
            Contacts
          </span>
        </div>
      </div>

      {/* Skeleton Contacts */}
      <div className="overflow-y-auto w-full py-3 space-y-2">
        {skeletonContacts.map((_, idx) => (
          <div
            key={idx}
            className="w-full p-3 flex items-center gap-3 rounded-lg"
          >
            {/* Avatar skeleton */}
            <div className="relative mx-auto lg:mx-0">
              <div className="skeleton size-12 rounded-full" />
            </div>

            {/* User info skeleton - only visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0 flex-1 space-y-2">
              <div
                className={`skeleton h-4 rounded-md ${
                  nameWidths[idx % nameWidths.length]
                }`}
              />
              <div
                className={`skeleton h-3 rounded-md ${
                  statusWidths[idx % statusWidths.length]
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;
