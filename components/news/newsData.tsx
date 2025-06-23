// components/News/newsData.ts

export interface News {
  id: number;
  title: string;
  source: string;
  description: string;
  date: string;
  image: string;
}

const newsData: News[] = [
  {
    id: 1,
    title: "Singapore confers Honorary Citizen Award on former CII head Tarun Das",
    source: "Ananta Aspen Centre",
    description: "IN THE NEWS",
    date: "January 15, 2025",
    image: "https://anantaaspencentre.in/wp-content/uploads/2025/01/Main-pic-1024x700.jpeg",
  },
  {
    id: 2,
    title: "India Should Aim To Be A ‘Super Partner’",
    source: "Ananta Aspen Centre",
    description: "IN THE NEWS",
    date: "December 6, 2022",
    image: "https://anantaaspencentre.in/wp-content/uploads/2022/12/2022_12largeimg_1066593864.jpg",
  },
  {
    id: 3,
    title: "Press Release for Dr. Sudha Iyer",
    source: "Ananta Aspen Centre",
    description: "IN THE NEWS",
    date: "October 27, 2022",
    image: "https://anantaaspencentre.in/wp-content/uploads/2022/10/unnamed.jpg",
  },
  {
    id: 4,
    title: "Leadership Dialogues Summit 2024 Announced",
    source: "Ananta Aspen Centre",
    description: "IN THE NEWS",
    date: "March 2, 2024",
    image: "https://anantaaspencentre.in/wp-content/uploads/2022/08/Tarun-das-1024x576.jpg",
  },
  {
    id: 5,
    title: "Ananta Hosts Global Youth Forum",
    source: "Ananta Aspen Centre",
    description: "IN THE NEWS",
    date: "August 10, 2023",
    image: "https://anantaaspencentre.in/wp-content/uploads/2022/08/Fellow-in-news-1920%C3%971080-1024x576.jpg",
  },
];

export default newsData;
