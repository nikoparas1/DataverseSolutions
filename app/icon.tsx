import { ImageResponse } from "next/og";
import { PRIMARY_COLOR } from "@/lib/theme-colors";

const iconColor = PRIMARY_COLOR;
const iconSize = 32;

export const runtime = "edge";

export const size = {
  width: iconSize,
  height: iconSize,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        {/* Dataverse Icon */}
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 16.6667L166.667 58.3334V141.667L100 183.333L33.3333 141.667V58.3334L100 16.6667Z"
            stroke={iconColor}
            strokeWidth="1.66667"
          />
          <path d="M100 16.6667V183.333" stroke={iconColor} strokeWidth="1.66667" />
          <path
            d="M33.3333 58.3333L100 100L166.667 58.3333"
            stroke={iconColor}
            strokeWidth="1.66667"
          />
          <path
            d="M33.3333 141.667L100 100L166.667 141.667"
            stroke={iconColor}
            strokeWidth="1.66667"
          />
          <path
            d="M100 25C104.602 25 108.333 21.269 108.333 16.6666C108.333 12.0643 104.602 8.33331 100 8.33331C95.3976 8.33331 91.6667 12.0643 91.6667 16.6666C91.6667 21.269 95.3976 25 100 25Z"
            fill={iconColor}
          />
          <path
            d="M166.667 66.6667C171.269 66.6667 175 62.9357 175 58.3333C175 53.731 171.269 50 166.667 50C162.064 50 158.333 53.731 158.333 58.3333C158.333 62.9357 162.064 66.6667 166.667 66.6667Z"
            fill={iconColor}
          />
          <path
            d="M166.667 150C171.269 150 175 146.269 175 141.667C175 137.064 171.269 133.333 166.667 133.333C162.064 133.333 158.333 137.064 158.333 141.667C158.333 146.269 162.064 150 166.667 150Z"
            fill={iconColor}
          />
          <path
            d="M100 191.667C104.602 191.667 108.333 187.936 108.333 183.333C108.333 178.731 104.602 175 100 175C95.3976 175 91.6667 178.731 91.6667 183.333C91.6667 187.936 95.3976 191.667 100 191.667Z"
            fill={iconColor}
          />
          <path
            d="M33.3333 150C37.9357 150 41.6667 146.269 41.6667 141.667C41.6667 137.064 37.9357 133.333 33.3333 133.333C28.731 133.333 25 137.064 25 141.667C25 146.269 28.731 150 33.3333 150Z"
            fill={iconColor}
          />
          <path
            d="M33.3333 66.6667C37.9357 66.6667 41.6667 62.9357 41.6667 58.3333C41.6667 53.731 37.9357 50 33.3333 50C28.731 50 25 53.731 25 58.3333C25 62.9357 28.731 66.6667 33.3333 66.6667Z"
            fill={iconColor}
          />
          <path
            d="M100 112.5C106.904 112.5 112.5 106.904 112.5 100C112.5 93.0964 106.904 87.5 100 87.5C93.0964 87.5 87.5 93.0964 87.5 100C87.5 106.904 93.0964 112.5 100 112.5Z"
            fill={iconColor}
          />
        </svg>
      </div>
    ),
    size
  );
}
