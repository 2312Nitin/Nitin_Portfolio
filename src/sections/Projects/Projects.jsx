import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://dream-nest-frontend-g8lk.onrender.com/"
          h3="Dream-nest"
          p="Home-Rental"
        />
        <ProjectCard
          src={freshBurger}
          link="https://food-deliver-frontend.onrender.com/"
          h3="TasteDash"
          p="Food Delivery Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://react-tools.onrender.com/"
          h3="React Tools"
          p="One Stop Solution"
        />
        
      </div>
    </section>
  );
}

export default Projects;
