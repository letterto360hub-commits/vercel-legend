import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "./enquiry-form";

export default function ({ isContactPage = false }) {
  return (
    <section className="w-full py-12 relative bg-gray-100">
      <Image
        src={"/images/platina-banner.jpg"}
        fill
        className="object-cover -z-0 brightness-75"
        alt="Legendary Contact Us"
      />
      <div className="relative container px-4 gap-4 mx-auto grid lg:grid-cols-3 text-gray-50 z-10">
        <div className="flex w-full justify-start lg:col-span-2">
          <h4 className="text-[30px] lg:text-[50px]">
            Discover a new <br /> way of living
          </h4>
        </div>

        <div className="form-container bg-white p-6 rounded-lg shadow-md text-gray-800 w-full">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Express your Interest
          </h2>
          <form
            action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DWd000007gXpx"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input type="hidden" name="oid" value="00DWd000007gXpx" />
            <input type="hidden" name="retURL" value="https://legendary.in/" />
            <input type="hidden" name="lead_source" value="Website" />

            <input
              id="last_name"
              name="last_name"
              type="text"
              placeholder="Your Name"
              maxLength={80}
              required
              className="px-4 py-2 border border-gray-300 rounded-md w-full"
            />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              maxLength={80}
              required
              className="px-4 py-2 border border-gray-300 rounded-md w-full"
            />
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your Phone"
              maxLength={40}
              className="px-4 py-2 border border-gray-300 rounded-md w-full"
            />
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <label htmlFor="consent" className="leading-snug">
                By submitting this form, I consent to receive communications via
                WhatsApp, SMS, email, phone calls, and other channels, even if
                my number is registered under DND/DNDC. I agree to the Legendary
                Builders
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  className="text-yellow-600 font-medium underline hover:text-yellow-700"
                >
                  Privacy Policy
                </Link>
                .
              </label>
            </div>
            <input
              type="submit"
              value="Submit"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 rounded-md cursor-pointer transition"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
