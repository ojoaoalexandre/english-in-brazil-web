const PlayIcon = ({ size = 30, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={color} width={size} height={size}>
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    />
  </svg>
);

const PauseIcon = ({ size = 30, color = "#e94653" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 275.725 275.725">
    <path
      fill={color}
      d="M137.862,0C61.726,0,0,61.726,0,137.862c0,76.14,61.726,137.862,137.862,137.862c76.139,0,137.862-61.723,137.862-137.862
      C275.725,61.726,214.001,0,137.862,0z M114.26,188.856c0,11.967-7.925,21.655-17.704,21.655c-9.776,0-17.704-9.688-17.704-21.655
      V100.65c0-11.957,7.927-21.655,17.704-21.655c9.779,0,17.704,9.698,17.704,21.655V188.856z M196.877,188.856
      c0,11.967-7.933,21.655-17.704,21.655c-9.771,0-17.698-9.688-17.698-21.655V100.65c0-11.957,7.928-21.655,17.698-21.655
      c9.776,0,17.704,9.698,17.704,21.655V188.856z"
    />
  </svg>
);

const TranslateIcon = ({ size = 30, color = "#000000" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 30 30" width={size} height={size}>
    <path d="M5 3C3.9069372 3 3 3.9069372 3 5V16C3 17.093063 3.9069372 18 5 18H7H12V22H8V19H7L6 19V22L8 24H12V25C12 26.105 12.895 27 14 27H25C26.105 27 27 26.105 27 25V14C27 12.895 26.105 12 25 12H18V5C18 3.9069372 17.093063 3 16 3H5Z" />
  </svg>
);

const MicrophoneIcon = ({ size = 30, color = "#ffffff" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 20 20" width={size} height={size}>
    <path
      d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
      clipRule="evenodd"
    />
  </svg>
);

export { PlayIcon, PauseIcon, TranslateIcon, MicrophoneIcon }
