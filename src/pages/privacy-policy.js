import { Roboto } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/header";
import Footer from "@/components/footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function PrivacyPolicy() {
  return (
    <main className={roboto.className}>
      <Head>
        <title>Privacy Policy - Legendary Builders</title>
      </Head>
      <Header />

      <section className="w-full pb-4 pt-20 relative text-custom">
        <Image
          src="/images/platina-banner.jpg"
          fill
          className="object-cover -z-0 brightness-50"
          alt="Privacy Policy Banner"
        />
        <div className="container mx-auto px-4 relative flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Privacy Policy</h1>
          <ul className="flex gap-4">
            <li><Link href="/">Home</Link></li>
            <li>&gt;&gt;</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </section>

      <section className="w-full py-12 bg-gray-100 text-custom3">
        <div className="container max-w-4xl mx-auto px-4 space-y-6 text-base leading-7">
          <p>
            Thank you for visiting Legendary Builder. We want you to know that your privacy is important to us. Our customers are at the heart of everything we do, and we strive to ensure your experience with Legendary Builders is one that you will want to repeat and share with your friends. Part of our commitment to you is to respect and protect the privacy of the personal information you provide to us.
          </p>

          <p>
            This document is designed to apprise you about the kind of information we collect, why we collect such information, and how we use the information we collect. This Privacy Policy is incorporated into our Terms of Service. We will share your personal information with third parties only in the ways that are described in this privacy statement. We do not sell your personal information to third parties.
          </p>

          <p>
            When you voluntarily send us electronic mail / fillup the form, we will keep a record of this information so that we can respond to you. We only collect information from you when you register on our site or fill out a form. Also, when filling out a form on our site, you may be asked to enter your: name, e-mail address or phone number. You may, however, visit our site anonymously. In case you have submitted your personal information and contact details, we reserve the rights to Call, SMS, Email or WhatsApp about our products and offers, even if your number has DND activated on it.
          </p>

          <p>
            When you submit your personal information to us, you are giving us your consent to the collection, use, and disclosure of your information as set forth in this Privacy Policy. We are always available to discuss your questions or concerns regarding this Privacy Policy and our privacy practices. If you would like to speak to a customer service representative, please contact us via telephone at  044 4600 2704 or email at info@legendary.in
          </p>

          <p>
            Your use of our Website constitutes your consent to this Privacy Policy, including any changes or updates. We may make additional features, functionality, offers, activities, or events (“opportunities”) available to you subject to additional or different privacy rules that we disclose in connection with those opportunities.
          </p>

          <h2 className="text-xl font-semibold">Collection and Use of Information</h2>

          <h3 className="font-semibold">General</h3>
          <p>
            In general, you can browse our Website without telling us who you are or revealing any personal information about yourself. At various times, you may decide to provide us with your personal information. You should know that we receive and may store all personal information (whether written or oral) that you provide to us through whatever means you provide such information. Personal information means any information that may be used to identify an individual, including, but not limited to, a first and last name, address, email address, phone number, etc.
          </p>

          <p>
            In addition to your contact information, we may collect information about your purchases, billing address, shipping address, gender, occupation, marital status, anniversary, interests, phone number, and credit card information.
          </p>

          <h3 className="font-semibold">Use of Your Personal Information</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Facilitate your purchases and provide the services you request</li>
            <li>Confirm and track your order</li>
            <li>Respond to your inquiries and requests</li>
            <li>Review your personal information for errors and accuracy</li>
            <li>Prevent and detect fraud or abuse</li>
            <li>Improve our Website, services, and customer experience</li>
            <li>Identify your product and service preferences</li>
            <li>Contact you with information we believe may interest you</li>
          </ul>

          <h3 className="font-semibold">Personal Information That We May Share with Others</h3>
          <p>In certain circumstances, we may share your personal information with trusted partners.</p>

          <h4 className="font-semibold">Service Providers</h4>
          <p>
            We use trusted third-party service providers to perform services including shipping, payment processing, data storage, web hosting, marketing, and more. These providers receive only the personal information needed to perform their services.
          </p>

          <h4 className="font-semibold">Compliance with Law and Fraud Protection</h4>
          <p>
            We may disclose information if necessary to comply with the law, prevent fraud or abuse, and protect the rights and safety of our company and customers.
          </p>

          <h4 className="font-semibold">Business Transfer</h4>
          <p>
            Your personal information may be disclosed in the event of a merger, acquisition, bankruptcy, or asset sale.
          </p>

          <h4 className="font-semibold">Anonymous Information</h4>
          <p>
            We may create anonymous records for internal analysis and enhancement of services.
          </p>

          <h4 className="font-semibold">Comments</h4>
          <p>
            By submitting feedback or testimonials, you grant us the right to use them for marketing purposes.
          </p>

          <h3 className="font-semibold">Other Uses of Your Information</h3>

          <h4 className="font-semibold">IP Address</h4>
          <p>
            We collect your IP address to diagnose server issues, administer the site, analyze trends, track traffic, and detect fraud.
          </p>

          <h4 className="font-semibold">Cookies and Web Beacons</h4>
          <p>
            We use cookies and tracking technologies to enhance your experience. These collect data such as pages visited, time spent, and preferences. You can opt out via your browser or visit <a href="http://www.networkadvertising.org/choices/" className="text-blue-600 underline" target="_blank">this page</a> to opt out of AdRoll retargeting.
          </p>

          <h3 className="font-semibold">Third Party Personal Information</h3>
          <p>
            If you refer a friend, we collect their email for the purpose of sending an invitation and tracking success.
          </p>

          <h3 className="font-semibold">Customer Stories</h3>
          <p>
            Testimonials may include names with consent. Contact us to request removal.
          </p>

          <h3 className="font-semibold">Public Forums</h3>
          <p>
            Our blogs or forums are public. Avoid posting personal info. Contact us to request removal, subject to feasibility.
          </p>

          <h3 className="font-semibold">Children under 13</h3>
          <p>
            We do not knowingly collect information from children under 13. If discovered, such data will be deleted.
          </p>

          <h3 className="font-semibold">Links</h3>
          <p>
            Our website may link to third-party websites not governed by this policy. Review their policies separately.
          </p>

          <h3 className="font-semibold">Security</h3>
          <p>
            We use SSL encryption and security measures to protect your data, but cannot guarantee 100% security over the internet.
          </p>

          <h3 className="font-semibold">Accessing and Updating Your Information</h3>
          <p>
            You may request to access, correct, or delete your personal data by contacting info@legendary.in. We retain data as long as your account is active or legally required.
          </p>

          <h3 className="font-semibold">Choice/Opt-Out</h3>
          <p>
            To unsubscribe from marketing emails, click "unsubscribe" in emails. Mandatory service-related messages may still be sent.
          </p>

          

          <h3 className="font-semibold">Pricing and Information</h3>
          <p>
            Pricing and project details are subject to change. Legendary Builders is not liable for outdated information.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
