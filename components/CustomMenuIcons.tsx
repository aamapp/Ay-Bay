import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const CustomEditIcon: React.FC<IconProps> = ({
  className,
  size = 20,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path
        d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.04 3.02001L8.16 10.9C7.86 11.2 7.56 11.79 7.5 12.22L7.07 15.23C6.91 16.32 7.68 17.08 8.77 16.93L11.78 16.5C12.2 16.44 12.79 16.14 13.1 15.84L20.98 7.96001C22.34 6.60001 22.98 5.02001 20.98 3.02001C18.98 1.02001 17.4 1.66001 16.04 3.02001Z"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.91 4.1499C15.58 6.5399 17.45 8.4099 19.85 9.0899"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CustomDeleteIcon: React.FC<IconProps> = ({
  className,
  size = 20,
}) => {
  const scaledSize = Math.round(size * 1.15); // Slightly larger
  return (
    <svg
      width={scaledSize}
      height={scaledSize}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Lid handle */}
      <path d="M10 9V7.2c0-.7.5-1.2 1.2-1.2h1.6c.7 0 1.2.5 1.2 1.2V9" />

      {/* Lid bar */}
      <path d="M5 9h14" />

      {/* Grab can body with rounded corner */}
      <path d="M7 9l.5 9c0 1.5 1.2 2.5 2.5 2.5h4c1.3 0 2.5-1 2.5-2.5l.5-9" />

      {/* 2 horizontal lines inside, exactly as in reference */}
      <path d="M10 13h4" />
      <path d="M10 16h4" />
    </svg>
  );
};

export const CustomListChecksIcon: React.FC<{
  className?: string;
  size?: number | string;
  strokeWidth?: number;
}> = ({ className, size = 20, strokeWidth = 2 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Top Row Checkmark & Line */}
      <path d="m3 7 2 2 4-4" />
      <path d="M13 6h8" />

      {/* Bottom Row Checkmark & Line */}
      <path d="m3 17 2 2 4-4" />
      <path d="M13 18h8" />
    </svg>
  );
};

export const CustomBudgetIcon: React.FC<{
  className?: string;
  size?: number | string;
  strokeWidth?: number;
  active?: boolean;
}> = ({ className, size = 20, strokeWidth = 1.5, active = false }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path 
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" 
        fill={active ? "currentColor" : "none"}
      />
      <path 
        d="M7.33008 14.49L9.71008 11.4C10.0501 10.96 10.6801 10.88 11.1201 11.22L12.9501 12.66C13.3901 13 14.0201 12.92 14.3601 12.49L16.6701 9.51001" 
        stroke={active ? "white" : "currentColor"}
      />
    </svg>
  );
};

export const CustomExpensesTabIcon: React.FC<{
  className?: string;
  size?: number | string;
  strokeWidth?: number;
  active?: boolean;
}> = ({ className, size = 20, strokeWidth = 1.5, active = false }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path 
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" 
        fill={active ? "currentColor" : "none"}
      />
      <path d="M17.5 10H6.5l3.5-3.5" stroke={active ? "white" : "currentColor"} />
      <path d="M6.5 14h11l-3.5 3.5" stroke={active ? "white" : "currentColor"} />
    </svg>
  );
};

export const CustomDuesTabIcon: React.FC<{
  className?: string;
  size?: number | string;
  strokeWidth?: number;
  active?: boolean;
}> = ({ className, size = 20, strokeWidth = 1.5, active = false }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path 
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" 
        fill={active ? "currentColor" : "none"}
      />
      <path d="M10 6.5v11l-3.5-3.5" stroke={active ? "white" : "currentColor"} />
      <path d="M14 17.5V6.5l3.5 3.5" stroke={active ? "white" : "currentColor"} />
    </svg>
  );
};

export const CustomSavingsTabIcon: React.FC<{
  className?: string;
  size?: number | string;
  strokeWidth?: number;
  active?: boolean;
}> = ({ className, size = 20, strokeWidth = 1.5, active = false }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path 
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" 
        fill={active ? "currentColor" : "none"}
      />
      <path d="M12 7v10" stroke={active ? "white" : "currentColor"} />
      <path d="M7 12h10" stroke={active ? "white" : "currentColor"} />
    </svg>
  );
};

export const CustomTasksTabIcon: React.FC<{
  className?: string;
  size?: number | string;
  strokeWidth?: number;
  active?: boolean;
}> = ({ className, size = 20, strokeWidth = 1.5, active = false }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path 
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" 
        fill={active ? "currentColor" : "none"}
      />
      <path d="m7.5 9 1.5 1.5 3-3" stroke={active ? "white" : "currentColor"} />
      <path d="M14.5 10h3" stroke={active ? "white" : "currentColor"} />
      <path d="m7.5 14.5 1.5 1.5 3-3" stroke={active ? "white" : "currentColor"} />
      <path d="M14.5 15h3" stroke={active ? "white" : "currentColor"} />
    </svg>
  );
};

