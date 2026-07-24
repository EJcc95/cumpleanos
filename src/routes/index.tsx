import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import bg from "@/assets/bg-0.webp";
import bg1 from "@/assets/bg-1.webp";
import bg2 from "@/assets/bg-2.webp";
import bg3 from "@/assets/bg-3.webp";
import bg4 from "@/assets/bg-4.webp";
import bg5 from "@/assets/bg-5.webp";
import bg6 from "@/assets/bg-6.webp";
import bg7 from "@/assets/bg-7.webp";
import bg8 from "@/assets/bg-8.webp";
import bg9 from "@/assets/bg-9.webp";
import bg10 from "@/assets/bg-10.webp";
import floralAccent from "@/assets/floral.png";
import celebration from "@/assets/celebration.webp";

export const Route = createFileRoute("/")({
  component: Invitation,
});

const EVENT_DATE = new Date("2026-08-29T20:00:00");

const CalendarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-8 h-8 text-coral-deep"
  >
    <path
      d="M8 2v3M16 2v3M3.5 9.02h17M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="7.5" y="12" width="2" height="2" rx="0.5" fill="currentColor" />
    <rect x="11" y="12" width="2" height="2" rx="0.5" fill="currentColor" />
    <rect x="14.5" y="12" width="2" height="2" rx="0.5" fill="currentColor" />
    <rect x="7.5" y="16" width="2" height="2" rx="0.5" fill="currentColor" />
    <rect x="11" y="16" width="2" height="2" rx="0.5" fill="currentColor" />
    <rect x="14.5" y="16" width="2" height="2" rx="0.5" fill="currentColor" />
  </svg>
);

const LocationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-8 h-8 text-coral-deep"
  >
    <path
      d="M20 10.41C20 15.82 12 22 12 22S4 15.82 4 10.41C4 6.04 7.58 2.5 12 2.5s8 3.54 8 7.91Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="10"
      r="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DressSuitIcon = () => (
  <svg
    id="Capa_2"
    data-name="Capa 2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 873.02 1022.11"
    className="w-9 h-9 text-coral-deep"
    fill="currentColor"
  >
    <g id="Capa_1-2" data-name="Capa 1">
      <g>
        <g>
          <g>
            <path d="M706.87,125.53l7.02-64.48c3-7.88,13.53-4.03,12.01,3.93l-7.07,63.88c46.54,24.51,18.36,75.12,6.02,111.15-9.52,27.79-19.73,58.99-11.31,88.34,2.31,8.05,12.96,23.75,17.18,32.82,27.89,59.9,28.6,103.02,27.18,167.9-3.35,152.93,60.82,301.37,114.47,441.44,3.78,13.23-10.01,19.69-20.52,22.51-28.72,7.7-56.74-.6-85.96,12.04-18.91,8.18-26.93,15.08-49.49,16.51-38.63,2.46-69.42-12.67-107.75-6.75-31.61,4.88-56.27,12.43-88.8,2.22-9.83-3.09-17.76-9.23-27.03-12.97-24.83-10.02-46.55-5.24-71.45-8.55-10.91-1.45-34.11-6.82-33.27-21.24,41.74-111.29,89.03-224.44,108.44-342.56,6.33-38.55,7.56-72.71,7.36-111.73-.27-54.28-2.13-87.73,18.21-139.7,16.46-42.07,35.98-52.37,25.26-102.76-2.74-12.87-7.03-25.33-11.24-37.76-12.13-35.8-39.77-86.18,5.76-110.9l-7.06-64.86c.95-8.36,9.84-10.17,12.82-1.76l6.64,62.36c1.28,1.86,10.14.62,13.05.95,24.99,2.82,46.16,20.84,63.15,37.91,12.77-11.82,24.97-24.15,41.4-31.4,3.61-1.59,16.31-6.53,19.47-6.53h15.5ZM635.58,177.23c-2.01,1.61-6.38,1.84-8.7.78-3.09-1.42-14.93-15.45-19-18.99-18.62-16.23-58.87-36.22-74.84-5.81-13.26,25.24,12.18,71.53,20.09,97.56,4.43,14.57,7.22,29.49,10.7,44.3,44.02,9.13,90.14,8.82,134.15-.11,2.23-15.67,5.9-31.1,10.62-46.18,8.33-26.65,38.52-80.61,13.29-103.75-25.04-22.96-70.67,10.91-86.31,32.22ZM700.85,326.49l-2.13-17.31c-.36-1.18-1.04-1.58-2.25-1.6-4.72-.09-15.55,3.12-21.22,3.82-26.55,3.29-54.21,3.87-80.86,1.12-10.55-1.09-21.08-3.19-31.51-5l-1.41,19.12c45.07,13.56,94.32,13.07,139.38-.15ZM760.89,993.53c26.34-12.75,55.88-5.94,83.19-11.3,3.22-.63,17.02-4.12,16.63-8.01-39.79-98.51-78.95-199.39-101.35-303.68-7.02-32.7-13.04-67.02-14.48-100.52-1.76-40.98,4.5-83.29-1.15-123.85-5.24-37.63-19.89-75.3-39.53-107.54-48.11,13.26-99.66,13.94-147.69-.18-16.1,28.65-29.79,59.42-36.34,91.88-10.15,50.26-1.02,97.5-4.31,147.69-2.34,35.86-9.61,73.36-17.67,108.33-22.87,99.18-60.62,193.91-97.16,288.47,1.18,5.07,18.77,7.98,23.47,8.58,24.9,3.22,51.34-1.82,74.91,9.98l1.29-1.53c33.83-122.6,60.18-248.16,66.22-375.79.57-12.14-1.16-26.11.98-38.02,1.13-6.28,10.78-6.23,11.92,1.04,2.17,13.83-2.58,30.76-.9,44.98-4.68,82.4-17.06,164-34.53,244.47-9.58,44.12-21.6,87.56-32.58,131.32,16.44,9.31,38.9,10.91,57.56,9.65,22.43-1.52,42.48-9.92,66.06-9.04,18.97.71,38.11,7.76,56.96,9.04s40.82-.35,57.03-9.94c-18.96-69.2-36.11-139.01-48.23-209.86-11.55-67.53-18.36-135.22-20.35-203.64-.1-3.52-.12-10.99,3.96-12.12,4.45-1.24,8.27.37,9.02,5.14,2.24,14.26-.85,34.95,1.02,49.98,7.6,123.73,32.71,245.57,66.06,364.46Z" />
          </g>
          <g>
            <g>
              <path d="M338.87,512.03c-1.61,7.63-16.7,4.9-19.1,7.9l-6.86,142.14c-4.59,95.15-9.18,190.62-14.08,285.92-.7,13.63.92,36.16-2.42,48.58-1.98,7.34-8.52,13.12-15.72,15.28-9.21,2.76-38.42,2.76-47.63,0-20.4-6.11-16.24-26.54-17.14-42.86-5.99-108.52-9.8-217.16-14.04-325.97-.05-1.21.75-3.72-.99-3.48l-5.02,110.48c-3.14,69.32-6.47,138.86-9.98,208.02-.55,10.86.99,32.64-3.28,41.72-4.9,10.42-14.51,13.07-25.19,13.81-18.69,1.3-49.91,3.6-53.55-20.53l-21.13-472.87-1.51-1.49c-5.23-.54-14.45-.51-17.22-5.78-2.45-4.66,1.23-14.55-.15-20.37-1.5.74-2.73,1.02-4.43,1.06-14.86.37-37.99,1.6-52.08-.04-4.69-.54-6.09-1.97-6.54-6.46-2.19-22.26.7-49.5,1.1-72.02,1.76-100.28,5.25-203.36,18.08-302.92,2.64-20.46.94-35.6,21.52-45.48,24.61-11.82,78.79-26.46,96.39-43.61,5.4-5.26,12.26-21.31,18.94-23.06l89.77.28c5.75,2.32,12.97,18.29,17.59,22.91,17.45,17.45,73.69,31.77,98.35,44.15,10.21,5.13,14.81,11.74,17.04,22.96,4.95,24.85,6.93,57.95,9.27,83.73,9.42,104.06,11.55,208.44,12.95,312.94-.42,2.65-2.68,6.01-5.47,6.53-17.67-.14-35.36.26-53.04.09-1.65-.02-3.72-1.05-3.95-1.03-2.4.15-.48,2.34-.48,2.47,0,4.48.79,13.26,0,17ZM236.87,11.53l-71.99,1.49c9.57,15.1,22.99,26.99,35.64,39.4,2.37.41,17.37-15.15,19.87-17.88,2.2-2.41,18.54-21.03,16.48-23.01ZM162.88,84.52l27.99-24.46c-13.59-11.38-25.69-24.8-35.49-39.53-2.04,2.47-6.47,7.29-6.46,10.34.03,5.64,2.95,22.84,4.42,28.68,2.1,8.33,7.64,16.44,9.54,24.97ZM239.86,83.52c1.93-7.85,6.51-15.2,8.52-22.99,1.72-6.66,4.34-21.9,4.52-28.56.14-4.99-2.78-7.61-5.53-11.43-9.97,14.84-23.04,26.89-35.43,39.62-.29,1.69,19.45,18.08,22.45,20.34,1,.75,4.56,3.7,5.46,3.02ZM137.87,38.53l-11.43,7.06-17.43,43.78c4.9,3.22,22.6,10.8,22.88,16.75.31,6.7-19.65,17.31-18.87,22.67,20.64,41.31,41.95,82.49,66.45,121.66,4.24,6.77,8.56,13.73,13.41,20.08-24.78-75.54-44.36-153-55-231.99ZM210.86,270.52c14.97-25.81,30.83-51.13,45.18-77.32,11.42-20.84,22.05-42.16,32.67-63.43,1.41-8.35-25.45-18.26-15.33-28.24,4.51-4.45,13.36-7.72,18.45-11.58.88-.66,1.96-1.18,1.62-2.5l-17.73-41.29c-1.15-1.65-8.67-7.11-10.38-7.63-1.94-.6-1.29.41-1.46,1.49-2.46,15.93-4.39,31.81-7.34,47.68-11.32,60.94-26.53,121.07-46.24,179.76l.55,3.04ZM76,505.39c1.13,1.75,34.62,4.97,39.32,5.18,10.04.45,34.62,1.27,43.1-2,16.16-6.23,23.19-44.27,26.14-59.86,2-10.6,4.48-24.11,5.28-34.71,1.18-15.51-3.76-33.98-4.96-49.99-1.88-25.24-2.05-49.54,5.81-73.79-34.84-51.25-64.63-105.79-91.43-161.66-3.02-6.99,14.7-16.72,15.57-20.61.68-3.03-20.78-10.77-20.06-16.93l15.09-38.51-64.99,26.01c24.5,79.87,46.49,163.06,44.05,247.53-.06,2.13-.96,4.05-1.03,5.97-.38,9.83-.78,19.67-1.02,29.49l42.45,2.05c3.42.4,6.04,3.27,6.34,6.67.37,4.27-1.81,25.17-3,29.55-3.07,11.2-17.65,6.8-25.24,6.68-8.17-.13-16.38.18-24.54.04l-6.87,98.87ZM315.87,361.53c-2.66-37.63-3.71-76.87,1.12-114.37,3.31-25.64,9.67-54.17,15.55-79.45,6.87-29.56,14.86-59.17,25.07-87.69l-65.75-27.48,15.9,38.51c-.07,4.84-15.21,12.57-19.61,15.27-.56.34-1.99-.01-1.28,1.7,2.41,5.84,19.02,12.85,15.76,21.79-24.21,49.63-50.65,98.12-80.36,144.64-5.29,8.29-21.03,28.01-23.65,35.35-3.8,10.64-2.54,37.27-1.75,49.23,2.03,30.95,16.3,123.9,38.5,144.5,4.52,4.2,11.9,6.57,17.96,7.04,23.87,1.88,50-1.32,73.54-5.04l-7.15-98.35-1.31-1.39-37.09,1.78c-5.2.26-10.85-4-12.03-8.96s-2.18-17-2.41-22.58c-.24-5.88-.85-10.06,5.7-12.28l43.29-2.21ZM206.76,95.41l4.97-17.16-10.34-9.47c-3.59,2.54-10.72,6.74-10.46,11.1.1,1.73,4.42,15.05,5.11,15.48l10.72.05ZM180.86,86.53c-1.38-1.23-16.21,14.05-20.06,13.57l15.08,71.43,1.99-1.5c.19-20.69,7.54-43.86,8.04-64.06.16-6.58-4.44-12.87-5.04-19.45ZM240.72,99.66c-6.5-1.65-11.07-8.47-16.33-12.15-.85-.6-1-1.38-2.5-.98l-5.46,16.85,8.46,69.14,15.84-72.86ZM55.87,481.53c3-62.54,6.46-125.07,12-187.5,1.2-13.47,5.21-31.08,5.08-44-.1-9.75-4.63-27.15-6.56-37.53-6.84-36.77-16.36-82.84-29.4-117.6-.48-1.27-.22-3.07-2.11-3.38-2.6,27.85-6.49,55.64-9,83.51-7.93,87.89-11.6,178.81-13.05,266.95-.22,13.17.25,26.38.04,39.54h43ZM346.87,481.53h41.5c3.47-3.49.59-9.18.46-13.46-3.85-124.68-4.08-249.15-20.93-373.07-.2-1.5-.14-3.08-2.01-3.47-10.22,35.98-20.37,72.04-27.72,108.79-3.22,16.08-9.05,39.9-8.28,55.7.67,13.78,3.78,29.02,4.99,43.01,4.07,47.16,7.39,94.84,9.99,142.01.29,5.27.46,39.18,2.01,40.49ZM204.76,108.64l-7.9-.11c-.12,2.14.25,4.36,0,6.5-3.22,26.49-10.49,60.18-11.04,85.98-.2,9.52,9.97,40.14,13.77,50.32.45,1.21.58,2.42,1.79,3.21l15.41-49.59-12.02-96.3ZM122.87,375.53l-41.36-1.86c-1.28.33-1.44,1.21-1.64,2.35-.33,1.9-1.62,16.89-1,17.51l42,.99,2.01-18.99ZM321.86,373.54l-41.99,1.98,1,19.01,43.01-1.01-2.02-19.99ZM306.88,521.52c-15.3-.2-31.23,2.66-46.5,2-26.66-1.17-36.94-9.65-47.68-33.32-6.28-13.84-10.97-29.74-13.84-44.67-1.51.19-1.61,1.41-1.89,2.59-2.38,9.71-3.58,19.79-6.38,29.62-8.79,30.91-15.64,44.13-50.23,45.77-15.04.71-30.44-2.19-45.49-1.98l18.04,389.45c.94,20.29.71,40.77,1.97,61.03.34,5.54.42,14.76,1.43,19.57.69,3.29,2.7,6.76,5.98,8.02,5.47.61,12.69,1.88,18.03,1.97,6.02.1,17.23-.24,22.98-1.1,5.41-.82,8.57-5.4,9.48-10.52,6.7-156.95,12.18-313.14,22.16-469.84,1.75-8.25,11.24-6.94,12.69,1.16s.7,20.99,1.25,29.75c9.2,146.66,12.5,293.93,20.23,440.77.63,3.52,2.94,6.34,6.19,7.81,14.1,2,28.31,2.35,42.41.26,3.04-.8,5.93-4.37,6.69-7.31.95-3.63,1.21-12.97,1.51-17.49,1.82-27.24,1.64-54.79,2.92-82.08,5.02-107.25,10.9-214.88,16.03-321.97.79-16.49.87-33.03,2.02-49.5Z" />
              <path
                fill="#fff"
                d="M206.76,95.41l-10.72-.05c-.69-.43-5.01-13.74-5.11-15.48-.26-4.35,6.87-8.55,10.46-11.1l10.34,9.47-4.97,17.16Z"
              />
              <circle cx="214.3" cy="337.08" r="12.44" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

