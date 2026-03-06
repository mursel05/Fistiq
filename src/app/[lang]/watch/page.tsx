import { Metadata as MetadataType } from "@/models/metadata";
import Watch from "@/ui/Watch";
import type { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const data: MetadataType = {
    en: {
      title: "Watch",
      description: "Watch and enjoy your favorite content.",
    },
    ru: {
      title: "Смотреть",
      description: "Смотрите и наслаждайтесь вашим любимым контентом.",
    },
    az: {
      title: "İzlə",
      description: "Sevdiyiniz məzmunu izləyin və zövq alın.",
    },
  };
  return {
    title: data[lang].title,
    description: data[lang].description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/${lang}/watch`,
    },
    openGraph: {
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/${lang}/watch`,
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

type Props = {
  params: Promise<{ id: string; lang: string }>;
};

export default async function Page(props: Props) {
  const { id } = await props.params;
  return <Watch id={id} />;
}
