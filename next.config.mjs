/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "render.crafty.gg"
            }
        ]
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    
};

export default nextConfig;
