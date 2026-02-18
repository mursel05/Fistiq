import { Metadata as MetadataType } from "@/models/metadata";
import { Props } from "@/models/props";
import ResetPassword from "@/ui/ResetPassword";
import type { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const data: MetadataType = {
    en: {
      title: "Reset Password",
      description: "Reset your Fistiq password.",
    },
    ru: {
      title: "Сбросить пароль",
      description: "Сбросьте пароль своей учетной записи Fistiq.",
    },
    az: {
      title: "Parolu sıfırlayın",
      description: "Fistiq hesabınızın parolunu sıfırlayın.",
    },
  };
  return {
    title: data[lang].title,
    description: data[lang].description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/${lang}/reset-password`,
    },
    openGraph: {
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/${lang}/reset-password`,
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
  return <ResetPassword />;
}
