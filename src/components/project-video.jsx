import Image from "next/image";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
export default function ({ data }) {
  return (
    <section className="py-12 container flex flex-col items-center mx-auto px-4">
      <h2 className="text-3xl py-4 text-center">Video</h2>
      <div className="p-4 w-full flex justify-center">
        {data.video && (
          <div
            className="w-2/3"
            dangerouslySetInnerHTML={{ __html: data.video }}
          ></div>
        )}
      </div>
      {/* {data.extra && (
        <div
          className={`${
            data.video && data.extra ? "" : "lg:col-span-4 lg:col-start-2"
          } p-4 flex flex-col gap-4 items-center justify-center`}
        >
          <span className={`${roboto.className} uppercase tracking-[5px]`}>
            #{data.extra_small_title}
          </span>
          <h3
            className={`${roboto.className} text-[24px] lg:text-[40px] font-extrabold uppercase`}
          >
            {data.extra_title1}{" "}
            <span className="text-primary">{data.extra_title2}</span>
          </h3>
          <div className="flex flex-col gap-4">
            {data.extra.map((e) => (
              <p className="text-md flex gap-2 items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
                {e}
              </p>
            ))}
          </div>
        </div>
      )} */}
    </section>
  );
}
