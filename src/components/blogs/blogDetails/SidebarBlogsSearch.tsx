import { BlogDataType } from "@/types";
import React, { useState } from "react";
import SidebarBlogCard from "./SidebarBlogCard";

const SidebarBlogsSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<BlogDataType[] | null>(
    null,
  );
  const [loading, setLoading] = useState(false);

  const searchHandler = async () => {
    setLoading(true);
    const res = await fetch(
      `/api/blogs/search?q=${encodeURIComponent(searchValue)}`,
    );
    setLoading(false);
    const data = await res.json();
    setSearchResults(data.data);
  };

  return (
    <>
      <div className="mb-8">
        <div className="bg-accent1 w-full flex justify-center py-8 mb-4">
          <div className="flex w-4/5 items-center rounded overflow-hidden">
            <input
              type="text"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              placeholder="Search blogs here"
              className="py-2 px-4 w-full"
            />
            <button
              onClick={searchHandler}
              className="bg-black text-white py-2 px-4"
              disabled={loading}>
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>
        {searchResults && (
          <>
            <h3 className="text-black font-bold text-2xl mb-8 lg:text-4xl">
              Search results
            </h3>
            {searchResults.length === 0 ? (
              <p className="text-black text-lg text-center">No results found</p>
            ) : (
              searchResults.map((blog, index) => (
                <SidebarBlogCard key={index} {...blog} />
              ))
            )}
          </>
        )}
      </div>
    </>
  );
};

export default SidebarBlogsSearch;
