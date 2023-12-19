import DesktopBillboard from "@/components/Billboard/DesktopBillboard";
import MobileBillboard from "@/components/Billboard/MobileBillboard";

export const metadata = {
  title: "Services",
  description:
    "Bonema Engineering offers a comprehensive range of renewable energy solutions to industrial, commercial, and residential clients.",
  keywords: [
    "Solar, Solar Solutions, Inverter, Inverters, Utilities, Utilities Management",
  ],
  authors: "Tsotetsi Mosala",
};

const page = () => {
  return (
    <>
      <DesktopBillboard
        className="services desktop-billboard billboard"
        heading="Services and Solutions"
        text="Bonema Engineering offers a comprehensive range of renewable energy solutions to industrial, commercial, and residential clients. The company’s diverse portfolio includes solar power, inverters, windmills, and hydropower systems. Bonema Engineering specializes in:"
      />
      <MobileBillboard
        className="services mobile-billboard billboard"
        heading="Services and Solutions"
        text="Bonema Engineering offers a comprehensive range of renewable energy solutions to industrial, commercial, and residential clients. The company’s diverse portfolio includes 
        solar power, inverters, windmills, and hydropower systems. Bonema Engineering specializes in:"
      />

      <section className="services-page services">
        <div className="section-cards">
          <Card
            heading="Solar Power Solutions"
            icon="/icon/solar-icon.svg"
            text="Embrace the power of the sun with our customized solar solutions that cater to residential, commercial, and industrial needs."
            link="/services/solar"
          />

          <Card
            heading="Wind Energy Systems"
            icon="/icon/turbine-icon.svg"
            text="Tap into the wind's potential to generate clean and reliable energy, contributing to a cleaner and more sustainable future."
            link="/services/wind"
          />

          <Card
            heading="Energy Storage"
            icon="/icon/battery-icon.svg"
            text="Store excess energy efficiently and intelligently, ensuring a seamless power supply even during peak demand periods."
            link="/services/storage"
          />

          <Card
            heading="Hydro Energy Systems"
            icon="/icon/hydro-icon.svg"
            text="Store excess energy efficiently and intelligently, ensuring a seamless power supply even during peak demand periods."
            link="/services/hydro"
          />

          <Card
            heading="Wire-Mesh Services"
            icon="/icon/mesh-icon.svg"
            text="We are Your Trusted Partner in Meshing Success. Explore Our Wire Mesh Solutions Today!"
            link="/services/wiremesh"
          />

          <Card
            heading="Utilities Management"
            icon="/icon/utilities-icon.svg"
            text="We are Your Trusted Partner in Meshing Success. Explore Our Wire Mesh Solutions Today!"
            link="/services/utilities"
          />
        </div>
      </section>
    </>
  );
};

export default page;

const Card = ({ icon, heading, text, link }) => {
  return (
    <>
      <div className="card">
        <div className="card-heading">
          <h4 className="card__title">
            <span>
              <img src={icon} alt="" />
            </span>
            {heading}
          </h4>
        </div>
        <p className="card__text">{text}</p>
        <a href={link} className="button card__text">
          Visit page
        </a>
      </div>
    </>
  );
};
