import React from "react";
import Layout from "../layout/layout.jsx";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import About from "../components/About";
import FeaturedDestination from "../components/FeaturedDestination.jsx";
export default function Home() {
  return (
    <Layout>
      <Hero />
      <SearchBar />
      <FeaturedDestination/>
      <About />
    </Layout>
  );
}