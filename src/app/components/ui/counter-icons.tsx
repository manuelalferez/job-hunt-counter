export function UpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-2 -2 24 24"
      className="w-8 h-8"
    >
      <path
        fill="currentColor"
        d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16zm1-7v4a1 1 0 0 1-2 0v-4H5a1 1 0 0 1 0-2h4V5a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2h-4z"
      />
    </svg>
  );
}

export function DownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-2 -2 24 24"
      className="w-8 h-8"
    >
      <path
        fill="currentColor"
        d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10zM5 9h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z"
      />
    </svg>
  );
}

export function LoadingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-10 h-10 text-blue-200"
    >
      <circle cx="12" cy="12" r="0" fill="currentColor">
        <animate
          id="svgSpinnersPulse20"
          fill="freeze"
          attributeName="r"
          begin="0;svgSpinnersPulse21.begin+0.6s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="0;11"
        />
        <animate
          fill="freeze"
          attributeName="opacity"
          begin="0;svgSpinnersPulse21.begin+0.6s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="1;0"
        />
      </circle>
      <circle cx="12" cy="12" r="0" fill="currentColor">
        <animate
          id="svgSpinnersPulse21"
          fill="freeze"
          attributeName="r"
          begin="svgSpinnersPulse20.begin+0.6s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="0;11"
        />
        <animate
          fill="freeze"
          attributeName="opacity"
          begin="svgSpinnersPulse20.begin+0.6s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="1;0"
        />
      </circle>
    </svg>
  );
}
