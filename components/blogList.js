
import Link from 'next/link';
import ReactMarkdown from 'react-markdown'

export default function BlogList({allBlogs}){

    function truncateSummary(content) {
      return content.slice(0, 200).trimEnd()
    }
  
    function reformatDate(fullDate) {
      const date = new Date(fullDate)
      
      let tahun = date.getFullYear();
      let bulan = date.getMonth();
      let tanggal = date.getDate();
  
      switch(bulan) {
        case 0: bulan = "Jan"; break;
        case 1: bulan = "Feb"; break;
        case 2: bulan = "Mar"; break;
        case 3: bulan = "Apr"; break;
        case 4: bulan = "Mei"; break;
        case 5: bulan = "Jun"; break;
        case 6: bulan = "Jul"; break;
        case 7: bulan = "Agt"; break;
        case 8: bulan = "Sept"; break;
        case 9: bulan = "Okt"; break;
        case 10: bulan = "Nov"; break;
        case 11: bulan = "Des"; break;
      }
  
      const date_indo = bulan + " " + tanggal + ", " + tahun;
      
      return date_indo
      
    }

    const image_src = "/assets/uploads";

    return(
        <div>
            <div class="grid grid-cols-1 my-10">
                  { allBlogs.map((blog, index) => (
                    
                    <div class="col-span-1 lg:col-span-1 mb-3 mr-5 w-full md:w-auto" key={index}>
                      <div class="bg-green-400 hover:bg-green-300 cursor-pointer border px-3 py-5 rounded-lg lg:w-full">
                        <Link key={blog.slug} href={{ pathname: `/blog/${blog.slug}` }}>
                          <div class="px-3 py-1 flex justify-between">
                            {/* <img src={image_src + blog.frontmatter.image} alt={blog.frontmatter.image}
                              class="inline bg-cover bg-center bg-gray-300 h-20 rounded-xl object-cover">
                            </img> */}
                            <div class="flex-initial pr-5">
                              <p class="text-lg md:text-xl font-semibold tracking-wide text-white">
                                {blog.frontmatter.title}
                              </p>
                              <p class="text-md font-normal tracking-wide text-white my-1">{reformatDate(blog.frontmatter.date)}</p>
                            </div>
                            <div class="flex-initial">
                              <p class="w-max h-auto bg-green-700 hover:bg-green-500 px-5 py-3 rounded-full text-white">Detail Blog</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>

                  ))}
              </div>
        </div>
    )
}