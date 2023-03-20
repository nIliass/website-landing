import { useState } from "react";

export default function StateBtn({ togglePlay, isPlay, cls }) {
  return (
    <button className={cls} onClick={togglePlay}>
      {!isPlay && (
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
        </svg>
      )}
      {isPlay && (
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
        </svg>
      )}
    </button>
  );
}
