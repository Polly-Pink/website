import os from "node:os";
import path from "node:path";
import type { NextConfig } from "next";

const localIPs = Object.values(os.networkInterfaces())
  .flat()
  .filter(
    (n): n is os.NetworkInterfaceInfo =>
      n != null && n.family === "IPv4" && !n.internal,
  )
  .map((n) => n.address);

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: localIPs,
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
  },
};

export default nextConfig;
