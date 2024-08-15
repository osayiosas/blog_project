
// "


"use client";

import SingleBlog from "@/components/blog/single-blog";
import Button from "@/components/button";
import { GlobalContext } from "@/context";
import { Blog } from "@/utils/types";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function Search() {
  const { searchResults, setSearchQuery, setSearchResults, searchQuery } =
    useContext(GlobalContext);

  const router = useRouter();

  async function helperFuncToFetchSearchResults(query: string) {
    const res = await fetch(`/api/search?query=${query}`, {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    if (data.success) {
      setSearchResults(data.data);
    }
  }

  async function handleSearch() {
    helperFuncToFetchSearchResults(searchQuery);
  }

  async function handleDelete(id: number) {
    const res = await fetch(`/api/blog-post/delete-post?id=${id}`, {
      method: "DELETE",
      cache: "no-store",
    });

    const data = await res.json();

    if (data && data.success) helperFuncToFetchSearchResults(searchQuery);
  }

  return (
    <section className="overflow-hidden py-10 md:py-16 lg:py-20">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-10 rounded-md bg-primary/[3%] py-8 px-6 dark:bg-dark sm:py-10 sm:px-8 lg:mb-8 lg:px-8 xl:py-12 xl:px-10">
              <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-3xl">
                Search Stories
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <input
                    name="search"
                    id="search"
                    type="text"
                    placeholder="Search Blogs"
                    autoFocus
                    autoComplete="off"
                    className="w-full rounded-md border border-transparent py-3 px-4 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setSearchQuery(e.target.value)
                    }
                  />
                </div>
                <div>
                  <Button text="Search" onClick={handleSearch} />
                </div>
              </div>
            </div>
          </div>
          <section className="w-full pb-12 md:pb-20">
            <div className="container">
              <div className="-mx-4 flex flex-wrap">
                {searchResults && searchResults.length ? (
                  searchResults.map((searchBlogItem: Blog) => (
                    <div
                      key={searchBlogItem.id}
                      className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3 xl:w-1/4"
                    >
                      <SingleBlog
                        handleDelete={handleDelete}
                        blogItem={searchBlogItem}
                      />
                    </div>
                  ))
                ) : (
                  <div className="w-full text-center px-4">
                    <h1 className="text-lg font-semibold text-body-color dark:text-white">
                      No search results found
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
