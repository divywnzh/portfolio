import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, text, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-95 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <a href={link} className="mt-7">
          {text}
        </a>
      </div>
      <img src={`assets/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48 opacity-70">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Here are my projects
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Currently experimenting with UI and Frontend
          </div>
          <Project title="Will Hero" text="A 2D platformer game. The process included creating a UML and then implementing the classes and functionality in java and JavaFX" 
          link="https://github.com/divywnzh/WillHero" />
          <Project title="Portfolio Website" text="Responsive react portfolio website created using React, Tailwind CSS, Framer Motion and React Hook Form"
          link="https://github.com/divywnzh/portfolio" />

          {/* ROW 2 */}
          <Project title="Online Store" text="Designed the database schema, Implemented the database in MySQL, and creating an interface for user and seller."
          link="https://github.com/divywnzh/Online-Retail-Store-System"/>
          <Project title="Discord Bot" text="A discord bot that makes use of various APIs to come up with fun responses"
          link="https://github.com/divywnzh/ourbot-discordbot"/>

          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Proficient with Backend!
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;