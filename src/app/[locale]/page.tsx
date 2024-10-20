/* eslint-disable react/jsx-no-undef */
import Hero from "@/components/Sections/Hero";
import PakegeOne from "@/components/Sections/Pakeges/PakegeOne";
import { Metadata } from "next";

// import icon from "../../../public/icons/"

export const metadata: Metadata = {
  title: "ELAF",
  description: "Description of your site",
  icons: {
    icon: [
      { url: "/icons/Elaf-black.png", sizes: "32x32" },
      { url: "/icons/Elaf-black-16x16.png", sizes: "16x16" },
    ],
  },
  // other metadata
};

export default function Home() {
  
  return (
    <>
      <Hero />
      <PakegeOne />
      
    </>
  );
}
