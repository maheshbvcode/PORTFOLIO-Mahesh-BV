import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1 from '../assets/project-1.jpeg'
import project2 from '../assets/project-2.jpeg'
import project3 from '../assets/project-3.jpeg'
import project4 from '../assets/project-4.jpeg'
import project5 from '../assets/project-5.jpeg'
import project6 from '../assets/project-6.jpeg'
import project7 from '../assets/project-7.jpeg'
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
  
  // Create an object to map the project title to the imported image file
  const projectImages = {
    'pokedex': project1,
    'game zone': project2,
    'cryptoverse': project3,
    'simulation of bubble sort and insertion sort': project4,
    'college event': project5,
    'instaclone': project6,
    'banking system': project7,
  };
  
  const Project = ({ title,desc }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
      bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();
  
    // Get the image file based on the project title
    const projectImage = projectImages[title.toLowerCase()];
  
    return (
      <motion.div variants={projectVariant} className="relative">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">
            {desc}
          </p>
        </div>
        {/* Use the imported image file */}
        <img src={projectImage} alt={projectTitle} className="p-2" style={{height: "300px", width: "400px"}}/>
      </motion.div>
    );
  };
const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
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
        "Discover my collection of innovative and visually stunning projects.
         From responsive web designs to Machine-Learning,
      Explore my portfolio and see how I can bring value to you're table."
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
              max-w-[405px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Pokedex" desc="User-friendly interface" />
          <Project title="Game zone" desc="Ecommerce Website" />

          {/* ROW 2 */}
          <Project title="Cryptoverse" desc="Cryptocurrencies & Latest News"/>
          <Project title="Simulation of Bubble sort and Insertion sort" desc=""/>
          <Project title="College Event" desc="College Project"/>

          {/* ROW 3 */}
          <Project title="Instaclone"  desc="This MERN stack application"/>
          <Project title="Banking System" desc="Technical task at The Sparks Foundation" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
