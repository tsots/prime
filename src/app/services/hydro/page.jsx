import DesktopBillboard from "@/components/Billboard/DesktopBillboard";
import MobileBillboard from "@/components/Billboard/MobileBillboard";

export const metadata = {
  title: "Hydro",
  description:
    "Hydropower is a renewable and sustainable energy source that has been utilized for centuries to generate power. It involves capturing the kinetic energy of moving water and transforming it into mechanical or electrical energy.",
  keywords: [
    "Solar, Solar Solutions, Inverter, Inverters, Utilities, Utilities Management",
  ],
  authors: "Tsotetsi Mosala",
};

const page = () => {
  return (
    <>
      <DesktopBillboard
        className="hydro desktop-billboard billboard"
        heading="Hydro Energy Systems"
        text="Hydropower is a renewable and sustainable energy source that has been utilized for centuries to generate power. It involves capturing the kinetic energy of moving water and transforming it into mechanical or electrical energy. "
      />

      <MobileBillboard
        className="hydro mobile-billboard billboard"
        heading="Hydro Energy Systems"
        text="Hydropower is a renewable and sustainable energy source that has been utilized for centuries to generate power. It involves capturing the kinetic energy of moving water and transforming it into mechanical or electrical energy. "
      />

      <section className="conventional-hydropower">
        <div className="section-intro">
          <h2 className="section-intro__title">Conventional Hydropower</h2>
          {/* <p className="hydro-intro__text"></p> */}
        </div>
        <div className="section-cards">
          <div className="card">
            <h4 className="card__title">Large-scale Hydropower</h4>
            <p className="card__text">
              These are large dams and reservoirs that create significant water
              storage. The stored water is released through turbines to generate
              electricity. Examples include the Hoover Dam in the United States
              and the Three Gorges Dam in China.
            </p>
          </div>

          <div className="card">
            <h4 className="card__title">Small-scale Hydropower</h4>
            <p className="card__text">
              These are smaller installations, often involving smaller dams or
              even natural waterfalls. They are suitable for powering remote
              communities, agricultural operations, or industries.
            </p>
          </div>
        </div>
      </section>

      <section className="other-hydro">
        <div className="section-cards">
          <Card
            heading="Run-of-River Hydropower"
            text="Unlike conventional hydropower, run-of-river systems do not require large reservoirs. Instead, they divert a portion of the flowing river's water through a penstock (pipeline) to turbines, generating electricity as the water flows back into the river."
          />

          <Card
            heading="Pumped Storage Hydropower"
            text="This is a two-reservoir system where water is pumped from a lower reservoir to an upper reservoir during times of low electricity demand. During peak demand periods, water is released from the upper reservoir to the lower reservoir through turbines, generating electricity."
          />

          <Card
            heading="Tidal Hydropower"
            text="Tidal energy is harnessed by capturing the kinetic energy of ocean tides. Tidal power plants use the rise and fall of tides to generate electricity."
          />

          <Card
            heading="Wave Energy"
            text="This involves capturing the energy from the motion of ocean waves and converting it into electricity. Wave energy devices can be located offshore and can be used in conjunction with other renewable energy sources."
          />

          <Card
            heading="Ocean Current Energy"
            text="Similar to tidal energy, ocean current energy harnesses the kinetic energy of ocean currents to generate electricity. Specialized underwater turbines are used for this purpose."
          />

          <Card
            heading="Hydrokinetic Energy"
            text="This involves harnessing the kinetic energy of flowing rivers or ocean currents without the need for dams or large installations. Devices such as underwater turbines or floating platforms are used to capture energy from the moving water."
          />

          <Card
            heading="Micro Hydropower"
            text="Extremely small-scale hydropower systems that can be installed in rural or off-grid areas to provide localized power generation."
          />

          <Card
            heading="Hybrid Systems"
            text="These combine hydropower with other renewable energy sources, such as solar or wind, to provide a more stable and consistent power output."
          />

          <Card
            heading="Decentralized Hydropower"
            text="Involves small-scale installations that are distributed throughout a region, reducing the need for large centralized power plants and transmission infrastructure."
          />
        </div>
      </section>

      <section className="hydro-summary summary">
        <p>
          Each of these categories has its own advantages, disadvantages, and
          considerations, depending on factors such as geographical location,
          available water resources, environmental impact, and energy demand.
          The choice of hydropower solution depends on these factors and the
          specific goals of a particular energy project.
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
