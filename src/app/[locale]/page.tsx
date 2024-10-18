/* eslint-disable react/jsx-no-undef */
import Hero from "@/components/Sections/Hero";
import PakegeOne from "@/components/Sections/Pakeges/PakegeOne";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "ELAF",
  description: "",
  icons: {
    icon: "/icons/Elaf-logo.png",
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
