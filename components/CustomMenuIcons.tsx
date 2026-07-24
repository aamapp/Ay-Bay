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
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" 
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={active ? "currentColor" : "none"}
      />
      <g>
        <path 
          d="M17.1494 13.8203L14.1094 16.8603" 
          stroke={active ? "white" : "currentColor"} 
          strokeWidth={strokeWidth} 
          strokeMiterlimit="10" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M6.84961 13.8203H17.1496" 
          stroke={active ? "white" : "currentColor"} 
          strokeWidth={strokeWidth} 
          strokeMiterlimit="10" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M6.84961 10.1801L9.88961 7.14014" 
          stroke={active ? "white" : "currentColor"} 
          strokeWidth={strokeWidth} 
          strokeMiterlimit="10" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M17.1496 10.1802H6.84961" 
          stroke={active ? "white" : "currentColor"} 
          strokeWidth={strokeWidth} 
          strokeMiterlimit="10" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </g>
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
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" 
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={active ? "currentColor" : "none"}
      />
      <g>
        <path 
          d="M10.1806 17.1504L7.14062 14.1104" 
          stroke={active ? "white" : "currentColor"} 
          strokeWidth={strokeWidth} 
          strokeMiterlimit="10" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M10.1797 6.8501V17.1501" 
          stroke={active ? "white" : "currentColor"} 
          strokeWidth={strokeWidth} 
          strokeMiterlimit="10" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M13.8203 6.8501L16.8603 9.8901" 
          stroke={active ? "white" : "currentColor"} 
          strokeWidth={strokeWidth} 
          strokeMiterlimit="10" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M13.8203 17.1501V6.8501" 
          stroke={active ? "white" : "currentColor"} 
          strokeWidth={strokeWidth} 
          strokeMiterlimit="10" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </g>
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
      <path d="M8 12H16" stroke={active ? "white" : "currentColor"} />
      <path d="M12 16V8" stroke={active ? "white" : "currentColor"} />
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
      <path d="M12.37 8.87988H17.62" stroke={active ? "white" : "currentColor"} />
      <path d="M6.38 8.87988L7.13 9.62988L9.38 7.37988" stroke={active ? "white" : "currentColor"} />
      <path d="M12.37 15.8799H17.62" stroke={active ? "white" : "currentColor"} />
      <path d="M6.38 15.8799L7.13 16.6299L9.38 14.3799" stroke={active ? "white" : "currentColor"} />
    </svg>
  );
};

