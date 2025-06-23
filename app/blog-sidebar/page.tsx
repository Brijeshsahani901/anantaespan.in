import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const BlogSidebarPage = () => {
  return (
  <>
  <section className="overflow-hidden pb-[30px] pt-[180px]">
    <div className="container">
      <div className="-mx-4 flex flex-wrap">
        {/* Main Content */}
        <div className="w-full px-4 lg:w-8/12">
          <div>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color">
              <strong>Track 2 India-Sri Lanka Strategic Dialogue</strong><br />
              The inaugural Track 2 India-Sri Lanka Strategic Dialogue was co-convened by the Ananta Aspen Centre and Pathfinder Foundation in Colombo on 25 March 2025. His Excellency Mr. Santosh Jha, High Commissioner of India to Sri Lanka, delivered the keynote address.
            </p>
            <div className="mb-10 w-full overflow-hidden rounded">
              <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                <Image
                  src="https://anantaaspencentre.in/wp-content/uploads/2025/03/DSM01961.webp"
                  alt="India-Sri Lanka Dialogue"
                  fill
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <h3 className="font-xl mb-2 font-bold leading-tight text-black dark:text-white sm:text-2xl">
              Latest Updates
            </h3>
            <ul className="mb-10 list-disc list-inside text-body-color">
              <li className="mb-4">
                <strong>Masterclass series titled “Emerging Technologies and Geopolitical Trends”</strong><br />
                On 24 March 2025, the Ananta Aspen Centre organised the 4th Masterclass on...
              </li>
              <li className="mb-4">
                <strong>Ananta Aspen Centre – Aspen Italy</strong><br />
                The second edition of the India-Italy conversation took place virtually on November 11,...
              </li>
              <li className="mb-4">
                <strong>India-US Track II Dialogue on Climate Change and Energy</strong><br />
                The Union Budget for...
              </li>
            
            </ul>

         
          </div>
        </div>

        {/* Sidebar: Related Posts */}
        <div className="w-full px-4 lg:w-4/12 overflow-y-auto max-h-[100vh]">
          <div className="shadow-three dark:bg-gray-dark mb-10 rounded-sm bg-white dark:shadow-none">
            <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
              Related Posts
            </h3>
            <ul className="p-8">
              <li className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                <RelatedPost
                  title="India’s Geopolitical Outlook 2025"
                  image="/images/blog/post-01.jpg"
                  slug="#"
                  date="12 Mar 2025"
                />
              </li>
              <li className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                <RelatedPost
                  title="Space Tech for Nuclear Non-proliferation"
                  image="/images/blog/post-02.jpg"
                  slug="#"
                  date="04 Mar, 2025"
                />
              </li>
              <li className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                <RelatedPost
                  title="India-US Climate Dialogue Insights"
                  image="/images/blog/post-03.jpg"
                  slug="#"
                  date="28 Feb, 2025"
                />
              </li>
              <li>
                <RelatedPost
                  title="Ananta Aspen Centre – Aspen Italy"
                  image="https://anantaaspencentre.in/wp-content/uploads/2025/01/Italy-header.jpg"
                  slug="#"
                  date="18 Feb, 2025"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  );
};

export default BlogSidebarPage;
