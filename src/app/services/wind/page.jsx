import DesktopBillboard from "@/components/Billboard/DesktopBillboard";
import MobileBillboard from "@/components/Billboard/MobileBillboard";

export const metadata = {
  title: "Wind",
  description:
    "A form of renewable energy that contributes to reducing greenhouse gas emissions and dependence on fossil fuels",
  keywords: [
    "Solar, Solar Solutions, Inverter, Inverters, Utilities, Utilities Management",
  ],
  authors: "Tsotetsi Mosala",
};

const page = () => {
  return (
    <>
      <DesktopBillboard
        className="wind desktop-billboard billboard"
        heading="Wind Energy Systems"
        text="Wind energy systems harness the power of wind to generate electricity. They are a form of renewable energy that contributes to reducing greenhouse gas emissions and dependence on fossil fuels. Wind energy systems consist of various components that work together to capture and convert wind energy into usable electricity. There are two primary categories/types of wind energy systems: onshore and offshore."
      />

      <MobileBillboard
        className="wind mobile-billboard billboard"
        heading="Wind Energy Systems"
        text="Wind energy systems harness the power of wind to generate electricity. They are a form of renewable energy that contributes to reducing greenhouse gas emissions and dependence on fossil fuels. Wind energy systems consist of various components that work together to capture and convert wind energy into usable electricity. There are two primary categories/types of wind energy systems: onshore and offshore."
        // image="/flower.png"
      />

      <section className="wind on-shore">
        <div className="section-intro">
          <h2 className="section-intro__title">Onshore Wind Energy Systems</h2>
          <p className="section-intro__text">
            Onshore wind energy systems are installed on land and are the most
            common type of wind energy installations. They consist of the
            following main components:
          </p>
        </div>

        <div className="section-cards">
          <Card
            heading="Wind Turbines"
            text="These are the structures that directly capture wind energy and convert it into mechanical energy. Wind turbines consist of rotor blades attached to a hub, which is connected to a generator. When the wind blows, it causes the rotor blades to spin, turning the generator and producing electricity."
          />

          <Card
            heading="Tower"
            text="The tower supports the wind turbine at an elevated height to capture higher and more consistent wind speeds. Towers can be made of steel, concrete, or other materials."
          />

          <Card
            heading="Nacelle"
            text="The nacelle is located at the top of the tower and houses the gearbox, generator, and other components necessary for converting the rotational energy of the rotor into electricity."
          />

          <Card
            heading="Control System"
            text="This system monitors wind conditions and adjusts the orientation of the rotor blades to optimize energy capture while ensuring safe operation."
          />
        </div>
      </section>

      <section className="wind off-shore">
        <div className="section-intro">
          <h2 className="section-intro__title">Offshore Wind Energy Systems</h2>
          <p className="section-intro__text">
            Offshore wind energy systems are installed in bodies of water,
            usually in shallow coastal areas or continental shelves. They have
            similar components to onshore systems, but with some differences:
          </p>
        </div>

        <div className="section-cards">
          <Card
            heading="Foundation"
            text="Offshore turbines require specialized foundations to anchor them in the water. These foundations can be fixed to the seabed (monopile or jacket foundations) or float on the surface (floating platforms)."
          />

          <Card
            heading="Substation"
            text="Offshore installations often have a substation platform where the generated electricity is collected, transformed to a higher voltage, and then transmitted to the onshore grid through underwater cables."
          />

          <Card
            heading="Transmission Infrastructure"
            text="The electricity generated offshore is transported to the shore through undersea cables, and from there, it is integrated into the main power grid."
          />

          <Card
            heading="Environmental Considerations"
            text="Offshore wind farms must consider additional environmental factors, such as marine life, seabed conditions, and navigational safety."
          />
        </div>
      </section>

      <section className="wind-summary summary">
        <p>
          Both onshore and offshore wind energy systems come in various sizes,
          ranging from small-scale installations suitable for residential use to
          large utility-scale wind farms. The technology behind wind energy
          systems continues to advance, resulting in more efficient and
          cost-effective solutions for generating clean electricity from the
          wind.
        </p>
      </section>
    </>
  );
};

export default page;

const Card = ({ heading, text }) => {
  return (
    <div className="card">
      <h4 className="card_title">{heading}</h4>
      <p className="card__text">{text}</p>
    </div>
  );
};