export const CustomWalletMenuIcon: React.FC<{
  className?: string;
  size?: number | string;
  strokeWidth?: number;
}> = ({ className, size = 20, strokeWidth = 1.5 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13 11.1499H7"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 11.1501V6.53009C2 4.49009 3.65 2.84009 5.69 2.84009H11.31C13.35 2.84009 15 4.11009 15 6.15009"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.48 12.1999C16.98 12.6799 16.74 13.4199 16.94 14.1799C17.19 15.1099 18.11 15.6999 19.07 15.6999H20V17.1499C20 19.3599 18.21 21.1499 16 21.1499H6C3.79 21.1499 2 19.3599 2 17.1499V10.1499C2 7.9399 3.79 6.1499 6 6.1499H16C18.2 6.1499 20 7.9499 20 10.1499V11.5999H18.92C18.36 11.5999 17.85 11.8199 17.48 12.1999Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 12.6201V14.6801C22 15.2401 21.5399 15.7001 20.9699 15.7001H19.0399C17.9599 15.7001 16.97 14.9101 16.88 13.8301C16.82 13.2001 17.0599 12.6101 17.4799 12.2001C17.8499 11.8201 18.36 11.6001 18.92 11.6001H20.9699C21.5399 11.6001 22 12.0601 22 12.6201Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CustomRecycleBinMenuIcon: React.FC<{
  className?: string;
  size?: number | string;
}> = ({ className, size = 20 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-60 -60 709 709"
      fill="currentColor"
      className={className}
    >
      <g>
        <g>
          <path d="M451.716,146.986H137.289c-16.287,0-31.952,6.876-42.977,18.865c-11.025,11.988-16.566,28.173-15.205,44.403 l27.241,324.744c1.227,14.629,7.854,28.158,18.66,38.096c10.805,9.938,24.842,15.41,39.521,15.41h259.947 c14.68,0,28.715-5.473,39.521-15.41s17.434-23.467,18.66-38.097l27.24-324.744c1.361-16.229-4.18-32.414-15.205-44.402 C483.669,153.862,468.003,146.986,451.716,146.986z M467.208,206.672l-27.24,324.745c-0.676,8.055-7.41,14.247-15.492,14.247 H164.53c-8.083,0-14.817-6.192-15.492-14.247l-27.241-324.745c-0.761-9.067,6.393-16.846,15.492-16.846h314.427 C460.815,189.826,467.968,197.605,467.208,206.672z" />
          <path d="M424.476,589.004H164.529c-14.807,0-28.962-5.52-39.86-15.542c-10.899-10.022-17.583-23.668-18.82-38.422L78.608,210.296 c-1.373-16.37,4.216-32.693,15.335-44.784c11.119-12.092,26.918-19.027,43.345-19.027h314.427 c16.429,0,32.227,6.935,43.345,19.027c11.119,12.09,16.708,28.413,15.335,44.782l-27.24,324.744 c-1.237,14.755-7.921,28.4-18.819,38.423C453.437,583.484,439.28,589.004,424.476,589.004z M137.289,147.486 c-16.148,0-31.679,6.817-42.609,18.704c-10.93,11.885-16.425,27.931-15.075,44.023l27.241,324.744 c1.216,14.504,7.787,27.917,18.5,37.77c10.712,9.853,24.628,15.278,39.183,15.278h259.947c14.554,0,28.469-5.426,39.183-15.278 c10.715-9.853,17.285-23.266,18.501-37.771l27.24-324.744c1.35-16.091-4.145-32.137-15.075-44.021 c-10.929-11.886-26.459-18.704-42.608-18.704H137.289z M424.476,546.164H164.53c-8.275,0-15.299-6.459-15.99-14.705 l-27.241-324.745c-0.374-4.461,1.149-8.909,4.179-12.203c3.03-3.295,7.335-5.185,11.811-5.185h314.427 c4.477,0,8.781,1.889,11.811,5.184c3.03,3.294,4.554,7.743,4.18,12.204l-27.24,324.745 C439.774,539.705,432.75,546.164,424.476,546.164z M137.289,190.326c-4.197,0-8.234,1.772-11.075,4.861 c-2.841,3.089-4.269,7.26-3.918,11.442l27.241,324.745c0.648,7.732,7.234,13.789,14.994,13.789h259.946 c7.759,0,14.346-6.057,14.994-13.789l27.24-324.745c0.351-4.183-1.078-8.354-3.92-11.443c-2.841-3.089-6.877-4.86-11.074-4.86 H137.289z" />
        </g>
        <g>
          <path d="M89.292,123.835h410.42c11.83,0,21.42-9.59,21.42-21.42c0-11.83-9.59-21.42-21.42-21.42h-77.799v-0.966V58.886 c0-32.194-26.191-58.386-58.385-58.386H225.478c-32.194,0-58.386,26.192-58.386,58.386v21.143v0.966H89.292 c-11.83,0-21.42,9.59-21.42,21.42C67.872,114.245,77.462,123.835,89.292,123.835z M209.931,58.886 c0-8.586,6.96-15.546,15.546-15.546h138.051c8.584,0,15.545,6.96,15.545,15.546v21.143H209.931V58.886z" />
          <path d="M499.712,124.335H89.292c-12.087,0-21.92-9.833-21.92-21.92c0-12.086,9.833-21.92,21.92-21.92h77.299V58.886 C166.591,26.417,193.007,0,225.478,0h138.051c32.469,0,58.885,26.417,58.885,58.886v21.609h77.299 c12.087,0,21.92,9.833,21.92,21.92C521.632,114.502,511.799,124.335,499.712,124.335z M89.292,81.495 c-11.535,0-20.92,9.385-20.92,20.92c0,11.536,9.385,20.92,20.92,20.92h410.42c11.535,0,20.92-9.385,20.92-20.92 c0-11.535-9.385-20.92-20.92-20.92h-78.299V58.886C421.413,26.968,395.446,1,363.528,1H225.478 c-31.918,0-57.886,25.968-57.886,57.886v22.609H89.292z M379.573,80.528H209.431V58.886c0-8.848,7.198-16.046,16.046-16.046 h138.051c8.848,0,16.045,7.198,16.045,16.046V80.528z M210.431,79.528h168.142V58.886c0-8.296-6.749-15.046-15.045-15.046H225.478 c-8.297,0-15.046,6.75-15.046,15.046V79.528z" />
        </g>
        <g>
          <path d="M218.867,272.233c-0.78-11.805-10.99-20.739-22.785-19.961c-11.805,0.78-20.742,10.982-19.961,22.786l12.438,188.198 c0.748,11.323,10.166,20.008,21.352,20.008c0.475,0,0.953-0.016,1.434-0.047c11.804-0.78,20.741-10.981,19.961-22.786 L218.867,272.233z" />
          <path d="M209.91,483.765c-11.494,0-21.092-8.993-21.851-20.475l-12.438-188.198c-0.386-5.843,1.526-11.485,5.384-15.89 s9.201-7.042,15.043-7.429c12.139-0.79,22.526,8.462,23.317,20.427l12.438,188.198c0.797,12.061-8.366,22.521-20.427,23.318 C210.885,483.749,210.396,483.765,209.91,483.765z M197.511,252.725c-0.463,0-0.928,0.016-1.396,0.046 c-5.576,0.369-10.674,2.886-14.357,7.089c-3.682,4.204-5.507,9.589-5.138,15.165l12.438,188.198 c0.754,11.422,10.691,20.246,22.254,19.495c11.51-0.761,20.255-10.744,19.495-22.254l-12.438-188.198 C217.645,261.309,208.483,252.725,197.511,252.725z" />
        </g>
        <g>
          <path d="M294.502,252.226c-11.83,0-21.42,9.59-21.42,21.42v188.198c0,11.83,9.59,21.42,21.42,21.42 c11.831,0,21.42-9.59,21.42-21.42V273.646C315.923,261.816,306.333,252.226,294.502,252.226z" />
          <path d="M294.502,483.764c-12.087,0-21.92-9.833-21.92-21.92V273.646c0-12.087,9.833-21.92,21.92-21.92 c12.087,0,21.92,9.833,21.92,21.92v188.198C316.423,473.931,306.59,483.764,294.502,483.764z M294.502,252.726 c-11.535,0-20.92,9.385-20.92,20.92v188.198c0,11.535,9.385,20.92,20.92,20.92c11.536,0,20.92-9.385,20.92-20.92V273.646 C315.423,262.11,306.038,252.726,294.502,252.726z" />
        </g>
        <g>
          <path d="M392.923,252.272c-11.797-0.778-22.006,8.156-22.785,19.961L357.7,460.432c-0.779,11.805,8.156,22.006,19.961,22.786 c0.482,0.031,0.959,0.047,1.434,0.047c11.186,0,20.604-8.686,21.354-20.008l12.436-188.198 C413.665,263.254,404.728,253.052,392.923,252.272z" />
          <path d="M379.095,483.765c-0.485,0-0.973-0.016-1.466-0.048c-12.061-0.797-21.224-11.258-20.428-23.318l12.438-188.198 c0.79-11.965,11.187-21.222,23.317-20.427c5.843,0.386,11.185,3.024,15.043,7.428s5.771,10.047,5.384,15.89L400.947,463.29 C400.187,474.771,390.588,483.765,379.095,483.765z M391.493,252.725c-10.972,0-20.133,8.583-20.856,19.541l-12.438,188.199 c-0.76,11.51,7.985,21.493,19.495,22.254c11.605,0.75,21.499-8.074,22.255-19.495l12.436-188.198 c0.369-5.576-1.455-10.961-5.138-15.165c-3.683-4.204-8.781-6.721-14.357-7.089C392.422,252.741,391.956,252.725,391.493,252.725z " />
        </g>
      </g>
    </svg>
  );
};

export const CustomFordiMenuIcon: React.FC<{
  className?: string;
  size?: number | string;
  strokeWidth?: number;
}> = ({ className, size = 20, strokeWidth = 1.5 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="3.5 3.5 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.51528 10.307L5.89028 15.307C6.01993 17.3655 7.71485 18.9758 9.77728 19H15.2293C17.2921 18.9763 18.9876 17.3659 19.1173 15.307L19.4923 10.307C19.5889 9.21028 19.2245 8.12286 18.4867 7.30572C17.7488 6.48858 16.7041 6.01549 15.6033 6H9.40328C8.3026 6.01577 7.25816 6.48898 6.52054 7.30608C5.78293 8.12319 5.41871 9.21045 5.51528 10.307Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5033 10C15.5033 11.0718 14.9315 12.0622 14.0033 12.5981C13.0751 13.134 11.9315 13.134 11.0033 12.5981C10.0751 12.0622 9.5033 11.0718 9.5033 10"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CustomAiAssistantMenuIcon: React.FC<{
  className?: string;
  size?: number | string;
}> = ({ className, size = 20 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 1 24 22"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        <polygon
          fillRule="evenodd"
          points="16.64 15.13 17.38 13.88 20.91 13.88 22 12 19.82 8.25 16.75 8.25 15.69 6.39 14.5 6.39 14.5 5.13 16.44 5.13 17.5 7 19.09 7 16.9 3.25 12.63 3.25 12.63 8.25 14.36 8.25 15.09 9.5 12.63 9.5 12.63 12 14.89 12 15.94 10.13 18.75 10.13 19.47 11.38 16.67 11.38 15.62 13.25 12.63 13.25 12.63 17.63 16.03 17.63 15.31 18.88 12.63 18.88 12.63 20.75 16.9 20.75 20.18 15.13 18.09 15.13 17.36 16.38 14.5 16.38 14.5 15.13 16.64 15.13"
        />
        <polygon
          fillRule="evenodd"
          points="7.36 15.13 6.62 13.88 3.09 13.88 2 12 4.18 8.25 7.25 8.25 8.31 6.39 9.5 6.39 9.5 5.13 7.56 5.13 6.5 7 4.91 7 7.1 3.25 11.38 3.25 11.38 8.25 9.64 8.25 8.91 9.5 11.38 9.5 11.38 12 9.11 12 8.06 10.13 5.25 10.13 4.53 11.38 7.33 11.38 8.38 13.25 11.38 13.25 11.38 17.63 7.97 17.63 8.69 18.88 11.38 18.88 11.38 20.75 7.1 20.75 3.82 15.13 5.91 15.13 6.64 16.38 9.5 16.38 9.5 15.13 7.36 15.13"
        />
      </g>
    </svg>
  );
};

export const CustomCarRentMenuIcon: React.FC<{
  className?: string;
  size?: number | string;
}> = ({ className, size = 20 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-30 110 572 310"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        <path d="M466.963,233.298c-0.194-0.647-0.26-1.295-0.455-1.942c-5.633-22.539-19.234-43.007-38.406-59.652 c-19.82-17.294-45.727-30.507-75.197-37.761c-16.774-4.209-34.715-6.476-53.369-6.476c-18.652,0-36.594,2.268-53.369,6.476 c-38.018,9.392-70.08,28.628-90.871,53.757c-10.881,13.084-18.652,27.786-22.668,43.396h-3.238 c-4.34,0-151.428,11.464-126.559,119.822h68.59c-0.064-1.167-0.129-2.332-0.129-3.497c0-3.433,0.324-6.866,0.842-9.845 c4.793-27.073,28.238-46.763,55.766-46.763s50.973,19.69,55.701,46.568c0.584,3.173,0.906,6.606,0.906,10.04 c0,1.049-0.059,2.098-0.115,3.149c-0.012,0.032-0.004,0.078-0.014,0.11h0.008c-0.004,0.08-0.004,0.159-0.008,0.238h144.045 c-0.064-1.167-0.129-2.332-0.129-3.497c0-3.433,0.324-6.866,0.842-9.845c4.793-27.073,28.24-46.763,55.766-46.763 c27.527,0,50.972,19.69,55.701,46.503c0.584,3.238,0.906,6.672,0.906,10.105c0,1.045-0.058,2.09-0.115,3.137 c-0.01,0.035-0.002,0.087-0.014,0.122h0.01c-0.006,0.08-0.006,0.159-0.01,0.238h56.719c7.629,0,13.816-6.203,13.844-13.831 C512.213,263.339,513.328,250.078,466.963,233.298z M159.73,231.02c3.305-9.364,8.41-18.277,15.449-26.739 c17.553-21.179,44.949-37.242,77.203-45.208c15.156-3.758,30.961-5.699,47.152-5.699c13.303,0,26.304,1.353,38.883,3.949 c0.89,0.199,1.797,0.346,2.684,0.56l-29.778,73.213H196.498L159.73,231.02z M339.34,231.009l26.844-65.911 c17.162,6.41,32.449,15.22,44.883,26.1c13.154,11.399,22.516,24.574,27.691,38.49c0.168,0.471,0.367,0.936,0.524,1.408h-73.037 L339.34,231.009z" />
        <path d="M127.898,310.244c-18.328,0-33.551,13.278-36.594,30.7c-0.389,2.073-0.584,4.274-0.584,6.477 c0,1.165,0.064,2.33,0.195,3.497c1.748,18.847,17.617,33.615,36.982,33.615s35.234-14.768,36.984-33.615 c0.129-1.167,0.193-2.332,0.193-3.497c0-2.203-0.193-4.404-0.582-6.477C161.449,323.521,146.228,310.244,127.898,310.244z" />
        <path d="M384.9,310.244c-18.33,0-33.551,13.278-36.594,30.7c-0.388,2.073-0.584,4.274-0.584,6.477 c0,1.165,0.066,2.33,0.196,3.497c1.748,18.847,17.617,33.615,36.982,33.615c19.365,0,35.234-14.768,36.984-33.615 c0.129-1.167,0.193-2.332,0.193-3.497c0-2.203-0.193-4.404-0.582-6.477C418.451,323.521,403.23,310.244,384.9,310.244z" />
      </g>
    </svg>
  );
};

export const CustomTabMenuIcon: React.FC<{
  className?: string;
  size?: number | string;
}> = ({ className, size = 22 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M 28.0117 27.3672 C 33.0508 27.3672 37.3867 22.8672 37.3867 17.0078 C 37.3867 11.2187 33.0274 6.9297 28.0117 6.9297 C 22.9961 6.9297 18.6367 11.3125 18.6367 17.0547 C 18.6367 22.8672 22.9961 27.3672 28.0117 27.3672 Z M 13.2930 49.0703 L 42.7305 49.0703 C 46.4101 49.0703 47.7226 48.0156 47.7226 45.9531 C 47.7226 39.9062 40.1523 31.5625 28.0117 31.5625 C 15.8477 31.5625 8.2774 39.9062 8.2774 45.9531 C 8.2774 48.0156 9.5898 49.0703 13.2930 49.0703 Z" />
    </svg>
  );
};

export const CustomPdfDownloadIcon: React.FC<{
  className?: string;
  size?: number | string;
}> = ({ className, size = 22 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V12.1893L14.4697 10.4697C14.7626 10.1768 15.2374 10.1768 15.5303 10.4697C15.8232 10.7626 15.8232 11.2374 15.5303 11.5303L12.5303 14.5303C12.3897 14.671 12.1989 14.75 12 14.75C11.8011 14.75 11.6103 14.671 11.4697 14.5303L8.46967 11.5303C8.17678 11.2374 8.17678 10.7626 8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697L11.25 12.1893V7C11.25 6.58579 11.5858 6.25 12 6.25Z"
        fill="currentColor"
      />
      <path
        d="M7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H16C16.4142 16.25 16.75 16.5858 16.75 17C16.75 17.4142 16.4142 17.75 16 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9426 1.25C9.63423 1.24999 7.82519 1.24998 6.4137 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63423 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.4137 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25H11.9426ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62178 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62178 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z"
        fill="currentColor"
      />
    </svg>
  );
};



