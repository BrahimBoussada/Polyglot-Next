"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { SiInstagram } from "@icons-pack/react-simple-icons";
import { SiTiktok } from "@icons-pack/react-simple-icons";
import { SiX } from "@icons-pack/react-simple-icons";
import { SiGithub } from "@icons-pack/react-simple-icons";

import Image from "next/image";
import { clsx } from "clsx";
import { useState } from "react";

export default function Home() {
  const locale = useLocale();
  const t = useTranslations();
  const jobs = [
    "salesRepresentative",
    "metalGraphicsEngineer",
    "socialMediaManager",
    "aiArtist",
    "machineLearningEngineer",
  ];

  const navigation = ["roles", "contact", "download"];

  const social = [
    { name: "X", icon: SiX },
    { name: "Instagram", icon: SiInstagram },
    { name: "TikTok", icon: SiTiktok },
    { name: "GitHub", icon: SiGithub },
  ];

  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    setPressed(true);
    setTimeout(() => {
      setPressed(false);
    }, 300); // 0.3 second
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* MAIN */}
      <main className="flex flex-col items-center gap-36 text-center max-w-2xl  mx-auto my-36">
        <section>
          <h1 className="text-3xl font-medium mb-8">{t("Hero.title")}</h1>
          <p>{t("Hero.paragraph")}</p>
        </section>

        {/* Role */}
        <section className="w-full" id="roles">
          <h2 className="text-3xl font-medium mb-8">{t("Table.title")}</h2>

          <div className=" border-t ">
            {jobs.map((job) => (
              <div key={job} className="flex justify-between py-4 border-b">
                <span>{t(`Table.${job}.title`)}</span>
                <span>{t(`Table.${job}.location`)}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}

        <section id="contact">
          <h2 className="text-3xl font-medium mb-8">{t("Contact.title")}</h2>
          <div>
            <p>
              {t("Contact.paragraph")}{" "}
              <Link href={`mailto:${t("Contact.email")}`}>
                {t("Contact.email")}
              </Link>
            </p>
          </div>
        </section>
      </main>

      {/* Download */}

      <footer id="download">
        <div className="relative w-full h-[500px] md:h-[720px] overflow-hidden text-white max-w-6xl mx-auto">
          {/* Background Image */}
          <Image
            className="object-cover rounded-xl "
            src="/bg-footer.png"
            quality={99}
            alt=""
            fill
            priority
          />

          {/* Centered Text and Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t("Download.title")}
            </h1>
            <Button
              size={"lg"}
              onClick={handleClick}
              className={`px-4 py-2 rounded border transition duration-300 text-primary 
                ${pressed ? "bg-accent/80 scale-95" : "bg-accent"}
                hover:bg-accent/70 active:scale-95`}
            >
              {t("Download.ctl")}
            </Button>
          </div>

          {/* Footer */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-sm text-white">
            {/* Left side: Logo */}
            <div className="font-bold cursor-not-allowed">Loam</div>

            {/* Right side: Social Icons */}
            <div className="flex space-x-4">
              {social.map((item) => (
                <Link
                  key={item.name}
                  className=" hover:text-muted-foreground transition-all duration-300"
                  href={""}
                >
                  <item.icon size={16} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-xs py-4">
          ©{" "}
          {new Date()
            .getFullYear()
            .toLocaleString(locale === "ar" ? "ar-LB" : "en", {
              useGrouping: false,
            })}{" "}
          {t("Footer.copyright")}
        </div>
      </footer>
    </div>
  );
}
