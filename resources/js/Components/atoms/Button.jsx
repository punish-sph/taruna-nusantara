import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

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
  rounded = "md",
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
    sm: "px-4 py-2 text-sm min-h-[36px] gap-1.5",
    md: "px-4 py-2.5 text-base min-h-[44px] gap-2",
    lg: "px-6 py-3 text-lg min-h-[52px] gap-2.5",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const spinnerSizes = {
    sm: "w-3.5 h-3.5 border-2",
    md: "w-4 h-4 border-2",
    lg: "w-5 h-5 border-2",
  };

  const roundedClasses = {
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
  };

  const getAnimationProps = () => {
    if (disabled || isLoading) return {};
    switch (animation) {
      case "bounce":
        return { whileHover: { scale: 1.03 }, whileTap: { scale: 0.97 } };
      case "pulse":
        return { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } };
      case "slide":
        return { whileHover: { y: -2 }, whileTap: { y: 0 } };
      case "glow":
        return {
          whileHover: { boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" },
          whileTap: { scale: 0.98 },
        };
      case "lift":
        return {
          whileHover: {
            y: -3,
            boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
          },
          whileTap: {
            y: 0,
            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
          },
        };
      default:
        return {};
    }
  };

  const variants = {
    light: {
      primary: "bg-sky-500 hover:bg-sky-600 text-white",
      secondary: "bg-gray-500 hover:bg-gray-600 text-white",
      danger: "bg-red-500 hover:bg-red-600 text-white",
      warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
      success: "bg-green-500 hover:bg-green-600 text-white",
      outline: "border-2 border-white text-white bg-transparent hover:bg-white hover:text-black",
    },
    dark: {
      primary: "bg-sky-600 hover:bg-sky-700 text-white",
      secondary: "bg-gray-600 hover:bg-gray-700 text-white",
      danger: "bg-red-600 hover:bg-red-700 text-white",
      warning: "bg-yellow-600 hover:bg-yellow-700 text-white",
      success: "bg-green-600 hover:bg-green-700 text-white",
      outline: "border-2 border-black text-black bg-transparent hover:bg-black hover:text-white",
    },
  };

  const variantClasses = variants[theme]?.[variant] || variants.light.primary;
  const disabledClasses = disabled || isLoading ? "opacity-50 cursor-not-allowed" : "";

  const finalClasses = clsx(
    baseClasses,
    sizeClasses[size],
    roundedClasses[rounded],
    widthClasses[width],
    shadowClasses[shadow],
    variantClasses,
    disabledClasses,
    isFullWidth && "w-full",
    className
  );

  const renderLoadingSpinner = () => (
    <div
      className={clsx(
        "animate-spin rounded-full border-2 border-t-transparent border-current",
        spinnerSizes[loadingSpinnerSize]
      )}
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
      <Icon className={clsx(iconSizes[size], iconClassName)} />
    ) : null;

    const textElement = children ? <span>{children}</span> : null;

    switch (iconPosition) {
      case "right":
        return (
          <>
            {textElement}
            {iconElement}
          </>
        );
      case "top":
        return (
          <div className="flex flex-col items-center gap-1">
            {iconElement}
            {textElement}
          </div>
        );
      case "bottom":
        return (
          <div className="flex flex-col items-center gap-1">
            {textElement}
            {iconElement}
          </div>
        );
      default:
        return (
          <>
            {iconElement}
            {textElement}
          </>
        );
    }
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
