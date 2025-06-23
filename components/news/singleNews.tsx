// components/News/SingleNews.tsx

import React from "react";
import { News } from "./newsData";

type Props = {
  news: News;
};

const SingleNews: React.FC<Props> = ({ news }) => {
  return (
    <div className="mb-10 rounded-lg overflow-hidden shadow-lg">
      <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <p className="text-xs uppercase text-primary font-semibold mb-2">
          {news.description}
        </p>
        <h3 className="text-lg font-bold mb-1">{news.title}</h3>
        <p className="text-sm text-gray-500">{news.source}</p>
        <p className="text-xs text-gray-400">{news.date}</p>
      </div>
    </div>
  );
};

export default SingleNews;
