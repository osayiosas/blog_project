const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images : {
//         remotePatterns : [
//             {
//                 protocol : 'https',
//                 hostname : 'firebasestorage.googleapis.com'
//             }, {
//                 protocol : 'https',
//                 hostname : 'avatars.githubusercontent.com'
//             }
//         ]
//     }
// }

// export default nextConfig;
