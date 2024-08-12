"use client";

import SingleBlog from "@/components/blog/single-blog";
import Button from "@/components/button";
import { GlobalContext } from "@/context";
import { Blog } from "@/utils/types";
import { useContext } from "react";

export default function Search() {
  const { searchResults, setSearchQuery, setSearchResults, searchQuery } =
    useContext(GlobalContext);

  async function handleSearch() {
    console.log(searchQuery);

    const res = await fetch(`/api/search/?seardata=(searchQuery)}`, {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    console.log(data, "searchdata");

    if (data.success) {
      setSearchQuery(" ");
      setSearchResults(data.data);
    }
  }

  return (
    <section className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[50px] lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Search through Post
              </h2>

              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <input
                    name="search"
                    id="search"
                    type="text"
                    placeholder="Search Story"
                    autoFocus
                    autoComplete="off"
                    className="w-full rounded-md border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242b51] dark:shadow-signUp"
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
          <section className="pt-[80px] w-full pb-[120px]">
            <div className="container">
              <div className="-mx-4 flex flex-wrap">
                {searchResults && searchResults.length ? (
                  searchResults.map((searchBlogItem: Blog) => (
                    <div
                      key={searchBlogItem.id}
                      className="w-full px-4 md:w-2/3 lg:w1/2 xl:w-1/3"
                    >
                      <SingleBlog blogItem={searchBlogItem} handleDelete={function (id: number): {} {
                              throw new Error("Function not implemented.");
                          } } />
                    </div>
                  ))
                ) : (
                  <h1>No Search Results</h1>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
