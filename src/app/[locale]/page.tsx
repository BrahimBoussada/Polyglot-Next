import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const jobListings = [
  { title: "Sales Representative", location: "Remote" },
  { title: "Metal Graphics Engineer", location: "Remote / NYC" },
  { title: "Social Media Manager + Artist in Residence", location: "Remote" },
  { title: "AI Artist / Hacker", location: "Remote" },
  { title: "Machine Learning Engineer", location: "New York" },
];

export default function Home() {
  const t = useTranslations();
  return (
    <main className="flex flex-col items-center gap-36 text-center max-w-3xl px-16 mx-auto my-36">
      <section>
        <h1 className="text-3xl font-medium mb-8">{t("Hero.title")}</h1>
        <p className="">
          Wand is a tool designed to help everyone bring their ideas to life-and
          in the process, make us all a bit more divine. We feel that in order
          to truly represent and explore our ideas accurately with Al, we need
          tools that give us greater personalization and hands- on, visual
          control over the generative models we use. We're building a
          collaborative, native tool with these principles in mind-so that we
          can help artists and design teams explore and spark new ideas. We're
          an NYC based team of creatives and engineers passionate about artistic
          expression and generative Al. We recently raised a seed round led by
          OSV (partnering with Jim O'Shaughnessy, the executive chairman of
          Stability.ai) along with a number of other great firms, and we're
          looking to expand the team!
        </p>
      </section>

      {/* TABLE */}
      <section className="w-full">
        <h1 className="text-3xl font-medium mb-8">Currently hiring</h1>

        <div className=" border-t ">
          {jobListings.map((job) => (
            <div key={job.title} className="flex justify-between py-4 border-b">
              <span>{job.title}</span>
              <span>{job.location}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h1 className="text-3xl font-medium mb-8">
          Don't see a role that fits you?
        </h1>
        <p className="">
          If you're passionate about what we're building & think you have
          something to contribute to Wand, but your skills don't exactly fit
          into any of the above roles, we still want to hear from you! Tell us
          how you can help at info@wand.tech
        </p>
      </section>
    </main>
  );
}
