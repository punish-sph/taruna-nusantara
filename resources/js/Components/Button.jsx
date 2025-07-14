import React from "react";
import { motion } from "framer-motion";

export default function Button({
  type = "button",
  onClick,
  disabled = false,
  isLoading = false,
  loadingText = "Loading...",
  children,
  icon: Icon,
  iconPosition = "left",
  variant = "primary",
  theme = "light",
  size = "md",
  rounded = "lg",
  width = "auto",
  shadow = "md",
  animation = "bounce",
  className = "",
  form,
  active = false,
  title,
  iconClassName = "",
  loadingSpinnerSize = "md",
  isFullWidth = false,
}) {
  const baseClasses = "font-semibold transition-all flex items-center justify-center focus:outline-none relative overflow-hidden select-none";
  
  const sizeClasses = {
    xs: "px-2.5 py-1.5 text-xs min-h-[28px] gap-1",
    sm: "px-3.5 py-2 text-sm min-h-[36px] gap-1.5",
    md: "px-4 py-2.5 text-base min-h-[44px] gap-2",
    lg: "px-6 py-3 text-lg min-h-[52px] gap-2.5",
    xl: "px-8 py-4 text-xl min-h-[60px] gap-3",
  };
  
  const iconSizes = {
    xs: "w-3.5 h-3.5",
    sm: "w-4.5 h-4.5",
    md: "w-5.5 h-5.5",
    lg: "w-6.5 h-6.5",
    xl: "w-7.5 h-7.5",
  };
  
  const spinnerSizes = {
    xs: "w-3 h-3 border-2",
    sm: "w-3.5 h-3.5 border-2",
    md: "w-4 h-4 border-2",
    lg: "w-5 h-5 border-2",
    xl: "w-6 h-6 border-2",
  };
  
  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };
  
  const widthClasses = {
    auto: "w-auto",
    full: "w-full",
    fit: "w-fit",
  };
  
  const shadowClasses = {
    none: "",
    sm: "shadow-sm hover:shadow-md",
    md: "shadow-md hover:shadow-lg",
    lg: "shadow-lg hover:shadow-xl",
    xl: "shadow-xl hover:shadow-2xl",
  };
  
  const getAnimationProps = () => {
    if (disabled || isLoading) return {};
    
    switch (animation) {
      case "bounce":
        return {
          whileHover: { scale: 1.03 },
          whileTap: { scale: 0.97 },
        };
      case "pulse":
        return {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
        };
      case "slide":
        return {
          whileHover: { y: -2 },
          whileTap: { y: 0 },
        };
      case "glow":
        return {
          whileHover: { boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" },
          whileTap: { scale: 0.98 },
        };
      case "lift":
        return {
          whileHover: { 
            y: -3,
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
          },
          whileTap: { 
            y: 0,
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          },
        };
      default:
        return {};
    }
  };
  
  const getVariantClasses = () => {
    const lightVariants = {
      primary: `bg-blue-600 text-white hover:bg-blue-700 ${active ? "bg-blue-700 ring-2 ring-blue-300" : ""}`,
      secondary: `bg-gray-200 text-gray-800 hover:bg-gray-300 ${active ? "bg-gray-300 ring-2 ring-gray-300" : ""}`,
      danger: `bg-red-600 text-white hover:bg-red-700 ${active ? "bg-red-700 ring-2 ring-red-300" : ""}`,
      success: `bg-green-600 text-white hover:bg-green-700 ${active ? "bg-green-700 ring-2 ring-green-300" : ""}`,
      warning: `bg-yellow-500 text-white hover:bg-yellow-600 ${active ? "bg-yellow-600 ring-2 ring-yellow-300" : ""}`,
      info: `bg-cyan-600 text-white hover:bg-cyan-700 ${active ? "bg-cyan-700 ring-2 ring-cyan-300" : ""}`,
      ghost: `bg-transparent text-gray-800 hover:bg-gray-100 ${active ? "bg-gray-100" : ""}`,
      outline: `border-2 border-white text-white bg-transparent hover:bg-white hover:text-black ${active ? "bg-white text-white" : ""}`,
      gradient: `bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 ${active ? "from-purple-700 to-blue-700 ring-2 ring-blue-300" : ""}`,
      glass: `bg-white/20 backdrop-blur-md border border-white/30 text-gray-800 hover:bg-white/30 ${active ? "bg-white/40 ring-2 ring-white/20" : ""}`,
      minimal: `bg-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 ${active ? "text-gray-800 bg-gray-50" : ""}`,
      elevated: `bg-white text-gray-800 shadow-lg hover:shadow-xl border border-gray-200 ${active ? "ring-2 ring-blue-200" : ""}`,
      mono: `bg-gray-800 text-white shadow-lg hover:bg-gray-900 ${active ? "ring-2 ring-gray-300" : ""}`,
      sidebar: `text-gray-700 hover:bg-gray-100 ${active ? "bg-blue-100 text-blue-700" : ""}`,
    };
    
    const darkVariants = {
      primary: `bg-blue-500 text-white hover:bg-blue-600 ${active ? "bg-blue-600 ring-2 ring-blue-400" : ""}`,
      secondary: `bg-gray-700 text-gray-100 hover:bg-gray-600 ${active ? "bg-gray-600 ring-2 ring-gray-500" : ""}`,
      danger: `bg-red-500 text-white hover:bg-red-600 ${active ? "bg-red-600 ring-2 ring-red-400" : ""}`,
      success: `bg-green-500 text-white hover:bg-green-600 ${active ? "bg-green-600 ring-2 ring-green-400" : ""}`,
      warning: `bg-yellow-500 text-white hover:bg-yellow-600 ${active ? "bg-yellow-600 ring-2 ring-yellow-400" : ""}`,
      info: `bg-cyan-500 text-white hover:bg-cyan-600 ${active ? "bg-cyan-600 ring-2 ring-cyan-400" : ""}`,
      ghost: `bg-transparent text-gray-200 hover:bg-gray-800 ${active ? "bg-gray-800" : ""}`,
      outline: `border-2 border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white ${active ? "bg-blue-500 text-white" : ""}`,
      gradient: `bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 ${active ? "from-purple-600 to-blue-600 ring-2 ring-blue-400" : ""}`,
      glass: `bg-gray-800/20 backdrop-blur-md border border-gray-700 text-gray-100 hover:bg-gray-800/30 ${active ? "bg-gray-800/40 ring-2 ring-gray-600" : ""}`,
      minimal: `bg-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-800 ${active ? "text-gray-200 bg-gray-800" : ""}`,
      elevated: `bg-gray-800 text-gray-100 shadow-lg hover:shadow-xl border border-gray-700 ${active ? "ring-2 ring-blue-500" : ""}`,
      mono: `bg-gray-900 text-white shadow-lg hover:bg-gray-950 ${active ? "ring-2 ring-gray-500" : ""}`,
      sidebar: `text-gray-300 hover:bg-gray-800 ${active ? "bg-blue-900/30 text-blue-300" : ""}`,
    };
    
    return theme === "dark" ? darkVariants[variant] : lightVariants[variant];
  };
  
  const getDisabledClasses = () => {
    return "opacity-60 cursor-not-allowed hover:transform-none hover:shadow-none";
  };
  
  const variantClasses = getVariantClasses();
  const disabledClasses = disabled || isLoading ? getDisabledClasses() : "";
  
  const finalClasses = [
    baseClasses,
    sizeClasses[size],
    roundedClasses[rounded],
    widthClasses[width],
    shadowClasses[shadow],
    variantClasses,
    disabledClasses,
    isFullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  
  const renderLoadingSpinner = () => (
    <div 
      className={`animate-spin rounded-full border-2 border-t-transparent border-current ${spinnerSizes[loadingSpinnerSize]}`}
    />
  );
  
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center gap-2">
          {renderLoadingSpinner()}
          {loadingText && <span>{loadingText}</span>}
        </div>
      );
    }
    
    const iconElement = Icon ? (
      <Icon className={`${iconSizes[size]} ${iconClassName}`} />
    ) : null;
    
    const textElement = children ? <span>{children}</span> : null;
    
    if (iconPosition === "right") {
      return (
        <>
          {textElement}
          {iconElement}
        </>
      );
    }
    
    if (iconPosition === "top") {
      return (
        <div className="flex flex-col items-center gap-1">
          {iconElement}
          {textElement}
        </div>
      );
    }
    
    if (iconPosition === "bottom") {
      return (
        <div className="flex flex-col items-center gap-1">
          {textElement}
          {iconElement}
        </div>
      );
    }
    
    return (
      <>
        {iconElement}
        {textElement}
      </>
    );
  };
  
  return (
    <motion.button
      {...getAnimationProps()}
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={finalClasses}
      form={form}
      title={title}
    >
      {renderContent()}
      
      {!disabled && !isLoading && (
        <motion.span
          className="absolute inset-0 bg-white opacity-0 rounded-full"
          initial={{ scale: 0.5, opacity: 0 }}
          whileTap={{ scale: 2, opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
}