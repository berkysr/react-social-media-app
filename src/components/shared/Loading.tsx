import React from 'react';
import { loadingSVG } from '../../helpers/utils/SVG';

export default function Loading() {
  return (
    <div className="z-50 absolute backdrop-blur-sm items-center flex items-center justify-center bg-gray-500 bg-opacity-30 dark:bg-gray-500 dark:bg-opacity-20 absolute w-screen h-screen top-0 bottom-o right-0 left-0">
      {loadingSVG}
    </div>
  );
}