const TiaraIcon = ({
  className = "w-9 h-9 sm:w-11 sm:h-11 text-[#c89d5c]",
  useShimmer = false,
}: {
  className?: string;
  useShimmer?: boolean;
}) => {
  const gradientId = useShimmer ? "tiara-shimmer-gradient" : undefined;
  return (
    <svg
      className={`${useShimmer ? "" : "fill-current"} ${className}`}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      {useShimmer && (
        <defs>
          <linearGradient
            id="tiara-shimmer-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#c6533f">
              <animate
                attributeName="stop-color"
                values="#c6533f;#d4af37;#e8c67a;#c6533f"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="35%" stopColor="#d4af37">
              <animate
                attributeName="stop-color"
                values="#d4af37;#e8c67a;#c6533f;#d4af37"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="65%" stopColor="#e8c67a">
              <animate
                attributeName="stop-color"
                values="#e8c67a;#c6533f;#d4af37;#e8c67a"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#c89d5c">
              <animate
                attributeName="stop-color"
                values="#c89d5c;#e8c67a;#d4af37;#c89d5c"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
      )}
      <path
        fill={gradientId ? `url(#${gradientId})` : "currentColor"}
        d="M256 27.88l-8.1 16.09c-8.2 16.54-20.2 44.64-30.4 73.03-10.1 28.3-18.5 56-18.5 75 0 22 6.1 43.4 14.4 61.2-1.5.1-2.9.2-4.3.3-15-6.8-29.5-15-41.5-24.5-18.7-15-30.6-32.5-30.6-53 0-14.5 3.7-21.8 7-25 3.3-3.2 6.9-3.7 11.5-2.3 4.6 1.3 9.5 5 12 9.3 2.5 4.3 3.1 8.7.4 14l16.2 8c5.3-10.7 3.9-22.3-1.1-31s-13.1-15-22.5-17.7c-2.4-.6-4.8-1-7.4-1.1-7.5-.4-15.4 1.9-21.6 7.8-8.2 7.8-12.5 20.5-12.5 38 0 27.5 16.1 50 37.4 67 6 4.8 12.4 9.2 19.1 13.2-14.3 1.6-28 3.6-40.8 5.9-9.9-1.3-21-3.9-30.4-7.6-7.17-2.8-13.37-6.4-17.17-10-3.9-3.6-5.4-6.6-5.5-9.9v-.1c-.2-9.9 7.2-15.3 13.4-16 3.1-.4 5.37.4 7.17 2.2 1.7 1.8 3.6 5.4 3.2 12.9l18 1c.6-11.1-2.4-20.4-8.3-26.5-4.5-4.6-10.3-7-16.17-7.5-2-.2-3.9-.2-5.9 0-15.2 1.6-29.7 15.1-29.4 34.3.2 9.1 5 17 11.2 22.8 6.1 5.7 13.6 9.7 21.8 13.1l-1.2.3c-15.8 4.5-29.4 9.6-40.5 15.5-3.1.2-6 .4-8.3.1-2.8-.3-4.6-1-5.9-2-1.3-.9-2.4-2.3-3.5-5.7-.6-2 1.7-6.1 4.8-7.6 1.6-.8 2.7-.8 3.3-.5.7.2 1.8.7 3.2 4.3l16.8-6.4c-2.7-7.1-7.6-12.6-13.7-14.8-3.1-1.2-6.2-1.5-9.2-1.2-2.9.3-5.8 1.2-8.3 2.4-10.1 5-17.9 16.4-14.1 29 1.9 6.4 5.4 11.6 10 15 1.8 1.4 3.7 2.4 5.7 3.2-7.2 10.4-11.7 24.5-11.7 33.6 0 12.6 8.7 23.1 21.1 31.5 12.5 8.5 29.5 15.5 50.3 21.4 26.77 7.7 59.77 13.4 96.57 16.5 16-5.4 16-5.4 0-16.1-35.4-3.1-67.1-8.6-92.17-15.7-19.7-5.7-35.5-12.4-45.7-19.3-10.2-6.9-14.1-13.2-14.1-18.3 0-5.1 3.9-11.4 14.1-18.3s26-13.6 45.7-19.3c33.57-9.5 78.77-16.2 129.27-18 0 .1.1.1.1.1v-.1h1.1c1.6 2.1 3.4 4 5.1 5.7 6 6.1 12.1 10.9 20.6 10.9 8.5 0 14.6-4.8 20.6-10.9 1.7-1.7 3.5-3.6 5.1-5.7h1.1v.1s.1 0 .1-.1c50.5 1.8 95.7 8.5 129.3 18 19.7 5.7 35.5 12.4 45.7 19.3 10.2 6.9 14.1 13.2 14.1 18.3 0 5.1-3.9 11.4-14.1 18.3s-26 13.6-45.7 19.3c-25.1 7.1-56.8 12.6-92.2 15.7-16 10.7-16 10.7 0 16.1 36.8-3.1 69.8-8.8 96.6-16.5 20.8-5.9 37.8-12.9 50.3-21.4 12.4-8.4 21.1-18.9 21.1-31.5 0-9.1-4.5-23.3-11.7-33.6 1.9-.8 3.8-1.9 5.6-3.2 4.6-3.4 8.1-8.6 10-15 3.8-12.6-4-24-14.1-29-2.5-1.2-5.3-2.1-8.3-2.4-3-.3-6.1 0-9.2 1.2-6.1 2.2-11 7.7-13.7 14.8l16.8 6.4c1.4-3.6 2.5-4.1 3.2-4.3.6-.3 1.7-.3 3.3.5 3.1 1.5 5.4 5.6 4.8 7.6-1.1 3.4-2.2 4.8-3.5 5.7-1.3 1-3.1 1.7-5.9 2-2.3.2-5.1.1-8.2-.1-11.1-5.9-24.7-11-40.5-15.5l-1.2-.3c8.2-3.4 15.7-7.4 21.7-13.1 6.3-5.8 11.1-13.7 11.2-22.9.3-19.1-14.1-32.6-29.4-34.2-1.9-.2-3.9-.2-5.8 0-5.9.5-11.7 2.9-16.2 7.5-5.9 6.1-8.9 15.4-8.3 26.5l18-1c-.4-7.5 1.5-11.1 3.2-12.9 1.8-1.8 4.1-2.6 7.2-2.2 6.1.7 13.5 6.1 13.3 16v.1c-.1 3.3-1.6 6.3-5.4 9.9-3.9 3.6-10.1 7.2-17.2 10-9.4 3.7-20.5 6.3-30.4 7.6-12.8-2.3-26.5-4.3-40.8-5.9 6.7-4 13.1-8.4 19.1-13.2 21.3-17 37.4-39.5 37.4-67 0-17.5-4.3-30.2-12.5-38-6.2-5.9-14.1-8.2-21.6-7.8-2.6.1-5 .5-7.4 1.1-9.4 2.7-17.5 9-22.5 17.7s-6.4 20.3-1.1 31l16.2-8c-2.7-5.3-2.1-9.7.4-14 2.5-4.3 7.4-8 12-9.3 4.6-1.4 8.2-.9 11.5 2.3 3.3 3.2 7 10.5 7 25 0 20.5-11.9 38-30.6 53-12 9.5-26.5 17.7-41.5 24.5-1.4-.1-2.8-.2-4.3-.3C306.9 235.4 313 214 313 192c0-19-8.4-46.7-18.5-75-10.2-28.39-22.2-56.49-30.4-73.03zm0 41.45c6.8 15.23 14.6 34.37 21.5 53.67 9.9 27.7 17.5 56 17.5 69 0 22-7.5 44.8-16.9 61.6-4.6 8.4-9.8 15.3-14.2 19.8-4 3.9-7.5 5.3-7.9 5.5 0 .1.1.1 0 .1s0 0 0-.1c-.4-.2-3.9-1.6-7.9-5.5-4.4-4.5-9.6-11.4-14.2-19.8C224.5 236.8 217 214 217 192c0-13 7.6-41.3 17.5-69 6.9-19.3 14.7-38.44 21.5-53.67z"
      />
    </svg>
  );
};

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-on-scroll");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function fireConfetti() {
  const colors = ["#e08a6b", "#c9704f", "#d4b483", "#8b6b4a", "#f5e6d3"];
  const end = Date.now() + 1500;
  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 70,
      origin: { x: 0, y: 0.7 },
      colors,
      scalar: 1.1,
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 70,
      origin: { x: 1, y: 0.7 },
      colors,
      scalar: 1.1,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
  confetti({
    particleCount: 120,
    spread: 100,
    origin: { y: 0.5 },
    colors,
    shapes: ["circle", "square"],
    scalar: 1.3,
  });
}

