import { clsx } from "clsx";
import { SVGProps } from "react";

export function WideLogo({ className, ...props }: SVGProps<SVGSVGElement>) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1440 553"
      className={clsx( className, 'animate-squiggle')}
      {...props}
    >
      <path
        fill="currentColor"
        d="M211 222c-5 13 0 27-6 40-6 11-19 18-29 26-7 6-11 13-21 16-17 5-38-3-55-4-14 4-30-2-39-13-3-12-10-21-17-31-6-16-14-36-18-52 1-12 5-32 18-36 4 1 9 3 13 0 75-5 32 75 67 91 11 6 20 1 28-8 14-4 21-14 15-29-4-21-4-46-30-54-14 3-27-7-39-14-13-10-31-12-43-23-8-7-2-18-1-28 3-22 21-38 42-37 12-8 24-7 38-10 13-1 34-12 43-1 13 4 22 17 29 27 4 15-5 34-23 33-25-1-32-21-63-18-19-2-26 15-7 23 16 17 41 15 61 26 13 6 19 22 28 32 9 13 6 29 9 44m169 5c2 22-2 42-10 63 0 18-8 32-25 40-14 12-52 16-68 7-18-16-49-26-48-55 1-10 0-18-4-27-3-13 5-26 5-39-6-34 16-70 4-105-11-23 36-16 42-2 4 26-6 52-8 78-3 7 2 14 2 21-6 20 0 43 2 63 8 7 26 10 34 2 5-9 4-21 4-31-1-7 5-12 4-19-5-15-2-31 0-47 2-13-3-27 3-39 14-12 48-33 60-10 12 32-4 67 3 100m194 57c-3 12 1 29-3 40-7 6-12 11-9 21-1 11-25 19-35 27-12 4-27-4-39 3-17 7-42-4-59-6a30 30 0 0 1-19-2c-5-6-15-6-14-12l-3-3c-3-4-6-8-6-13-1-26 20-21 23-39 3-13-4-27-3-41 7-21 5-42 2-64-1-13 1-27 2-39-2-8-7-17-2-23 9-10 24-7 37-9 18-6 36-6 55-4 11 1 23-5 32 2 15 10 31 21 37 39 4 9-3 15-2 24 2 22-19 33-39 34 2 5 8 6 12 9l18 17c4 14 15 23 15 39m-56-108c4-32-71-29-74-5 6 58-8 36 44 34 19-5 27-7 30-29m-16 74c-5-3-7-10-14-10-11 0-29-1-40 2l1 49c1 6-4 16 3 20 50 12 67-15 50-61m229-29c1 20 5 39-3 58 2 23-12 42-33 50-43 1-49 15-89-13-19-11-11-38-22-54-3-4 0-9 0-13 0-3-2-7-1-10 6-11 0-22-2-33 4-18 6-38 9-57 1-10 7-23 4-34 5-20 44-6 33 27 2 15-4 29-4 45-1 22 3 43 5 64 2 7 1 17 4 23 11 9 23 12 35 4 11-12 1-33 4-48-3-21-13-19-8-44-3-19-15-56 17-50 50-14 39 57 51 85m200-64c-17 41-58 2-17 62-7 19 16 35 8 53-5 9-14 16-24 17-10 8-28 16-37 4-5-8-2-18-9-25-5-11-2-24-5-35-11-11-6-36-21-41-7 0-11-1-14 4-3 11 3 24-1 35-11 12-7 28-4 43 7 16-17 24-29 20-8 0-19 3-22-7-8-29 1-23 5-46-1-11-5-21-5-31 3-12 6-24 2-36 1-12 4-23-4-33 1-9 2-18-1-27-1-6-6-8-9-13-3-25 25-33 45-35 21-1 41 5 61 1 27-6 62-17 78 13 4 7 4 16 0 24 4 17 11 36 3 53m-36-24c-6-8-8-20-10-29-13-15-33 4-50 0-48 20-49-4-31 54 24-5 29 6 55-9 16 0 34 7 36-16m235 68c-3 9-8 18-7 28 1 9-2 15-9 21-3 2-2 7-2 10-4 10-17 12-25 18-9 6-22 0-32 1-29 5-60 8-88 0-3-1-4-1-3-3 0-5-7-9-8-15-4-17 1-20 11-32 4-19-3-40-1-60 6-19 3-37-3-56-4-14 1-29-1-44 0-11-17-21-6-31 13-9 33-6 48-8 19-6 39-6 58-4 31-4 34 2 59 18 16 15 22 37 11 58-7 23-15 27-39 32 0 5 7 6 11 9l19 19c4 13 12 25 7 39m-45-116c4-33-77-33-81-6 9 66-12 39 48 38 22-7 28-8 33-32m-13 83c-6-2-10-9-17-9-14 0-34-2-48 0 2 19 1 33 1 52 1 7-4 17 3 22 18 6 42 1 59-7 17-13 16-43 2-58m149-41c-4 10-1 23-4 34-10 12-12 25-12 41-5 10-1 16 0 26-2 16-1 41-16 49-21 6-21-8-24-24-4-7-8-10-7-19 0-14 5-29 3-43-3-13-2-25 2-38-2-11-13-15-6-28 3-12-6-25 3-35 4-11 15-8 24-11 10-6 20 2 29 6 8 12 10 27 8 42m185 128c3 4 1 8 0 12 0 12 3 25 2 37 1 8 7 17 4 26-1 5-5 7-8 11-1 5-3 11-8 14-15 16-31-4-33-20-14-16-9-39-6-58-5-10-7-22-10-32-4-8-11 0-14 3-14 3-30-5-45-4-20-4-12 23-16 35-14 12-9 42-28 46-9 0-15-10-19-16-9-7-8-18-6-28 2-3 8-6 5-10 1-17 17-32 14-51 0-12 3-20 11-29 2-11-2-16 7-27 4-17-2-26 10-40-4-15 12-26 11-39 8-26 40-18 59-13 11 0 22-7 32 0 21 10 11 37 19 55 11 12 5 28 7 42 3 6 6 11 4 19-3 7 1 13 1 20-6 21-11 30 7 47m-69-48c4-7-3-16-4-23 1-5 2-10-1-15-2-7-7-13-10-19-3-5-1-14-8-17-9 27-21 52-26 80 16-1 34-2 49-6M918 431c-2 30-3 26-26 45-12 14-34 3-49 2-20-9-10-16-22-23-5-4 2-8-3-12-5-5-2-12-3-18 0-3-2-22 7-14 6-1 0-12 11-6 13 4 8 24 17 31 5 8 12 24 24 17 3-5 9-7 13-11 5-8-2-32-11-35-17-7-38-11-51-25-15-15 0-49 22-47 8-5 49-15 51-2 3 2 6 2 7 6 2 4 6 5 8 9 3 11-5 33-19 27-8-7-8-22-23-19-18-2-30 8-9 19 11 11 9 6 22 11 23 12 34 16 34 45m140-79c-3 16-45 14-34 32 4 4 4 9 6 15 6 13 15 25 20 38-3 14-23 17-34 20-12-1-12-17-15-26-5-7-8-16-10-24-2-6-5-17-11-10-7 3-9 5-6 12 0 17 10 41-1 55-12 5-37 8-40-10-3-17 6-33 5-50-3-12 2-24 4-36-1-9-1-17 1-26 0-7 8-7 8-13-2-14 13-16 23-12s-15 67 1 56c20-13 41-25 64-31 10-9 23-6 19 10m112 89c1 12-7 24-12 33-8 4-19-5-20-14 2-8 3-21-1-28-4-1-6 1-9 3-6 1-12-3-19-4-15-5-17-1-19 14 0 5-3 6-6 10-4 5-5 14-11 19-11 9-24-21-16-28 3-2 3-4 3-7 7-11 13-23 14-36 3-7 10-9 8-18l5-7c3-6 1-15 6-20 5-2 2-8 5-12 5-6 7-13 10-19 10-10 24-4 35 0 7 1 14-3 20 2 13 9 3 26 9 38 5 10-3 21 2 31-3 7-1 14-3 21-6 7-5 14-1 22m-36-31c3-4 0-10-1-14 1-3 2-6 1-10l-5-12c-2-4 0-9-4-11-7 16-16 30-21 47zm166-34c4 41-37 13-58 21-3 24-2 51-5 75 2 13-7 21-19 18-5 0-13-2-13-8 1-8-1-15-7-21-2-15 9-31 8-47 12-39-15-6-20-36-2-4 1-5 2-9 2-16 14-17 27-11 7 1 6-18 23-9 4 16 18 11 30 13 9 9 31-3 32 14m102 131c-4 3-3 10-8 13-5 2-13 1-18 2s-9 6-15 6c-12 0-26 1-37-3-6-4-12-8-19-10s-12-7-12-14c-2-4-8-8-4-13 2-3 6-5 9-4 2 0 4 0 5-2 7-22 4-46 12-69 2-4 1-6-3-9-14-14 14-26 27-23 9 1 18 6 28 7 7 0 17-2 22 5 10 12 33 10 21 31-20 13-48-5-70-5-9 18 0 20 17 23 6 2 13-4 18 1 2 3 5 5 3 10-1 16-12 14-25 12-4-1-9-3-10 2 0 7-4 13 1 17 17 12 74-14 58 23"
      ></path>
    </svg>
  );
}
