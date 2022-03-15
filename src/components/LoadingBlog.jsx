const LoadingBlog = () => {
  return (
    <div className="mt-4 w-full rounded-lg border">
      <div className="px-8 py-6">
        <div className="flex h-full animate-pulse flex-row items-center justify-start space-x-5">
          <div className="flex w-full flex-col gap-y-3">
            <div className="h-6 w-72 rounded-md bg-gray-300" />
            <div className="h-6 w-32 rounded-md bg-gray-300" />
            <div className="mt-8 h-24 w-full rounded-md bg-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingBlog;
