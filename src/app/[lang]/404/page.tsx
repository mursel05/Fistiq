import { Metadata as MetadataType } from "@/models/metadata";
import NotFound from "@/ui/NotFound";
import type { Metadata } from "next";
import { Props } from "@/models/props";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const data: MetadataType = {
    en: {
      title: "Page Not Found",
      description: "The page you are looking for does not exist.",
    },
    ru: {
      title: "Страница не найдена",
      description: "Страница, которую вы ищете, не существует.",
    },
    az: {
      title: "Səhifə tapılmadı",
      description: "Axtardığınız səhifə mövcud deyil.",
    },
  };
  return {
    title: data[lang].title,
    description: data[lang].description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/${lang}/404`,
    },
    openGraph: {
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/${lang}/404`,
      title: data[lang].title,
      description: data[lang].description,
      locale: `${lang}_${lang.toUpperCase()}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/jeff.png`,
          width: 1200,
          height: 630,
          alt: "Fistiq",
        },
        {
          url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/jeff-square.png`,
          width: 1200,
          height: 1200,
          alt: "Fistiq",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data[lang].title,
      description: data[lang].description,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/jeff.png`,
          width: 1200,
          height: 630,
          alt: "Fistiq",
        },
        {
          url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/images/jeff-square.png`,
          width: 1200,
          height: 1200,
          alt: "Fistiq",
        },
      ],
    },
  };
}

export default async function Page() {
  return <NotFound />;
}
