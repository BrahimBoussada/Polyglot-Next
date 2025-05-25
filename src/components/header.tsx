"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getPathname, Link, usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "./ui/button";
import { LanguagesIcon } from "lucide-react";

export default function Header() {
  const navigation = ["roles", "contact", "download"];
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [selectedLocale, setSelectedLocale] = useState(locale);

  const handleSwitch = (newLocale: string) => {
    setSelectedLocale(newLocale);
    router.push(pathname, { locale: newLocale });
  };
  return (
    <header className="fixed top-4 inset-x-4 mx-auto xl:w-7xl flex items-center justify-between py-4 px-8 rounded-xl border bg-white shadow-xs">
      <Link href="/" className="font-bold text-2xl">
        Loam
      </Link>
      <nav className="flex gap-6 items-center" aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link
            key={item}
            href={t(`Navigation.${item}.href`)}
            className="transition-all duration-300 hover:text-muted-foreground"
          >
            {t(`Navigation.${item}.title`)}
          </Link>
        ))}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className=" cursor-pointer" variant="outline" size={"icon"}>
              <LanguagesIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44 ">
            <DropdownMenuLabel>Languges</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={selectedLocale}
              onValueChange={handleSwitch}
            >
              <DropdownMenuRadioItem value="ar">العربية</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="fr">Français</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
}
