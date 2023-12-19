import Image from "next/image";
import DesktopBillboard from "../components/Billboard/DesktopBillboard";
import MobileBillboard from "@/components/Billboard/MobileBillboard";
import ServicesHome, { Solar, Wind } from "@/components/Cards/ServicesHome";

export const metadata = {
  title: "Home",
  description:
    "Comprehensive range of renewable energy solutions to industrial, commercial, and residential clients",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: "Tsotetsi Mosala",
};

export default function Home() {
  return (
    <>
      <DesktopBillboard
        className="home desktop-billboard billboard"
        heading="Bonema Engineering"
        text="Experience the power of a cleaner, more sustainable future with Bonema Engineering. Let's collaborate to drive positive change, reduce carbon footprints, and build a brighter tomorrow for Pretoria and beyond. Contact us today to embark on a journey towards a greener, more sustainable world."
        // image="/flower.png"
      />

      <MobileBillboard
        className="home mobile-billboard billboard"
        heading="Bonema Engineering"
        text="Experience the power of a cleaner, more sustainable future with Bonema Engineering. Let's collaborate to drive positive change, reduce carbon footprints, and build a brighter tomorrow for Pretoria and beyond. Contact us today to embark on a journey towards a greener, more sustainable world."
        // image="/flower.png"
      />

      <section className="services home">
        <div className="section-intro">
          <h2 className="section-intro__title">Services and Solutions</h2>
          <p className="section-intro__text">
            Bonema Engineering offers a comprehensive range of renewable energy
            solutions to industrial, commercial, and residential clients. The
            company’s diverse portfolio includes solar power, inverters,
            windmills, and hydropower systems. Bonema Engineering specializes
            in:
          </p>
        </div>
        {/* <div className="section-cards">
          <div className="card">
            <div className="card-title">
              <div className="card-heading__icon">
                <img src="" alt="" />
              </div>
              <div className="card-heading__title"></div>
            </div>
            <div className="card__text"></div>
          </div>
        </div> */}

        <div className="section-cards">
          <Solar />
          <Wind />

          <ServicesHome
            icon="/icon/battery-icon.svg"
            title="Energy Storage"
            text="Store excess energy efficiently and intelligently, ensuring a seamless power supply even during peak demand periods."
            Url="/services/storage"
          />

          <ServicesHome
            icon="/icon/hydro-icon.svg"
            title="Hydro Energy Systems"
            text="Store excess energy efficiently and intelligently, ensuring a seamless power supply even during peak demand periods."
            Url="/services/hydro"
          />

          <ServicesHome
            icon="/icon/mesh-icon.svg"
            title="Wire-Mesh Services"
            text="Store excess energy efficiently and intelligently, ensuring a seamless power supply even during peak demand periods."
            Url="/services/wiremesh"
          />

          <ServicesHome
            icon="/icon/utilities-icon.svg"
            title="Utilities Management"
            text="We are Your Trusted Partner in Meshing Success. Explore Our Wire Mesh Solutions Today!"
            Url="/services/utilities"
          />
        </div>
      </section>

      <section className="company-introduction">
        <div className="who-we-are">
          <h2 className="title">Who are we</h2>
          <p>
            Bonema Engineering is a renowned renewable energy company with a
            robust integrated management system that enables its operations on a
            global scale. Founded in March 2015, the company specializes in
            utilities management, focusing on the generation, distribution, and
            provision of sustainable and affordable electricity solutions.
            Bonema Engineering prioritizes viability and sustainability, aiming
            to provide top-quality energy resources and services to communities
            in South Africa and Botswana.
          </p>
        </div>
        <div className="our-mission">
          <h2 className="title">Our Mission</h2>
          <p>
            Our mission is to revolutionize the way energy is sourced and
            utilized. We believe that sustainability and progress can go hand in
            hand, and we are committed to delivering innovative renewable energy
            solutions that reduce carbon footprints while bolstering economic
            growth.
          </p>
        </div>
        <div className="image"></div>
      </section>

      <section className="commitments">
        <div className="section-cards">
          <div className="card">
            <div className="card-heading">
              <h4 className="card-heading__title">
                <span>
                  <img src="/icon/consult-icon.svg" alt="" />
                </span>
                Consulting & Integration
              </h4>
            </div>
            <div className="card__text">
              <p>
                Our experts collaborate with you to design and implement
                renewable energy systems that align with your goals and
                requirements.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-heading">
              <h4 className="card-heading__title">
                <span>
                  <img src="/icon/icon-sustainable.svg" alt="" />
                </span>
                Sustainable Practices
              </h4>
            </div>
            <div className="card__text">
              <p>
                Our experts collaborate with you to design and implement
                renewable energy systems that align with your goals and
                requirements.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-heading">
              <h4 className="card-heading__title">
                <span>
                  <img src="/icon/icon-customer_care.svg" alt="" />
                </span>
                Customer Care
              </h4>
            </div>
            <div className="card__text">
              <p>
                Providing exceptional customer service and engagement, including
                training and induction programs for electricity users.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-heading">
              <h4 className="card-heading__title">
                <span>
                  <img src="/icon/maintenance-icon.svg" alt="" />
                </span>
                Maintenance & Support:
              </h4>
            </div>
            <div className="card__text">
              <p>
                Offering 24/7 maintenance structures to ensure the consistent
                operation of energy systems.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-heading">
              <h4 className="card-heading__title">
                <span>
                  <img src="/icon/billing-icon.svg" alt="" />
                </span>
                Billing & Payment
              </h4>
            </div>
            <div className="card__text">
              <p>
                Offering affordable tariffs and simple payment options for
                customer’s convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="promise">
        <div className="section-cards">
          <div className="card">
            <div className="card-heading">
              <h4 className="card-heading__title">
                <span>
                  <img src="/icon/expertise-icon.svg" alt="" />
                </span>
                Local Expertise
              </h4>
            </div>
            <div className="card__text">
              <p>
                Our deep understanding of Pretoria's energy landscape positions
                us to design solutions that are perfectly suited to local
                conditions.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-heading">
              <h4 className="card-heading__title">
                <span>
                  <img src="/icon/technical-icon.svg" alt="" />
                </span>
                Technical Excellence
              </h4>
            </div>
            <div className="card__text">
              <p>
                Our team comprises skilled engineers and experts who ensure
                every project is executed to the highest standards of quality
                and reliability.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-heading">
              <h4 className="card-heading__title">
                <span>
                  <img src="/icon/innovation-icon.svg" alt="" />
                </span>
                Innovation
              </h4>
            </div>
            <div className="card__text">
              <p>
                Providing exceptional customer service and engagement, including
                training and induction programs for electricity users.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-heading">
              <h4 className="card-heading__title">
                <span>
                  <img src="/icon/environment-icon.svg" alt="" />
                </span>
                Environmental Stewardship
              </h4>
            </div>
            <div className="card__text">
              <p>
                Offering 24/7 maintenance structures to ensure the consistent
                operation of energy systems.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-heading">
              <h4 className="card-heading__title">
                <span>
                  <img src="/icon/customer-centric-icon.svg" alt="" />
                </span>
                Customer-Centric Approach
              </h4>
            </div>
            <div className="card__text">
              <p>
                Offering affordable tariffs and simple payment options for
                customer’s convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="accreditations">
        <div className="section-intro">
          <div className="section-intro__title">
            <h2>Accreditations and Partnerships</h2>
          </div>
          <div className="section-intro__text">
            Bonema Engineering boasts industry accreditations and partnerships,
            establishing its credibility and expertise. Notable clients include
            Eskom, City of Johannesburg, Hazelmere Dam, and Mweusi Properties.
          </div>
        </div>
      </section>
    </>
  );
}
