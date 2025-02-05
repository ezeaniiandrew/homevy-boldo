import Image from "next/image";

export default function Blog() {
  const blogPosts = [
    {
      title: "Pitch termsheet backing validation focus release.",
      image: "/blog-image-1.png",
      author: {
        name: "Chandler Bing",
        avatar: "/author-dp-4.png",
      },
      date: "November 22, 2021",
      tag: "Category",
    },
    {
      title:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      image: "/blog-image-2.png",
      author: {
        name: "Rachel Green",
        avatar: "/author-dp-5.png",
      },
      date: "November 22, 2021",
      tag: "Category",
    },
    {
      title:
        "Beta prototype sales iPad gen-z marketing network effects value proposition",
      image: "/blog-image-3.png",
      author: {
        name: "Monica Geller",
        avatar: "/author-dp-6.png",
      },
      date: "November 22, 2021",
      tag: "Category",
    },
  ];

  return (
    <section className="col-span-full px-[6.25rem] text-center mb-[124px]">
      <h2 className="text-gray text-xl leading-[32px] text-center capitalize">
        our blog
      </h2>
      <p className="text-black text-5xl leading-[72px] font-manrope text-center max-w-[842px] mx-auto">
        Value proposition accelerator product management venture
      </p>
      <div className="mt-[79px] mb-[84px] grid grid-cols-[repeat(3,_300px)] gap-[50px] justify-around text-left">
        {blogPosts.map((post) => (
          <div key={post.title} className="w-[300px] grid grid-cols-subgrid">
            <Image src={post.image} height={209} width={300} alt="" />
            <div className="flex gap-3 mt-6 mb-3">
              <p className="text-dark-blue font-bold leading-[28px]">
                {post.tag}
              </p>
              <p className="text-gray leading-[28px]">{post.date}</p>
            </div>
            <h3 className="text-black text-xl leading-[32px]">{post.title}</h3>
            <div className="mt-5 flex items-center gap-3">
              <Image src={post.author.avatar} height={32} width={32} alt="" />
              <p className="text-black leading-[28px]">{post.author.name}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="rounded-[56px] py-4 px-14 border-2 border-dark-blue font-bold text-xl text-dark-blue"
      >
        Load more
      </button>
    </section>
  );
}
