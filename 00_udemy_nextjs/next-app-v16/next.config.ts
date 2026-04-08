/*
 * fullUrl: true zeigt im Terminal die exakte URL an, die gefetcht wird.
 *
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