function Invitation() {
  const c = useCountdown(EVENT_DATE);
  useReveal();
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const floral1Ref = useRef<HTMLImageElement>(null);
  const floral2Ref = useRef<HTMLImageElement>(null);
  const celebrationRef = useRef<HTMLImageElement>(null);
  const rsvpFloral1Ref = useRef<HTMLImageElement>(null);
  const rsvpFloral2Ref = useRef<HTMLImageElement>(null);
  const [rsvpSent, setRsvpSent] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const storySlides = [bg, bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10];

  useEffect(() => {
    const t = setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.3 },
        colors: ["#e08a6b", "#d4b483", "#8b6b4a", "#f5e6d3"],
      });
    }, 700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(h > 0 ? y / h : 0);
        const k = window.innerWidth < 768 ? 0.4 : 1;
        if (heroRef.current)
          heroRef.current.style.transform = `translate3d(0, ${y * 0.4 * k}px, 0) scale(${1 + y * 0.0004})`;
        if (heroContentRef.current) {
          heroContentRef.current.style.transform = `translate3d(0, ${y * 0.25 * k}px, 0)`;
          heroContentRef.current.style.opacity = String(
            Math.max(0, 1 - y / 600),
          );
        }
        if (floral1Ref.current)
          floral1Ref.current.style.transform = `translate3d(${y * -0.15 * k}px, ${y * 0.35 * k}px, 0) rotate(${y * 0.05}deg)`;
        if (floral2Ref.current)
          floral2Ref.current.style.transform = `translate3d(${y * 0.18 * k}px, ${y * 0.3 * k}px, 0) rotate(${45 + y * -0.06}deg)`;

        const applyBg = (el: HTMLElement | null, speed: number) => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const offset =
            (rect.top + rect.height / 2 - window.innerHeight / 2) * speed * k;
          el.style.transform = `translate3d(0, ${offset}px, 0) scale(1.15)`;
        };
        applyBg(celebrationRef.current, -0.2);
        if (rsvpFloral1Ref.current)
          rsvpFloral1Ref.current.style.transform = `translate3d(${y * -0.08 * k}px, ${y * 0.12 * k}px, 0)`;
        if (rsvpFloral2Ref.current)
          rsvpFloral2Ref.current.style.transform = `translate3d(${y * 0.1 * k}px, ${y * -0.1 * k}px, 0) rotate(-45deg)`;
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % storySlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div
        className="fixed left-0 top-0 z-50 h-1 origin-left"
        style={{
          width: "100%",
          transform: `scaleX(${scrollProgress})`,
          background: "var(--gradient-coral)",
          transition: "transform 0.05s linear",
        }}
      />
      {/* ========== HERO ========== */}
      <section className="relative flex min-h-dvh items-center justify-center overflow-hidden py-6 sm:py-12 md:py-20">
        <div
          ref={heroRef}
          className="absolute inset-0 -z-10 will-change-transform"
          style={{
            background:
              "linear-gradient(180deg, #fcf7f2 0%, #f7eae1 50%, #f3dfd3 100%)",
          }}
        />
        <div className="grain absolute inset-0 -z-10" />

        {/* Ambient subtle sparkle background dots */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] bg-size-[32px_32px] opacity-15" />

        {/* Top-Left Floral Corner */}
        <img
          ref={floral1Ref}
          src={floralAccent}
          alt=""
          aria-hidden="true"
          width={420}
          height={420}
          className="pointer-events-none absolute -left-10 -top-10 w-40 opacity-90 sm:w-64 md:w-80 lg:w-96 animate-float will-change-transform drop-shadow-md"
        />

        {/* Bottom-Right Floral Corner */}
        <img
          ref={floral2Ref}
          src={floralAccent}
          alt=""
          aria-hidden="true"
          width={420}
          height={420}
          className="pointer-events-none absolute -bottom-10 -right-10 w-44 rotate-120 opacity-90 sm:w-72 md:w-96 lg:w-105 animate-float-slow will-change-transform drop-shadow-md"
        />

        {/* Central Card Container for Desktop & Seamless Mobile Hero */}
        <div
          ref={heroContentRef}
          className="relative z-10 mx-auto mt-4 sm:mt-10 md:mt-14 flex w-full max-w-full min-[380px]:max-w-md flex-col items-center px-2 min-[360px]:px-4 sm:px-6 text-center will-change-transform sm:max-w-lg md:max-w-xl lg:max-w-2xl overflow-visible"
        >
          {/* Crown Icon */}
          <div
            className="animate-fade-up mb-2 sm:mb-4 flex justify-center"
            style={{ animationDelay: "0.1s" }}
          >
            <div
              className="
      relative
      flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center
      rounded-full
      border border-[#ecd8b4]
      bg-linear-to-b
      from-[#fffdf8]
      to-[#f8efe3]
      shadow-lg
    "
            >
              {/* Destellos */}
              <span className="absolute -left-1 top-2 text-[9px] sm:text-[10px] text-[#e8c67a]">
                ✦
              </span>
              <span className="absolute -right-1 bottom-2 text-[7px] sm:text-[8px] text-[#e8c67a]">
                ✦
              </span>
              {/* Tiara */}
              <TiaraIcon className="w-7 h-7 sm:w-11 sm:h-11 text-[#c89d5c] drop-shadow-sm transition-transform duration-300 hover:scale-110" />
            </div>
          </div>

          {/* Invitation Intro Header */}
          <p
            className="animate-fade-up text-[10px] min-[360px]:text-[11px] font-medium uppercase tracking-[0.22em] min-[360px]:tracking-[0.38em] text-[#7a5a4a] sm:text-xs md:text-sm md:tracking-[0.42em]"
            style={{ animationDelay: "0.2s" }}
          >
            Estás cordialmente invitado a
          </p>

          {/* Top Flourish Ornament Line */}
          <div
            className="animate-fade-up my-2 sm:my-3 flex items-center justify-center gap-2 text-[#c89d5c]"
            style={{ animationDelay: "0.25s" }}
          >
            <div className="h-px w-8 min-[360px]:w-12 bg-linear-to-r from-transparent to-[#c89d5c] sm:w-20" />
            <span className="text-[9px] min-[360px]:text-[10px]">◆</span>
            <div className="h-px w-8 min-[360px]:w-12 bg-linear-to-l from-transparent to-[#c89d5c] sm:w-20" />
          </div>

          {/* Title: Mis Cincuenta */}
          <h1
            className="animate-fade-up text-[2.25rem] min-[360px]:text-[2.75rem] min-[390px]:text-[3.35rem] min-[430px]:text-6xl sm:text-7xl md:text-8xl leading-tight pt-1.5 min-[360px]:pt-3 sm:pt-6 max-w-full overflow-visible whitespace-nowrap flex items-baseline justify-center gap-1 sm:gap-2"
            style={{ animationDelay: "0.3s", fontFamily: "var(--font-script)" }}
          >
            <span className="text-shimmer py-1">Mis</span>
            <span className="inline-flex items-baseline py-1">
              <span className="text-shimmer">5</span>
              <span className="relative inline-block">
                {/* Tiara sitting close to the top of 0, gracefully tilted */}
                <span className="absolute -top-3.5 min-[360px]:-top-4 min-[390px]:-top-4.5 sm:-top-6 md:-top-7 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none z-10">
                  <span className="absolute -left-1 -top-0.5 text-[7px] min-[360px]:text-[8px] sm:text-[10px] text-[#e8c67a]">
                    ✦
                  </span>
                  <span className="absolute -right-1 -top-0.5 text-[6px] min-[360px]:text-[7px] sm:text-[9px] text-[#e8c67a]">
                    ✦
                  </span>
                  <TiaraIcon
                    useShimmer
                    className="w-5 h-5 min-[360px]:w-6.5 min-[360px]:h-6.5 min-[390px]:w-7.5 min-[390px]:h-7.5 sm:w-10 sm:h-10 md:w-12 md:h-12 drop-shadow-md -rotate-4"
                  />
                </span>
                <span className="text-shimmer pr-1.5 min-[360px]:pr-2 sm:pr-4">
                  0
                </span>
              </span>
            </span>
          </h1>

          {/* Heart Flourish Divider */}
          <div
            className="animate-fade-up my-2 flex items-center justify-center gap-2.5 sm:gap-3 text-[#c89d5c]"
            style={{ animationDelay: "0.45s" }}
          >
            <div className="h-px w-10 min-[360px]:w-14 bg-linear-to-r from-transparent via-[#c89d5c] to-transparent sm:w-24" />
            <svg
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#c66353] fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <div className="h-px w-10 min-[360px]:w-14 bg-linear-to-l from-transparent via-[#c89d5c] to-transparent sm:w-24" />
          </div>

          {/* Subtitle Poem */}
          <p
            className="animate-fade-up my-1.5 sm:my-2 text-xs min-[360px]:text-sm min-[390px]:text-base italic font-serif text-[#6b4e42] sm:text-lg md:text-xl max-w-md leading-relaxed px-2 sm:px-0"
            style={{ animationDelay: "0.55s" }}
          >
            Cinco décadas de amor, risas y momentos inolvidables
          </p>

          {/* Date Badge Pill */}
          <div
            className="animate-fade-up my-1 inline-flex items-center justify-center px-3 py-1.5 min-[360px]:px-4 min-[360px]:py-2 sm:px-8 sm:py-3"
            style={{ animationDelay: "0.65s" }}
          >
            <div className="flex flex-wrap items-center justify-center gap-1.5 min-[360px]:gap-2 text-brown-deep sm:gap-4">
              <span className="h-px w-4 min-[360px]:w-8 bg-gold sm:w-12"></span>
              <span className="text-[9px] min-[360px]:text-[10px] uppercase tracking-[0.16em] min-[360px]:tracking-[0.25em] sm:text-sm sm:tracking-[0.3em]">
                29 · Agosto · 2026
              </span>
              <span className="h-px w-4 min-[360px]:w-8 bg-gold sm:w-12"></span>
            </div>
          </div>

          {/* Action Button: CELEBRAR CONMIGO */}
          <div
            className="animate-fade-up my-3 sm:my-4"
            style={{ animationDelay: "0.75s" }}
          >
            <button
              onClick={fireConfetti}
              className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-[#e6bd85] px-6 py-3 min-[360px]:px-8 min-[360px]:py-3.5 text-[11px] min-[360px]:text-xs font-semibold uppercase tracking-[0.18em] min-[360px]:tracking-[0.2em] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 sm:px-10 sm:py-4 sm:text-sm"
              style={{
                background: "linear-gradient(135deg, #df6b56 0%, #c6533f 100%)",
                boxShadow:
                  "0 10px 25px -5px rgba(198, 83, 63, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
              }}
            >
              {/* Party Popper Icon */}
              <svg
                className="w-3.5 h-3.5 text-white sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <span>CELEBRA CONMIGO</span>
            </button>
          </div>

          {/* DESLIZA Navigation */}
          <div
            className="animate-fade-up mt-4 sm:mt-8 flex flex-col items-center gap-1 text-[#7a5a4a]"
            style={{ animationDelay: "0.9s" }}
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.35em] sm:text-xs">
              DESLIZA
            </span>
            <svg
              className="w-3 h-3 text-[#c66353] fill-current my-0.5"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <div className="flex flex-col items-center -space-y-1.5 animate-bounce mt-1">
              <svg
                className="w-4 h-4 text-[#c89d5c]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <svg
                className="w-4 h-4 text-[#c89d5c] opacity-60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      {/* ========== COUNTDOWN ========== */}
      <section
        className="relative overflow-hidden py-16 sm:py-20 md:py-24"
        style={{ backgroundColor: "#fdf8f3" }}
      >
        {/* Background Ambient Sparkles */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e6c794_1px,transparent_1px)] bg-size-[24px_24px] opacity-20" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6">
          {/* Subtitle Header */}
          <p className="reveal-on-scroll text-[11px] font-medium uppercase tracking-[0.4em] text-[#d16b57] sm:text-xs md:text-sm">
            LA CUENTA REGRESIVA
          </p>

          {/* Main Title */}
          <h2 className="reveal-on-scroll mt-2 text-4xl font-serif text-[#4a382e] sm:text-5xl md:text-6xl drop-shadow-xs">
            Faltan tan solo...
          </h2>

          {/* Tiara & Flourish Divider */}
          <div className="reveal-on-scroll my-6 flex items-center justify-center gap-3 text-[#d4a860]">
            <div className="flex items-center gap-1.5">
              <div className="h-px w-12 bg-linear-to-r from-transparent to-[#d4a860] sm:w-20" />
              <span className="text-[11px]">∞</span>
              <span className="text-[9px]">◆</span>
            </div>

            {/* Mini Tiara Ornament */}
            <TiaraIcon className="w-10 h-10 text-[#d4a860] drop-shadow-xs" />

            <div className="flex items-center gap-1.5">
              <span className="text-[9px]">◆</span>
              <span className="text-[11px]">∞</span>
              <div className="h-px w-12 bg-linear-to-l from-transparent to-[#d4a860] sm:w-20" />
            </div>
          </div>

          {/* 2x2 Countdown Grid Container */}
          <div className="reveal-on-scroll relative mx-auto mt-8 max-w-lg sm:max-w-xl">
            {/* Central Heart Badge */}
            <div className="absolute left-1/2 top-1/2 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#e6bd85] bg-[#fffcf8] shadow-md sm:h-12 sm:w-12">
              <svg
                className="w-4 h-4 text-[#c6533f] fill-current sm:w-5 sm:h-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-3.5 sm:gap-5">
              {[
                { label: "DÍAS", value: c.days },
                { label: "HORAS", value: c.hours },
                { label: "MINUTOS", value: c.minutes },
                { label: "SEGUNDOS", value: c.seconds },
              ].map((u) => (
                <div
                  key={u.label}
                  className="group relative overflow-hidden rounded-[1.75rem] border-2 border-[#f3e2ca] bg-[#fffcf8] p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#e6bd85] hover:shadow-xl sm:p-7"
                >
                  {/* Subtle Inner Gold Double Frame */}
                  <div className="pointer-events-none absolute inset-2.5 rounded-[1.25rem] border border-[#f5e9d6]/80" />

                  {/* Top Star Accent */}
                  <div className="flex justify-center text-[#d4a860] mb-1 text-[11px]">
                    ✦
                  </div>

                  {/* Number Display */}
                  <div
                    key={u.value}
                    className="countdown-tick my-1 text-4xl font-serif font-normal text-[#804833] sm:text-5xl md:text-6xl drop-shadow-xs"
                  >
                    {String(u.value).padStart(2, "0")}
                  </div>

                  {/* Line Divider with Tiny Heart */}
                  <div className="my-2.5 flex items-center justify-center gap-2 text-[#d4a860]">
                    <div className="h-px w-8 bg-linear-to-r from-transparent to-[#d4a860]" />
                    <svg
                      className="w-2.5 h-2.5 text-[#c6533f] fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <div className="h-px w-8 bg-linear-to-l from-transparent to-[#d4a860]" />
                  </div>

                  {/* Unit Label */}
                  <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c6533f] sm:text-xs sm:tracking-[0.35em]">
                    {u.label}
                  </div>

                  {/* Bottom-Right Botanical Leaf Accent */}
                  <svg
                    className="pointer-events-none absolute -bottom-1 -right-1 w-10 h-10 text-[#e8d5bc] opacity-50 sm:w-12 sm:h-12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M17 8C8 10 59 16.5 4.5 20c.5-1.5 2-4 5-6 3-2 6-3 7.5-6z"
                      opacity="0.4"
                    />
                    <path d="M12.4 3.5C7.2 7 5.1 11.2 4 16c2.5-1.8 5.8-3.2 8.4-12.5z" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ========== STORY / IMAGE ========== */}
      <section className="relative overflow-hidden py-14 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-2 md:items-center md:gap-12">
          <div
            className="reveal-on-scroll relative overflow-hidden rounded-lg"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <div
              className="pointer-events-none absolute -inset-4 rounded-lg opacity-30"
              style={{ background: "var(--gradient-gold)" }}
            />
            <div className="relative aspect-4/3 overflow-hidden rounded-lg">
              {storySlides.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Momento ${i + 1}`}
                  width={1536}
                  height={1024}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
                  style={{ opacity: i === activeSlide ? 1 : 0 }}
                />
              ))}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-4">
                {storySlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Slide ${i + 1}`}
                    className="h-1.5 rounded-full transition-all duration-500"
                    style={{
                      width: i === activeSlide ? "1.5rem" : "0.5rem",
                      background:
                        i === activeSlide
                          ? "var(--gold)"
                          : "color-mix(in oklab, var(--beige-soft) 60%, transparent)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="reveal-on-scroll">
            <p className="text-[10px] uppercase tracking-[0.35em] text-coral-deep sm:text-sm sm:tracking-[0.4em]">
              Una vida celebrada
            </p>
            <h2 className="mt-4 text-4xl text-brown-deep sm:text-5xl">
              <span
                style={{ fontFamily: "var(--font-script)" }}
                className="text-5xl text-coral sm:text-6xl"
              >
                50
              </span>
              <br />
              Años de historias
            </h2>
            <div
              className="my-6 h-px w-24"
              style={{ background: "var(--gradient-gold)" }}
            />
            <p className="text-base leading-relaxed text-brown sm:text-lg">
              Cinco décadas llenas de amor, sueños cumplidos, viajes
              inolvidables y amistades que se han vuelto familia. Ha llegado el
              momento de brindar por todo lo vivido y por lo que aún está por
              venir.
            </p>
            <p className="mt-4 italic text-muted-foreground">
              "La vida no se mide por los años vividos, sino por los momentos
              que nos dejan sin aliento."
            </p>
          </div>
        </div>
      </section>{" "}
      {/* ========== DETAILS ========== */}
      <section
        className="relative overflow-hidden py-16 sm:py-20"
        style={{ backgroundColor: "var(--beige)" }}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="text-center">
            {/* Subtitle Header */}
            <p className="reveal-on-scroll text-[11px] font-medium uppercase tracking-[0.4em] text-[#d16b57] sm:text-xs md:text-sm">
              Los detalles
            </p>

            {/* Main Title */}
            <h2 className="reveal-on-scroll mt-2 text-4xl font-serif text-[#4a382e] sm:text-5xl md:text-6xl drop-shadow-xs">
              Toma nota
            </h2>
            <div className="mx-auto my-6 w-24 gold-divider sm:w-32" />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <CalendarIcon />,
                title: "Cuándo",
                lines: ["Sábado 29 de Agosto", "2026 · 8:00 pm"],
              },
              {
                icon: <LocationIcon />,
                title: "Dónde",
                lines: [
                  "Av. Gran Chimu N° 654, Zarate",
                  "San Juan de Lurigancho",
                ],
                link: "https://maps.app.goo.gl/kbZqfFsupV8TuoXz5",
              },
              {
                icon: <DressSuitIcon />,
                title: "Etiqueta",
                lines: ["Damas y Varones: Sport Elegante"],
              },
            ].map((d, idx) => (
              <div
                key={d.title}
                className="reveal-on-scroll invitation-card group text-center"
                style={{
                  transitionDelay: `${idx * 150}ms`,
                }}
              >
                {/* Decorative Elements */}
                <div className="card-frame" />
                <div className="shine-sweep" />

                {/* Flourish Corners */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="card-flourish flourish-tl"
                >
                  <path
                    d="M2 2 C 8 2, 12 6, 12 12 C 12 8, 16 4, 22 2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 2 C 2 8, 6 12, 12 12 C 8 12, 4 16, 2 22"
                    strokeLinecap="round"
                  />
                  <circle cx="6" cy="6" r="1.5" fill="currentColor" />
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="card-flourish flourish-tr"
                >
                  <path
                    d="M2 2 C 8 2, 12 6, 12 12 C 12 8, 16 4, 22 2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 2 C 2 8, 6 12, 12 12 C 8 12, 4 16, 2 22"
                    strokeLinecap="round"
                  />
                  <circle cx="6" cy="6" r="1.5" fill="currentColor" />
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="card-flourish flourish-bl"
                >
                  <path
                    d="M2 2 C 8 2, 12 6, 12 12 C 12 8, 16 4, 22 2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 2 C 2 8, 6 12, 12 12 C 8 12, 4 16, 2 22"
                    strokeLinecap="round"
                  />
                  <circle cx="6" cy="6" r="1.5" fill="currentColor" />
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="card-flourish flourish-br"
                >
                  <path
                    d="M2 2 C 8 2, 12 6, 12 12 C 12 8, 16 4, 22 2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 2 C 2 8, 6 12, 12 12 C 8 12, 4 16, 2 22"
                    strokeLinecap="round"
                  />
                  <circle cx="6" cy="6" r="1.5" fill="currentColor" />
                </svg>

                {/* Badge Icon Container */}
                <div className="icon-badge-container mb-6">
                  <div className="icon-badge-ring-1" />
                  <div className="icon-badge-ring-2" />
                  <span className="relative z-10 text-3xl transition-transform duration-500 group-hover:scale-125 select-none flex items-center justify-center">
                    {d.icon}
                  </span>
                </div>

                <h3
                  className="mt-2 text-xl text-coral-deep sm:text-2xl font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {d.title}
                </h3>
                <div className="mx-auto my-4 w-16 gold-divider" />

                <div className="space-y-1">
                  {d.lines.map((l) => (
                    <p
                      key={l}
                      className="text-brown text-sm sm:text-base font-light"
                    >
                      {l}
                    </p>
                  ))}
                </div>

                {"link" in d && (
                  <a
                    href={d.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-map"
                  >
                    <span>Ver en el mapa</span>
                    <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ========== GALLERY / CELEBRATION ========== */}
      <section className="relative overflow-hidden">
        <div className="relative h-[60vh] w-full overflow-hidden sm:h-[70vh] md:h-[80vh]">
          <img
            ref={celebrationRef}
            src={celebration}
            alt="Mesa festiva con flores coral y detalles dorados"
            loading="lazy"
            width={1280}
            height={960}
            className="absolute inset-0 h-full w-full object-cover will-change-transform"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, color-mix(in oklab, var(--brown-deep) 60%, transparent) 100%)",
            }}
          />
          <div className="relative z-10 flex h-full items-end justify-center pb-12 sm:pb-16 md:pb-20">
            <div className="reveal-on-scroll px-5 text-center text-white">
              <p className="text-[10px] uppercase tracking-[0.35em] sm:text-sm sm:tracking-[0.4em]">
                Una noche mágica
              </p>
              <h2
                className="mt-4 text-5xl sm:text-6xl md:text-7xl"
                style={{ fontFamily: "var(--font-script)" }}
              >
                Te espero
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* ========== RSVP ========== */}
      <section
        className="relative overflow-hidden py-14 sm:py-16 md:py-20"
        style={{ backgroundColor: "var(--beige-soft)" }}
      >
        <img
          ref={rsvpFloral1Ref}
          src={floralAccent}
          alt=""
          aria-hidden="true"
          width={300}
          height={300}
          className="pointer-events-none absolute -left-10 top-10 w-32 opacity-40 sm:w-40 md:w-56 animate-float will-change-transform"
        />
        <img
          ref={rsvpFloral2Ref}
          src={floralAccent}
          alt=""
          aria-hidden="true"
          width={300}
          height={300}
          className="pointer-events-none absolute -right-10 bottom-10 w-32 -rotate-45 opacity-40 sm:w-40 md:w-56 animate-float-slow will-change-transform"
        />

        <div className="relative mx-auto max-w-xl px-5 text-center sm:px-6">
          <p className="reveal-on-scroll text-[12px] uppercase tracking-[0.35em] text-coral-deep sm:text-sm sm:tracking-[0.4em]">
            Confirma tu asistencia
          </p>
          <h2 className="reveal-on-scroll mt-2 text-4xl text-brown-deep sm:text-5xl">
            Reserva tu lugar
          </h2>
          <div className="mx-auto my-6 w-34 gold-divider sm:w-32" />
          <p className="reveal-on-scroll text-brown">
            Tu presencia es el mejor regalo. Por favor confirma antes del 22 de
            Agosto.
          </p>

          {rsvpSent ? (
            <div
              className="reveal-on-scroll mt-8 max-w-md mx-auto rounded-lg border border-border bg-card p-8 text-center"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <div className="text-4xl">💐</div>
              <h3
                className="mt-3 text-2xl text-coral-deep"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ¡Gracias!
              </h3>
              <p className="mt-2 text-brown text-sm">
                Nos vemos el 29 de Agosto.
              </p>
            </div>
          ) : (
            <div className="reveal-on-scroll invitation-card mt-8 max-w-md mx-auto space-y-6 text-center relative overflow-hidden py-10 sm:py-12">
              <div className="card-frame" />

              {/* Flourish Corners */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="card-flourish flourish-tl"
              >
                <path
                  d="M2 2 C 8 2, 12 6, 12 12 C 12 8, 16 4, 22 2"
                  strokeLinecap="round"
                />
                <path
                  d="M2 2 C 2 8, 6 12, 12 12 C 8 12, 4 16, 2 22"
                  strokeLinecap="round"
                />
                <circle cx="6" cy="6" r="1.5" fill="currentColor" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="card-flourish flourish-tr"
              >
                <path
                  d="M2 2 C 8 2, 12 6, 12 12 C 12 8, 16 4, 22 2"
                  strokeLinecap="round"
                />
                <path
                  d="M2 2 C 2 8, 6 12, 12 12 C 8 12, 4 16, 2 22"
                  strokeLinecap="round"
                />
                <circle cx="6" cy="6" r="1.5" fill="currentColor" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="card-flourish flourish-bl"
              >
                <path
                  d="M2 2 C 8 2, 12 6, 12 12 C 12 8, 16 4, 22 2"
                  strokeLinecap="round"
                />
                <path
                  d="M2 2 C 2 8, 6 12, 12 12 C 8 12, 4 16, 2 22"
                  strokeLinecap="round"
                />
                <circle cx="6" cy="6" r="1.5" fill="currentColor" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="card-flourish flourish-br"
              >
                <path
                  d="M2 2 C 8 2, 12 6, 12 12 C 12 8, 16 4, 22 2"
                  strokeLinecap="round"
                />
                <path
                  d="M2 2 C 2 8, 6 12, 12 12 C 8 12, 4 16, 2 22"
                  strokeLinecap="round"
                />
                <circle cx="6" cy="6" r="1.5" fill="currentColor" />
              </svg>

              <p className="text-brown text-xs sm:text-sm font-light leading-relaxed max-w-xs mx-auto relative z-10">
                Al hacer clic en el botón, te redirigiremos a WhatsApp para
                confirmar tu asistencia.
              </p>
              <div className="relative z-10">
                <button
                  onClick={() => {
                    setRsvpSent(true);
                    fireConfetti();

                    const message = [
                      "🌸 ¡Hola, Jacky! 💖",
                      "",
                      "✨ Con mucho gusto confirmo mi asistencia para acompañarte en la celebración de tus 50 años. 🎉🥂",
                      "",
                      "Será un verdadero placer compartir contigo este momento tan especial, lleno de alegría, recuerdos y buenos deseos. 💐",
                      "",
                      "📅 Nos vemos el 29 de agosto.",
                      "¡Estoy deseando celebrar contigo! 🎂🎈",
                    ].join("\n");

                    setTimeout(() => {
                      const whatsappUrl = `https://api.whatsapp.com/send?phone=51992088977&text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, "_blank");
                    }, 700);
                  }}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full px-6 mb-4 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                  style={{
                    background: "var(--gradient-coral)",
                    boxShadow: "var(--shadow-gold)",
                  }}
                >
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.5 13.6439 3.5 12ZM12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 13.8381 1.97314 15.5683 2.80463 17.0727L1.08045 21.107C0.928028 21.4637 0.995589 21.8763 1.2538 22.1657C1.51201 22.4552 1.9143 22.5692 2.28597 22.4582L6.78539 21.1155C8.32243 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                    />
                  </svg>

                  <span>Confirmar por WhatsApp</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      {/* ========== FOOTER ========== */}
      <footer
        className="relative py-10 text-center"
        style={{
          backgroundColor: "var(--brown-deep)",
          color: "var(--beige-soft)",
        }}
      >
        <div className="mx-auto max-w-2xl px-6">
          <div
            className="mx-auto mb-6 w-34 gold-divider"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--gold), transparent)",
            }}
          />
          <h3
            className="text-5xl"
            style={{
              fontFamily: "var(--font-script)",
              color: "var(--gold-soft)",
            }}
          >
            Con amor
          </h3>
          <p className="mt-4 text-sm uppercase tracking-[0.3em] opacity-70">
            Nos vemos en agosto
          </p>
        </div>
      </footer>
    </main>
  );
}
