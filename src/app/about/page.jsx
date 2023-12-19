import DesktopBillboard from "@/components/Billboard/DesktopBillboard";
import MobileBillboard from "@/components/Billboard/MobileBillboard";

export const metadata = {
  title: "About",
  description:
    "Bonema engineering's integrated management system, experienced leadership, and industry expertise position it as a leader in the renewable energy sector",
  keywords: [
    "Solar, Solar Solutions, Inverter, Inverters, Utilities, Utilities Management",
  ],
  authors: "Tsotetsi Mosala",
};

const page = () => {
  return (
    <>
      <DesktopBillboard
        className="about desktop-billboard billboard"
        heading="About Us"
        text="Bonema Engineering is a trailblazing renewable energy company that places sustainability
        and quality at the forefront of its operations. With a strong commitment to delivering
        reliable and affordable electricity to communities, Bonema engineering&#39;s integrated
        management system, experienced leadership, and industry expertise position it as a leader in the renewable energy sector in South Africa and Botswana."
      />

      <MobileBillboard
        className="about mobile-billboard billboard"
        heading="About Us"
        text="Bonema Engineering is a trailblazing renewable energy company that places sustainability
        and quality at the forefront of its operations. With a strong commitment to delivering
        reliable and affordable electricity to communities, Bonema engineering&#39;s integrated
        management system, experienced leadership, and industry expertise position it as a leader in the renewable energy sector in South Africa and Botswana."
      />

      <section className="about introduction">
        <div className="section-intro">
          <div className="section-intro__who-are-we">
            <h2 className="section-intro__title">Who are we</h2>
            <p className="section-intro__text">
              Bonema Engineering is a renowned renewable energy company with a
              robust integrated management system that enables its operations on
              a global scale. Founded in March 2015, the company specializes in
              utilities management, focusing on the generation, distribution,
              and provision of sustainable and affordable electricity solutions.
              Bonema Engineering prioritizes viability and sustainability,
              aiming to provide top-quality energy resources and services to
              communities in South Africa and Botswana.
            </p>
          </div>

          <div className="section-intro__image">
            {/* <img src="/image-about-intro.jpg" alt="" /> */}
          </div>

          <div className="section-intro-leadership">
            <h2 className="section-intro-leadership__title">Leadership Team</h2>
            <p className="section-intro-leadership__text">
              Bokang Mosala
              <small className="designation">(Managing Director)</small>
            </p>
            <p className="section-intro-leadership__text">
              Maemili Ramataboe
              <small className="designation">(Finance Director)</small>
            </p>
            <p className="section-intro-leadership__text">
              Rebaone Kgobokoe
              <small className="designation">(Head of Legal)</small>
            </p>
          </div>
        </div>
      </section>

      <section className="about features">
        <div className="cards">
          <div className="card">
            <div className="card-content">
              <h2 className="card-content__title">Sustainability Focus</h2>
              <p className="card-content__text">
                Bonema Engineering’s core principle is to prioritize
                sustainability in every aspect of its operations, from resource
                identification to electricity distribution, ensuring long-term
                benefits for communities.
              </p>
            </div>
            <div className="card-image image">
              <picture>
                <source
                  media="(min-width: 620px)"
                  srcSet="/image-sustainability-md.jpg"
                />

                <img
                  src="/image-sustainability-sm.jpg"
                  alt="Chris standing up holding his daughter Elva"
                />
              </picture>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h2 className="card-content__title">Community Impact</h2>
              <p className="card-content__text">
                Bonema Engineering recognizes the potential negative effects of
                unsustainable projects on communities, and therefore, their
                commitment to sustainability translates into positive economic
                and social impacts.
              </p>
            </div>
            <div className="card-image image">
              <picture>
                <source
                  media="(min-width: 620px)"
                  srcSet="/image-impact-md.jpg"
                />

                <img
                  src="/image-impact-sm.jpg"
                  alt="Chris standing up holding his daughter Elva"
                />
              </picture>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h2 className="card-content__title">Quality Assurance</h2>
              <p className="card-content__text">
                The company places a strong emphasis on providing top-quality
                products and services, comparable to those found in developed
                countries, ensuring reliability and uninterrupted energy supply.
              </p>
            </div>
            <div className="card-image image">
              <picture>
                <source
                  media="(min-width: 620px)"
                  srcSet="/image-quality-assurance-md.jpg"
                />

                <img
                  src="/image-quality-assurance-sm.jpg"
                  alt="Chris standing up holding his daughter Elva"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
