import Image from "next/image";

export default function Page() {
  return (
    <section className="">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center my-10">
          <div className="my-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 mr-2">Hey, I'm Kris</h1>
            <h2 className="text-xl  mr-10">
              <span className="font-bold">Global Operations Engineer</span><br/><span className="text-red-600 dark:text-red-500">@</span> The Coca-Cola Company<br/>
              {/* <span className="text-sm">...expanding my skills in DevOps and cloud technologies.</span> */}
            </h2>
          </div>
          {/* <Image
            src="/profile.jpg"
            alt="logo"
            width={150}
            height={150}
            priority
            className="rounded-full grayscale"
          /> */}
        </div>
    </section>
  );
}
