"use client";

import { useState } from "react";
import newsData from "@/components/news/newsData";
import SingleNews from "@/components/news/singleNews";
import Breadcrumb from "@/components/Common/Breadcrumb";

const NewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const currentItems = newsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <>
      <Breadcrumb
        pageName="In the News"
        description="Latest press releases and recognitions from Ananta Aspen Centre."
      />

      <section className="pb-[120px] pt-[60px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {currentItems.map((news) => (
              <div
                key={news.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleNews news={news} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="wow fadeInUp -mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white disabled:opacity-50"
                  >
                    Prev
                  </button>
                </li>

                {[...Array(totalPages)].map((_, idx) => (
                  <li key={idx} className="mx-1">
                    <button
                      onClick={() => handlePageClick(idx + 1)}
                      className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm ${
                        currentPage === idx + 1
                          ? "bg-primary text-white"
                          : "bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:text-white"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  </li>
                ))}

                <li className="mx-1">
                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white disabled:opacity-50"
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsPage;
