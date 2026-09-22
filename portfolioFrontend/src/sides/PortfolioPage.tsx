import ProjectCard from "../components/project.tsx"
import { projects, TypeOfProject } from "../data/projects.ts"
import "./PortfolioPage.css"

export function PortfolioPage() {
    const allProjectsSorted = projects.sort((n1, n2) => n1.getId() - n2.getId())

    const projectsIndieWorkData = allProjectsSorted.filter(project => project.getTypeOfProject() === TypeOfProject.Independent)
    const projectsSchoolWorkData = allProjectsSorted.filter(project => project.getTypeOfProject() === TypeOfProject.School)

      const projectIndieCards = projectsIndieWorkData.map(project => 
        <ProjectCard key={project.getId()} imgSrc={project.getImageUrl()} title={project.getTitle()} author={project.getAuthor()} description={project.getDescription()} url={project.getUrl()}/>
      );
      const projectSchoolCards = projectsSchoolWorkData.map(project =>
        <ProjectCard key={project.getId()} imgSrc={project.getImageUrl()} title={project.getTitle()} author={project.getAuthor()} description={project.getDescription()} url={project.getUrl()}/>
      );
    
    return(
        <div id="project-section">
          <div id="indie-projects-section">
            <h1>Independent Work</h1>
            <h2>With recent ones</h2>

            <div className="project-wrapper">
              {projectIndieCards}
            </div>
        </div>

        <div id="school-projects-section">
          <h1>School Projects</h1>
          <h2>With recent ones</h2>

          <div className="project-wrapper">
            {projectSchoolCards}
          </div>
        </div>
      </div>
    );
}