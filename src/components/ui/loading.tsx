const LoadingSpinner = ({ text = 'Loading ...' }: { text?: string }) => {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center p-4 space-x-2">
      <span className="h-6 w-6 block rounded-full border-4 border-t-slate-600 animate-spin"></span>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
};

export default LoadingSpinner;
