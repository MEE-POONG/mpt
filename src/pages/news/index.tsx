import TheLayOut from "@/components/TheLayout";
import NewsSlider from "@/container/news-slids";

export default function NewsPage() {
    return (
        <TheLayOut>
            <NewsSlider />
            <section className="container mx-auto py-16 px-5 font-font01">
                <div className="flex flex-col md:flex-row justify-center gap-5">
                    <div className="md:basis-1/2 shadow-md rounded-md overflow-hidden">
                    <img src="https://innotechtoday.com/wp-content/uploads/2023/05/brooke-cagle-g1Kr4Ozfoac-unsplash-1.jpg" alt="" />
                    <div className="p-5">
                        <p className="text-2xl text-blue-400 font-semibold">Tech News to Know This Week: May 23 – 29</p>
                        <p className="indent-8 mt-1 line-clamp-3 text-sm text-gray-800">Every day we wake up, drink some coffee, get ready for work and check on the latest tech. So here’s a handful of news stories from around the tech world condensed to fit into that first cup. These are things you need to know before you step foot out of your door (or in front of a webcam) and into the real world this morning.</p>
                    </div>
                    </div>
                    <div className="md:basis-1/4">02</div>
                    <div className="md:basis-1/4">03</div>
                </div>
            </section>
        </TheLayOut>
    )
}