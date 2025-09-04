const MessageSkeleton = () => {
  const skeletonMessages = Array(6).fill(null);

  // Predefined bubble widths to simulate real messages
  const bubbleWidths = ["w-24", "w-40", "w-60"];

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 animate-pulse">
      {skeletonMessages.map((_, idx) => (
        <div key={idx} className={`chat ${idx % 2 === 0 ? "chat-start" : "chat-end"}`}>
          {/* Avatar */}
          <div className="chat-image avatar">
            <div className="size-10 rounded-full">
              <div className="skeleton w-full h-full rounded-full" />
            </div>
          </div>

          {/* Header (timestamp placeholder) */}
          <div className="chat-header mb-1">
            <div className="skeleton h-3 w-14 rounded-md" />
          </div>

          {/* Chat Bubble */}
          <div className="chat-bubble bg-transparent p-0">
            <div
              className={`skeleton h-6 sm:h-8 rounded-lg ${
                bubbleWidths[idx % bubbleWidths.length]
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageSkeleton;
