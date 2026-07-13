import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
	turbopack: {
		// set Turbopack root to this project folder to avoid workspace root warnings
		root: path.resolve(__dirname),
	},
};

export default nextConfig;