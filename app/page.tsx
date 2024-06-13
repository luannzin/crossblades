"use client";

import { AnimatePresence, motion } from "framer-motion";
import PlayIcon from "./(icons)/Play";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (username.trim() === "") {
      setUsername("");
    }
  }, [username]);

  return (
    <AnimatePresence mode="wait">
      {activeTab === 0 && (
        <motion.main
          key={0}
          initial={{
            opacity: 0.5,
            scale: 1.25,
            filter: "blur(6px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          exit={{
            x: -125,
            opacity: 0,
            filter: "blur(6px)",
          }}
          transition={{
            type: "tween",
            duration: 0.4,
          }}
          className="w-screen h-screen flex items-center justify-center text-black"
        >
          <div className="flex flex-col gap-8 w-fit">
            <span className="text-6xl font-thin ">crossblades</span>
            <motion.button
              style={{
                filter: "drop-shadow(0px 4px 0px #040404);",
              }}
              whileTap={{
                scale: 0.9,
              }}
              transition={{
                type: "spring",
                mass: 0.01,
                stiffness: 200,
                damping: 3,
              }}
              onClick={() => setActiveTab(1)}
              className="w-full h-20 flex items-center justify-center rounded-2xl bg-zinc-300 border border-black stroke-black"
            >
              <PlayIcon className="w-6 h-6 " />
            </motion.button>
          </div>
        </motion.main>
      )}
      {activeTab === 1 && (
        <motion.main
          key={1}
          initial={{
            x: -125,
            opacity: 0,
            filter: "blur(6px)",
          }}
          animate={{
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          exit={{
            x: -100,
            opacity: 0,
          }}
          transition={{
            type: "tween",
            duration: 0.75,
          }}
          className="w-screen h-screen flex items-center justify-center text-black"
        >
          <div className="flex flex-col gap-8 items-start w-fit">
            <AnimatePresence>
              <motion.span
                key={"username"}
                transition={{
                  type: "tween",
                  duration: 0.2,
                }}
                className="text-6xl font-thin"
              >
                username
              </motion.span>
            </AnimatePresence>

            <div className="flex flex-col gap-4">
              <motion.input
                initial={{
                  padding: "0px",
                  width: "full",
                }}
                animate={{
                  padding: "0px 16px",
                  width: "600px",
                }}
                transition={{
                  type: "tween",
                  duration: 0.65,
                  delay: 0.4,
                  ease: "easeInOut",
                }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                className="border border-zinc-500 rounded-2xl w-full h-20 px-4 text-3xl"
              />

              <motion.button
                disabled={!username}
                initial={{
                  y: 80,
                  opacity: 0,
                  filter: "blur(6px)",
                }}
                animate={{
                  y: username ? 0 : 80,
                  opacity: username ? 1 : 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  type: "spring",
                  delay: 0.1,
                  mass: 0.25,
                  stiffness: 200,
                  damping: 20,
                }}
                onClick={() => setActiveTab(2)}
                className="py-3 rounded-lg bg-black text-zinc-200 w-full text-xl "
              >
                Confirmar
              </motion.button>
            </div>
          </div>
        </motion.main>
      )}
      {activeTab === 2 && (
        <motion.main
          key={2}
          initial={{
            opacity: 0.5,
            scale: 1.25,
            filter: "blur(6px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          exit={{
            x: -125,
            opacity: 0,
            filter: "blur(6px)",
          }}
          transition={{
            type: "tween",
            duration: 0.4,
          }}
          className="w-screen h-screen flex items-center justify-center text-black"
        >
          <div className="flex flex-col gap-8 w-fit">
            <span className="text-6xl font-thin ">bem vindo, {username}</span>
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
