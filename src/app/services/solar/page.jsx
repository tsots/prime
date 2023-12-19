import DesktopBillboard from "@/components/Billboard/DesktopBillboard";
import MobileBillboard from "@/components/Billboard/MobileBillboard";

export const metadata = {
  title: "Solar",
  description:
    "Solar power solutions refer to the various technologies, systems, and products that harness sunlight to generate electricity or heat.",
  keywords: [
    "Solar, Solar Solutions, Inverter, Inverters, Utilities, Utilities Management",
  ],
  authors: "Tsotetsi Mosala",
};

const page = () => {
  return (
    <>
      <DesktopBillboard
        className="solar desktop-billboard billboard"
        heading="Solar Energy Systemss"
        text="Solar power solutions refer to the various technologies, systems, and products that harness sunlight to generate electricity or heat. These solutions are used for both residential and commercial applications to reduce reliance on conventional fossil fuels and mitigate environmental impacts. Solar power solutions can be categorized based on their application and technology. Here are some common categories:"
      />

      <MobileBillboard
        className="solar mobile-billboard billboard"
        heading="Solar Energy Systems"
        text="Solar power solutions refer to the various technologies, systems, and products that harness sunlight to generate electricity or heat. These solutions are used for both residential and commercial applications to reduce reliance on conventional fossil fuels and mitigate environmental impacts. Solar power solutions can be categorized based on their application and technology. Here are some common categories:"
      />

      <section className="one solar">
        <div className="section-intro">
          <h2 className="section-intro__title">
            Photovoltaic (PV) Solar Panels
          </h2>
          <p className="section-intro__text">
            Photovoltaic solar panels convert sunlight directly into electricity
            using semiconductor materials (usually silicon) that generate an
            electric current when exposed to photons. PV panels are widely used
            for residential, commercial, and utility-scale electricity
            generation.
          </p>
        </div>
        <div className="section-cards">
          <Card
            heading="Monocrystalline Solar Panels"
            text="Made from a single crystal structure, they offer high efficiency and a sleek appearance."
          />

          <Card
            heading="Polycrystalline Solar Panels"
            text="Made from multiple crystals, they are cost-effective but slightly less efficient than monocrystalline panels."
          />

          <Card
            heading="Thin-Film Solar Panels"
            text="These panels are flexible and can be integrated into various surfaces but tend to have lower efficiency compared to crystalline panels."
          />
        </div>
      </section>

      <section className="two solar">
        <div className="section-intro">
          <h2 className="section-intro__title">Solar Thermal Systems</h2>
          <p className="section-intro__text">
            Solar thermal systems use sunlight to heat a fluid or material,
            which is then used for space heating, water heating, or electricity
            generation.
          </p>
        </div>
        <div className="section-cards">
          <Card
            heading="Solar Water Heaters"
            text="These systems heat water for domestic use or space heating."
          />

          <Card
            heading="Concentrated Solar Power (CSP)"
            text="CSP systems concentrate sunlight onto a small area to generate high temperatures that drive a turbine for electricity generation."
          />

          <Card
            heading="Solar Cookers"
            text="Designed for cooking food using solar energy, especially in regions with limited access to traditional cooking fuels."
          />
        </div>
      </section>

      <section className="three solar">
        <div className="section-intro">
          <h2 className="section-intro__title">Solar Farms and Power Plants</h2>
          <p className="section-intro__text">
            Large-scale solar installations designed to generate electricity
            that is fed into the grid for widespread distribution.
          </p>
        </div>
        <div className="section-cards">
          <Card
            heading="Utility-Scale Solar Farms"
            text="Large solar arrays typically located in sunny regions to generate significant electricity."
          />

          <Card
            heading="Floating Solar Farms"
            text="Solar panels installed on bodies of water, such as reservoirs or ponds."
          />
        </div>
      </section>

      <section className="five solar">
        <div className="section-intro">
          <h2 className="section-intro__title">Off-Grid Solar Systems</h2>
          <p className="section-intro__text">
            These systems are not connected to the main electrical grid and are
            often used in remote areas or for backup power.
          </p>
        </div>
        <div className="section-cards">
          <Card
            heading="Off-Grid Solar Power Systems"
            text="Generate and store electricity using batteries for use when the sun isn't shining."
          />

          <Card
            heading="Solar-Powered Water Pumps"
            text="Used for irrigation and water supply in remote areas."
          />
        </div>
      </section>

      <section className="four solar">
        <div className="section-intro">
          <h2 className="section-intro__title">
            Solar-Powered Consumer Products
          </h2>
          <p className="section-intro__text">
            Small-scale solar solutions for everyday use.
          </p>
        </div>
        <div className="section-cards">
          <Card
            heading="Solar Chargers"
            text="Charge portable devices like phones, tablets, and laptops."
          />

          <Card
            heading="Solar-Powered Lights"
            text="Outdoor lighting solutions that charge during the day and provide light at night."
          />
        </div>
      </section>

      <section className="five solar">
        <div className="section-intro">
          <h2 className="section-intro__title">
            Building-Integrated Photovoltaics (BIPV)
          </h2>
          <p className="section-intro__text">
            Integrating solar panels into building materials like roofs,
            windows, and facades to generate power while serving architectural
            functions.
          </p>
        </div>
        {/* <div className="section-cards">
          <Card
            heading="Solar Chargers"
            text="Charge portable devices like phones, tablets, and laptops."
          />

          <Card
            heading="Solar-Powered Lights"
            text="Outdoor lighting solutions that charge during the day and provide light at night."
          />

        </div> */}
      </section>
    </>
  );
};

export default page;

const Card = ({ heading, text }) => {
  return (
    <div className="card">
      <h4 className="card__title">{heading}</h4>
      <p className="card__text">{text}</p>
    </div>
  );
};
