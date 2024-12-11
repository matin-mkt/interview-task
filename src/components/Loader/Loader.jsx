const Loader = () => {
  return (
    <div className={`flex pl-1 items-center justify-center`}>
      <div
        className="inline-block w-4 h-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      />
    </div>
  );
};

export default Loader;
