"use client";

import { AnimatePresence, motion } from "framer-motion";
import Intro from "./(components)/intro";
import Ranked from "./(components)/ranked";
import { useState } from "react";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState("intro");

  return (
    <AnimatePresence mode="wait">
      {activeComponent === "intro" && (
        <Intro setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "ranked" && <Ranked />}
    </AnimatePresence>
  );
}
