import { Col, Modal, Button } from "react-bootstrap";
import { useState } from "react";
import petimgModal from "../images/pet-schema.png";
import enjoypimgModal from "../imgaes/enjoyp-mockup.png";
import palestinedrinksmodal from "../images/palestinedrinks.png";
import rapedidomodal from "../images/rapedido-mockup.png";
import Bildemomodal from "../images/Bildemo.png";
import portfoliowebmodul from "../images/portfolioweb.png"
import projImg3Modal from "../assets/img/project-img3.png";
import '../App.css'; 

const projectDetails = {
  "SQL Database": {
    modalImgUrl: petimgModal,
    detailedDescription: (
      <>
        <p>I teamed up with P.E.T., an exciting startup gearing up for a launch, to build a solid database for their innovative platform. This platform blends a pet shop with social networking, promising an awesome user experience.</p>
        <p>Key Features</p>
        <ul>
          <li>Schema Disign: Robust schema to accommodate diverse pet data.</li>
          <li>SQL Procedures: Custom SQL procedures for data manipulation.</li>
          <li>Optimization: Indexing and performance optimization.</li>
          </ul>

        <p>Deliverables:</p>
        <ul>
          <li>Simple Setup: Provided clear instructions and ready-to-use SQL scripts for easy installation.</li>
          <li>Visual Aid: Included an easy-to-understand diagram showing the database structure.</li>
          <li>Seamless Integration: Ensured the database fits seamlessly with the platform's goals and future plans.</li>
        </ul>
        <p><a href="https://github.com/ilyasbrahim/P.E.T.git" target="_blank">GitHub Repository</a></p>
        
      </>
    ),
  },
  "EnjoyP.com": {
    modalImgUrl: enjoypimgModal,
    detailedDescription: (
      <>
        <p>I took the lead in setting up and launching EnjoyP's website, ensuring a smooth experience for users. From installing Ubuntu 22.04 on a virtual machine to getting Nginx, PHP, Elasticsearch, and MySQL up and running, I handled all the technical details to bring the website to life.</p>
        <p>Key Achievements:</p>
        <ul>
          <li>Server Setup: Configured Ubuntu and Nginx for hosting, along with PHP for seamless operation.</li>
          <li>Database Management: Installed and secured MySQL to handle all data needs effectively.</li>
          <li>Website Hosting: Established a dedicated space on the server for EnjoyP using Nginx.</li>
          <li>Security Measures: Implemented SSL encryption to safeguard user data.</li>
          <li>CI/CD: Utilized Azure DevOps to automate building, testing, and deploying processes.</li>
          <li>Collaboration & Adaptability: Worked closely with developers, adapting configurations based on evolving needs.</li>
          <li>Responsive Support: Provided ongoing assistance, troubleshooting issues promptly for a smooth development process.</li>
        </ul>
      <p>Through effective collaboration and responsive support, I ensured EnjoyP's website was configured for success. By adapting configurations and providing ongoing assistance, I played a key role in delivering a seamless user experience and setting the foundation for future growth.</p>
      <p><a href="https://enjoyp.com" target="_blank">EnjoyP Website Link</a></p>
      </>
    ),
  },
  "palestinedrinks.com": {
    modalImgUrl: palestinedrinksmodal,
    detailedDescription: (
      <>
        <p>
        As the DevOps Engineer for Palestinedrinks.com, I led the improvement of their web infrastructure, making sure everything runs smoothly and securely. From setting up servers with Ubuntu, Nginx, PHP, Elasticsearch, and MySQL to fine-tuning hosting with Nginx and SSL encryption, each step was aimed at achieving top-notch performance.
        </p>
        <p> As the DevOps Engineer for Palestinedrinks.com, I led the improvement of their web infrastructure, making sure everything runs smoothly and securely. From setting up servers with Ubuntu, Nginx, PHP, Elasticsearch, and MySQL to fine-tuning hosting with Nginx and SSL encryption, each step was aimed at achieving top-notch performance.
        </p>
        <p>Key Achievements:</p>
        <div style={{ marginBottom: "8px" }}>
          <p>🔧 DevOps Engineer: Led the setup and optimization of Palestinedrinks.com's web setup, ensuring smooth operations and good security.</p>
          <p>🖥️ VM Maestro: Installed and configured Ubuntu, Nginx, PHP, Elasticsearch, and MySQL, tailoring each component to fit the website's unique needs.</p>
          <p>🌐 Hosting Guru: Built a strong hosting setup with Nginx, virtual hosts, and SSL encryption, keeping user data safe and trust high.</p>
          <p>💾 Database Whisperer: Installed and Configured MySQL, guaranteeing efficient data handling and implementing crucial security measures.</p>
          <p>🚀 CI/CD Aficionado: Created and managed development workflows with Azure DevOps, automating building, testing, and deployment processes for consistency.</p>
          <p>🐳 Docker & Kubernetes Maven: Implemented Docker and Kubernetes to maximize scalability and optimize resource usage, ensuring Palestinedrinks.com operates at peak performance.</p>
          <p>🌀 Agile Collaborator: Adapted to changes quickly, working closely with developers to meet project needs.</p>
          <p>🔗 Git Maestro: Maintained code integrity with seamless Git collaboration, ensuring smooth version control throughout the development.</p>
          <p>🛠️ Support Superhero: Provided responsive support to the development team, rapidly addressing issues and optimizing performance for user satisfaction.</p>
          <p><a href="https://palestinedrinks.com" target="_blank">PalestineDrinks Website Link</a></p>
        </div>
      </>
    ),
  },
  "Rapedido": {
    modalImgUrl: rapedidomodal,
    detailedDescription: (
      <>
        <p>Rapedido is a handy suite of business apps that helps companies run smoothly. It offers features such as mobile ordering, point of sale (POS), customer relationship management (CRM), delivery logistics, and more. With Rapedido, businesses can efficiently manage their operations, enhance customer satisfaction, and drive growth.</p>
        <p>As the DevOps Engineer behind Rapedido, I led the charge in bringing the platform to life. My focus was setting up an agile and efficient CI/CD pipelines using Azure DevOps. With automated processes and Azure App Services, I ensured rapid deployment of features like Mobile Order, POS, CRM, and Delivery Systems.</p>
        <p>Collaborating with the development team in an Agile environment, we kept the momentum going, ensuring our efforts were always aligned with business goals. From sprint planning to daily stand-ups, we worked together to overcome challenges and deliver results.</p>
        <p>But that's not all. I also fine-tuned the app service environment, optimizing performance and security to keep Rapedido running at its best. With proactive monitoring and a commitment to excellence, we provided businesses with a platform that's reliable, efficient, and ready to meet their needs.</p>
        <p><a href="https://rapedido.es" target="_blank">Rapedido´s Website Link</a></p>
      </>
    ),
  },
  "Bildemo": {
    modalImgUrl: Bildemomodal,
    detailedDescription: (
      <>
        <p>I created a Python web scraping tool tailor-made for car dealerships and businesses. It's designed to gather car data from biluppgifter.se quickly and effectively. With this tool, dealerships can input their preferences and extract all the relevant car info, neatly organized into an Excel file. The program helps buisnesses to potentially find and buy specific cars that is not out in the market.</p>
        <p>Key Features:</p>
        <ul>
          <li>Customizable Input: Accepts user input for filtering cars based on specific criteria.</li>
          <li>Data Extraction: Utilizes BeautifulSoup for parsing the website content to extract relevant car information.</li>
          <li>Data Export: Exports car data to an Excel file using pandas and openpyxl, providing following details:.</li>
          <li>Car model</li>
          <li>Year</li>
          <li>Mileage</li>
          <li>M.O.T date</li>
          <li>Status (if the car is in traffic)</li>
          <li>Link to detailed information (including regnr)</li>
        </ul>
        <p>Tech Stack:</p>
        <ul>
          <li>Languages/Frameworks: Python, BeautifulSoup, pandas, tkinter</li>
          <li>Tools/Libraries: requests, openpyxl</li>
        </ul>
        <p><a href="https://github.com/ilyasbrahim/Bildemo.git" target="_blank">Github Link</a></p>
      </>
    ),
  },
  "Portfolio Website": {
    modalImgUrl: portfoliowebmodul,
    detailedDescription: (
      <>
        <p>As the creator of this portfolio website, I started by customizing a React.js template to fit my style and ideas. The main attraction is the "first page" where I designed a cool CI/CD terminal animation from scratch, showing off my creativity and tech skills.</p>
        <p></p>
        <p>Then, I customized the rest of the website to include my projects, education, experience, and other info. I played around with layouts, added dynamic features, and made sure everything flowed well for the users.</p>
        <p></p>
        <p>Once I finished building it, I put the website up on GitHub Pages so anyone could check it out. This meant setting up the hosting and making sure it ran smoothly for everyone who visited.</p>
        <p></p>
        <p>To sum up, I came up with, built, and launched this portfolio website using a React.js template as my starting point. The special CI/CD terminal animation and all the content reflect who I am and what I can do, giving visitors a glimpse of my skills and personality.</p>
        <p></p>
        <p>Technologies Used:</p>
        <ul>
          <li>Front-end library: React</li>
          <li>CSS framework: React-bootstrap</li>
          <li>CSS animations library: Animate.css</li>
        </ul>
        <p><a href="https://github.com/ilyasbrahim/Portfolio-Devops.git" target="_blank">Github Link</a></p>
      </>
    ),
  },
};

export const ProjectCard = ({ title, description, imgUrl }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const projectData = projectDetails[title] || {};
  const modalImgUrl = projectData.modalImgUrl || imgUrl;
  const detailedDescription = projectData.detailedDescription || description;

  return (
    <>
      <Col size={12} sm={6} md={4} onClick={handleShow} style={{ cursor: "pointer" }}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="project preview" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName="custom-modal"
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="scrollable-modal-body">
          <img src={modalImgUrl} alt="project modal" className="img-fluid mb-3 rounded" />
          {detailedDescription}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};