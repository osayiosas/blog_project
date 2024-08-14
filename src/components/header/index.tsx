"use client";

import { menuItems } from "@/utils";
import { MenuItem } from "@/utils/types";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Button from "../button";
import ThemeToggler from "../theme";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { GlobalContext } from "@/context";

export default function Header() {
  const [sticky, setSticky] = useState<boolean>(false);
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const { data: session } = useSession();
  const { setSearchQuery, setSearchResults } = useContext(GlobalContext);
  const router = useRouter();
  const pathName = usePathname();

  console.log(session, "session");

  function handleStickyNavbar() {
    if (window.scrollY >= 80) setSticky(true);
    else setSticky(false);
  }

  function handleNavbarToggle() {
    setNavbarOpen(!navbarOpen);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  useEffect(() => {
    setSearchResults([]);
    setSearchQuery("");
  }, [pathName]);

  return (
    <div>
      <header
        className={`top-0 left-0 z-40 flex w-full items-center bg-transparent
        ${
          sticky
            ? "!fixed !z-[900] !bg-white !bg-opacity-80 shadow-sticky backdrop:blur-sm !transition dark:!bg-primary dark:bg-opacity-50"
            : "absolute"
        }
        `}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`text-[30px] font-extrabold cursor-pointer block w-full
                            ${sticky ? "py-5 lg:py-2" : "py-8"}`}
              >
                Chatter
              </Link>
            </div>
            {/* Menu items */}
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={handleNavbarToggle}
                  id="navbar-toggle"
                  aria-label="Mobile Menu"
                  className="absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[7px] rotate-45" : ""
                    }`}
                  />

                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0" : ""
                    }`}
                  />

                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[-8px] -rotate-45" : ""
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapes"
                  className={`absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white border-body-color/50 py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static  lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100
                ${
                  navbarOpen
                    ? "visible top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }
                    `}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuItems.map((item: MenuItem) => (
                      <li key={item.id} className="group relative">
                        <Link
                          href={item.path}
                          className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 px-0`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex gap-4 items-center justify-end pr-16 lg:pr-0">
                {session !== null ? (
                  <Button
                    onClick={() => router.push("/create")}
                    text="Create"
                  />
                ) : null}
                <Button
                  onClick={
                    session !== null ? () => signOut() : () => signIn("github")
                  }
                  text={session !== null ? "Logout" : "Login"}
                />
                <div className="flex gap-3 items-center">
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}


// "use client";

// import { menuItems } from "@/utils";
// import { MenuItem } from "@/utils/types";
// import Link from "next/link";
// import { useContext, useEffect, useState } from "react";
// import Button from "../button";
// import ThemeToggler from "../theme";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { usePathname, useRouter } from "next/navigation";
// import { GlobalContext } from "@/context";

// export default function Header() {
//   const [sticky, setSticky] = useState<boolean>(false);
//   const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
//   const { data: session } = useSession();
//   const { setSearchQuery, setSearchResults } = useContext(GlobalContext);
//   const router = useRouter();
//   const pathName = usePathname();

//   console.log(session, "session");

//   function handleStickyNavbar() {
//     if (window.scrollY >= 80) setSticky(true);
//     else setSticky(false);
//   }

//   function handleNavbarToggle() {
//     setNavbarOpen(!navbarOpen);
//   }

//   useEffect(() => {
//     window.addEventListener("scroll", handleStickyNavbar);
//   });

//   useEffect(() => {
//     setSearchResults([]);
//     setSearchQuery("");
//   }, [pathName]);

//   return (
//     <div>
//       <header
//         className={`top-0 left-0 z-40 flex w-full items-center bg-transparent ${
//           sticky
//             ? "!fixed !z-[900] !bg-white !bg-opacity-80 shadow-sticky backdrop:blur-sm !transition dark:!bg-primary dark:bg-opacity-50"
//             : "absolute"
//         }`}
//       >
//         <div className="container">
//           <div className="relative flex items-center justify-between">
//             <div className="w-60 max-w-full">
//               <Link
//                 href="/"
//                 className={`text-[24px] sm:text-[30px] font-extrabold cursor-pointer block ${
//                   sticky ? "py-5" : "py-8"
//                 }`}
//               >
//                 Chatter
//               </Link>
//             </div>
//             {/* Menu items */}
//             <div className="flex w-full items-center justify-between">
//               <div>
//                 <button
//                   onClick={handleNavbarToggle}
//                   aria-label="Mobile Menu"
//                   className="lg:hidden rounded-lg p-2 ring-primary focus:ring-2"
//                 >
//                   <span
//                     className={`block h-0.5 w-6 bg-black dark:bg-white transition-transform duration-300 ${
//                       navbarOpen ? "transform rotate-45 translate-y-1.5" : ""
//                     }`}
//                   />
//                   <span
//                     className={`block h-0.5 w-6 bg-black dark:bg-white transition-opacity duration-300 ${
//                       navbarOpen ? "opacity-0" : "my-1.5"
//                     }`}
//                   />
//                   <span
//                     className={`block h-0.5 w-6 bg-black dark:bg-white transition-transform duration-300 ${
//                       navbarOpen ? "transform -rotate-45 -translate-y-1.5" : ""
//                     }`}
//                   />
//                 </button>
//                 <nav
//                   className={`fixed right-0 top-full z-30 w-full max-w-xs p-6 bg-white dark:bg-dark rounded-lg shadow-lg transition-all duration-300 ease-in-out lg:static lg:w-auto lg:p-0 lg:bg-transparent lg:shadow-none lg:transition-none ${
//                     navbarOpen
//                       ? "transform translate-y-0 opacity-100"
//                       : "transform -translate-y-full opacity-0 lg:opacity-100 lg:translate-y-0"
//                   }`}
//                 >
//                   <ul className="flex flex-col items-center lg:flex-row lg:space-x-6">
//                     {menuItems.map((item: MenuItem) => (
//                       <li key={item.id} className="group relative">
//                         <Link
//                           href={item.path}
//                           className="block py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:py-4"
//                         >
//                           {item.label}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </nav>
//               </div>
//               <div className="flex items-center space-x-4 lg:space-x-6">
//                 {session && (
//                   <Button
//                     onClick={() => router.push("/create")}
//                     text="Create"
//                   />
//                 )}
//                 <Button
//                   onClick={session ? () => signOut() : () => signIn("github")}
//                   text={session ? "Logout" : "Login"}
//                 />
//                 <ThemeToggler />
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }

