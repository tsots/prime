import DesktopBillboard from "@/components/Billboard/DesktopBillboard";
import MobileBillboard from "@/components/Billboard/MobileBillboard";

export const metadata = {
  title: "Inverters",
  description:
    "Store excess energy efficiently and intelligently, ensuring a seamless power supply even during peak demand periods.",
  keywords: [
    "Solar, Solar Solutions, Inverter, Inverters, Utilities, Utilities Management",
  ],
  authors: "Tsotetsi Mosala",
};

const page = () => {
  return (
    <>
      <DesktopBillboard
        className="storage desktop-billboard billboard"
        heading="Storage Energy Systems"
        text="Energy storage solutions refer to technologies and systems that capture and store energy for later use. These solutions play a crucial role in modern energy systems by enabling the integration of intermittent renewable energy sources, improving grid stability, and providing backup power during times of high demand or grid outages. Energy storage solutions can be categorized into several types based on their storage medium and technology. Here are some of the main categories/types of energy storage:"
      />

      <MobileBillboard
        className="storage mobile-billboard billboard"
        heading="Storage Energy Systems"
        text="Energy storage solutions refer to technologies and systems that capture and store energy for later use. These solutions play a crucial role in modern energy systems by enabling the integration of intermittent renewable energy sources, improving grid stability, and providing backup power during times of high demand or grid outages. Energy storage solutions can be categorized into several types based on their storage medium and technology. Here are some of the main categories/types of energy storage:"
      />

      <section className="storage batteries">
        <div className="section-intro">
          <h2 className="section-intro__title">Batteries</h2>
          <p className="section-intro__text">
            Batteries store energy in chemical form and can release it as
            electricity when needed. They are widely used in various
            applications, from small-scale devices like smartphones to
            large-scale grid-level storage. Examples include:
          </p>
        </div>

        <div className="section-cards">
          <Card
            heading="Lithium-ion Batteries"
            text="These are commonly used in electric vehicles (EVs) and consumer electronics due to their high energy density and relatively long cycle life."
          />

          <Card
            heading="Lead-acid Batteries"
            text="Often used for backup power in uninterruptible power supply (UPS) systems and smaller-scale applications."
          />

          <Card
            heading="Flow Batteries"
            text="These use two electrolyte solutions separated by a membrane. They are known for their scalability and long cycle life, making them suitable for grid-level energy storage."
          />

          <Card
            heading="Sodium-ion Batteries"
            text="An emerging technology with potential for cost-effective and sustainable grid-scale energy storage."
          />
        </div>
      </section>

      <section className="storage other">
        <div className="storage section-cards">
          <CardOther
            heading="Pumped Hydro Storage"
            text="Offshore wind energy systems are installed in bodies of water, usually in shallow coastal areas or continental shelves. They have similar components to onshore systems, but with some differences:"
          />

          <CardOther
            heading="Compressed Air Energy Storage (CAES)"
            text="This technology stores energy by compressing air and storing it in underground caverns or tanks. The compressed air is later released to drive turbines and generate electricity."
          />

          <CardOther
            heading="Flywheels"
            text="Flywheel energy storage systems store energy in the rotational motion of a spinning flywheel. When energy is needed, the flywheel's rotation is converted back into electricity."
          />

          <CardOther
            heading="Thermal Energy Storage (TES)"
            text="TES systems store energy in the form of heat. This can be achieved through various methods, such as sensible heat storage, latent heat storage, and thermochemical storage."
          />

          <CardOther
            heading="Hydrogen Storage"
            text="Hydrogen can be produced using surplus electricity (e.g., from renewable sources) through electrolysis and stored for later use. It can be used in fuel cells to generate electricity when needed."
          />

          <CardOther
            heading="Superconducting Magnetic Energy Storage (SMES)"
            text="This technology uses superconducting coils to store electrical energy in the form of a magnetic field. When discharged, the stored energy is released as electricity."
          />

          <CardOther
            heading="Gravitational Energy Storage"
            text="This involves lifting heavy weights to store potential energy, which can then be converted back into electricity by lowering the weights and using the generated kinetic energy."
          />

          <CardOther
            heading="Chemical Energy Storage"
            text="This includes technologies like hydrogen storage, as well as emerging concepts such as advanced fuels and chemicals that can release energy on demand."
          />

          <CardOther
            heading="Advanced Capacitors"
            text="These devices store energy by accumulating charge at their electrodes. They can discharge energy quickly and are often used in conjunction with other storage technologies."
          />
        </div>
      </section>

      <section className="storage summary">
        <p>
          The choice of energy storage solution depends on factors such as
          application, scale, cost, efficiency, and environmental
          considerations. As technology advances and the demand for renewable
          energy integration increases, new and improved energy storage
          solutions continue to be developed and deployed.
        </p>
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

const CardOther = ({ heading, text }) => {
  return (
    <div className="card">
      <h2 className="card__title">{heading}</h2>
      <p className="card__text">{text}</p>
    </div>
  );
};
