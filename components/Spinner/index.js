const Spinner = ({ size = "md", color = "white" }) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16"
  };

  const colorClasses = {
    primary: "border-primary-200 border-t-primary-600",
    white: "border-white border-opacity-30 border-t-white",
    secondary: "border-secondary-200 border-t-secondary-600"
  };

  return (
    <div className="flex justify-center items-center">
      <div className={`animate-spin rounded-full border-4 ${sizeClasses[size]} ${colorClasses[color]}`}></div>
    </div>
  );
};

export default Spinner;
