/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ecdthnglkmlgzvnamfxo.supabase.co',
          },
        ],
      },
};

export default nextConfig;
