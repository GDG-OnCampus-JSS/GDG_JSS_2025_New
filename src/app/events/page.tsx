"use client";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import InstagramEmbed from "@/components/ui/instagramEmbed";
import { instagramPosts } from "@/lib/instagram-posts";
import { motion, useReducedMotion } from "framer-motion";
import {
  subtleCardReveal,
  subtleCardTransition,
  subtleCardViewport,
} from "@/lib/animations";

function EventsPage() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Header />
      <div className="px-4 sm:px-8 lg:px-25 py-12 sm:py-16 lg:py-20 flex flex-col gap-16 lg:gap-20">
        <Hero
          title="Events We Host"
          desc="We organize impactful events across a wide range of technical topics—featuring hands-on workshops, learning sessions, and collaborative activities. We take pride in fostering an inclusive environment for everyone interested in tech."
          logo="/icons/logo.svg"
        />
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 items-stretch justify-items-center w-full">
          {instagramPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={subtleCardReveal}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={subtleCardViewport}
              transition={subtleCardTransition}
            >
              <InstagramEmbed url={post.url} />
            </motion.div>
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
}

export default EventsPage;
