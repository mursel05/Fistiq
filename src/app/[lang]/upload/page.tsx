import { Metadata as MetadataType } from "@/models/metadata";
import { Props } from "@/models/props";
import Upload from "@/ui/Upload";
import type { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const data: MetadataType = {
    en: {
      title: "Upload Video",
      description: "Upload your video to Fistiq.",
    },
    ru: {
      title: "Загрузить видео",
      description: "Загрузите свое видео на Fistiq.",
    },
    az: {
      title: "Video Yüklə",
      description: "Videonuzu Fistiq'a yükləyin.",
    },
  };
  return {
    title: data[lang].title,
    description: data[lang].description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/${lang}/upload`,
    },
    openGraph: {
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/${lang}/upload`,
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
  return <Upload />;
}
