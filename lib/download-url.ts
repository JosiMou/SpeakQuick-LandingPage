const DEFAULT_CHECKOUT_URL =
  "https://buy.polar.sh/polar_cl_WsycNr53yGGR7pIF2gmWCHsKXJOnpLIU8zwUx2N70NT";

export const SPEAKQUICK_DOWNLOAD_URL =
  (process.env.NEXT_PUBLIC_SPEAKQUICK_DOWNLOAD_URL || "").trim() || DEFAULT_CHECKOUT_URL;
