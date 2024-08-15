// "use client";

// import Link from "next/link";

// export default function Home() {
//   return (
//     <>
//       <section className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]">
//         <div className="container">
//           <div className="-mx-4 flex flex-wrap">
//             <div className="w-full px-4">
//               <div className="mx-auto max-w-[800px] text-center">
//                 <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
//                  Chatter Tell Your Story
//                 </h1>
//                 <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
//                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sunt ipsum inventore nemo aperiam. Eligendi, dolor!
//                 </p>
//               </div>
//               <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
//                 <Link
//                   className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white 
//                   hover:bg-primary/80"
//                   href={"/blogs"}
//                 >
//                   Explore All Blogs
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]">
        <div className="container max-w-screen-lg mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Chatter Tell Your Story
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  Chatter is a unique platform tailored for the traditional
                  bookworm who treasures the power of words and the art of
                  storytelling. In a digital age dominated by visual content,
                  Chatter offers a refreshing retreat for those who prefer the
                  quiet, contemplative space of text-based engagement. This
                  platform is designed to celebrate the written word, providing
                  a space where readers and writers can connect over their
                  shared love for literature, essays, and long-form content.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  className="rounded-md bg-body-color py-4 px-8 text-base font-semibold text-white hover:bg-primary/80"
                  href={"/blogs"}
                >
                  Explore chatter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
