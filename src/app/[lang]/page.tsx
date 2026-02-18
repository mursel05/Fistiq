import type { Metadata } from "next";
import Home from "@/ui/Home";
import { Metadata as MetadataType } from "@/models/metadata";
import { Props } from "@/models/props";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const data: MetadataType = {
    en: {
      title: "Fistiq",
      description:
        "Fistiq offers comprehensive English language programs, including General English, IELTS, TOEFL, SAT preparation, Kids English, Duolingo, and Math courses. Our expert instructors provide personalized support to help students achieve their academic and professional goals. Explore study abroad opportunities with Fistiq and take your learning experience to international destinations.",
    },
    ru: {
      title: "Fistiq",
      description:
        "Fistiq предлагает комплексные программы изучения английского языка, включая общий английский, подготовку к IELTS, TOEFL, SAT, курсы для детей и математики. Наши опытные преподаватели предоставляют персонализированную поддержку, чтобы помочь студентам достичь их академических и профессиональных целей. Исследуйте возможности учебы за границей с Fistiq и расширьте свои горизонты.",
    },
    az: {
      title: "Fistiq",
      description:
        "Fistiq, İngilis dili proqramları, o cümlədən Ümumi İngilis dili, IELTS, TOEFL, SAT hazırlığı, Uşaq İngilis dili, Duolingo və Riyaziyyat kursları təklif edir. Mütəxəssis müəllimlərimiz tələbələrin akademik və peşəkar hədəflərinə çatmalarına kömək etmək üçün fərdi dəstək göstərir. Fistiq ilə xaricdə təhsil imkanlarını araşdırın və öyrənmə təcrübənizi beynəlxalq istiqamətlərə genişləndirin.",
    },
  };

  return {
    title: {
      absolute: data[lang].title,
    },
    description: data[lang].description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/${lang}`,
    },
    openGraph: {
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/${lang}`,
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
  return <Home />;
}
