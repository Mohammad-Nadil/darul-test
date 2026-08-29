import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto h-full relative px-3  ${className}`}>
      {children}
    </div>
  );
}
