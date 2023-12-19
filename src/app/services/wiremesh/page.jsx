import DesktopBillboard from "@/components/Billboard/DesktopBillboard";
import MobileBillboard from "@/components/Billboard/MobileBillboard";

export const metadata = {
  title: "Wiremesh",
  description:
    "Bonema Engineering wire mesh solutions are versatile and adaptable material applications across a multitude of industries. Renowned for its strength and durability, wire mesh not only enhances safety and security but also excels in applications demanding efficient filtration.",
  keywords: [
    "Solar, Solar Solutions, Inverter, Inverters, Utilities, Utilities Management",
  ],
  authors: "Tsotetsi Mosala",
};

const page = () => {
  return (
    <>
      <DesktopBillboard
        className="wiremesh desktop-billboard billboard"
        heading="Wire-mesh solutions"
        text="Bonema Engineering wire mesh solutions are versatile and adaptable material applications across a multitude of industries.  Renowned for its strength and durability, wire mesh not only enhances safety and security but also excels in applications demanding efficient filtration."
      />

      <MobileBillboard
        className="wiremesh mobile-billboard billboard"
        heading="Wire-mesh solutions"
        text="Bonema Engineering wire mesh solutions are versatile and adaptable material applications across a multitude of industries.  Renowned for its strength and durability, wire mesh not only enhances safety and security but also excels in applications demanding efficient filtration."
      />

      <section className="wiremesh benefits">
        <div className="section-intro">
          <h2 className="section-intro__title">Benefits</h2>
        </div>

        <div className="section-cards">
          <Card
            heading="Versatility"
            text="Wire mesh solutions offer a versatile range of products suitable for numerous applications, from construction and agriculture to industrial filtration and security fencing."
          />

          <Card
            heading="Customization"
            text="Providers offer tailored solutions with options for various mesh sizes, materials, and wire diameters to meet specific project requirements."
          />

          <Card
            heading="Strength and Durability"
            text="Wire mesh is known for its strength and durability, ensuring long-lasting performance even in challenging environments."
          />

          <Card
            heading="Improved Safety"
            text="Wire mesh can enhance safety by providing secure enclosures, safety barriers, and protective screens."
          />

          <Card
            heading="Efficient Filtration"
            text="Wire mesh is effective in filtering materials, making it ideal for applications like water filtration, air ventilation, and particle separation."
          />

          <Card
            heading="Cost-Effective"
            text="Wire mesh solutions offer a cost-effective option for many applications due to their durability and long lifespan."
          />

          <Card
            heading="Aesthetic Appeal"
            text="In architectural and design applications, wire mesh can be used to create visually appealing structures and facades."
          />
        </div>
      </section>

      <section className="wiremesh features">
        <div className="section-intro">
          <h2 className="section-intro__title">Features</h2>
        </div>
        <div className="storage section-cards">
          <Card
            heading="Wide Range of Materials"
            text="Wire mesh solutions are available in various materials, including stainless steel, galvanized steel, aluminum, and more, to suit different environmental conditions."
          />

          <Card
            heading="Mesh Size Options"
            text="Providers offer an array of mesh size options, allowing customers to select the appropriate size for their specific needs."
          />

          <Card
            heading="Finishing and Coating"
            text="Wire mesh can be finished or coated to improve corrosion resistance, appearance, and other properties as needed."
          />

          <Card
            heading="Quality Assurance"
            text="Reputable providers have stringent quality control measures to ensure products meet industry standards and customer expectations."
          />

          <Card
            heading="Supply Chain Management"
            text="Hydrogen can be produced using surplus electricity (e.g., from renewable sources) through electrolysis and stored for later use. It can be used in fuel cells to generaWire mesh suppliers often maintain inventory and efficient supply chain management to meet customer demand consistently."
          />

          <Card
            heading="Technical Support"
            text="Providers offer technical assistance for installation, maintenance, and troubleshooting, ensuring customers get the most out of their wire mesh solutions."
          />

          <Card
            heading="Delivery Services"
            text="Wire mesh providers typically offer reliable delivery services to get products to customers' locations promptly."
          />

          <Card
            heading="After-Sales Support"
            text="Many providers offer warranties, replacements, and repairs to address any issues or concerns after purchase."
          />

          <Card
            heading="Training and Education"
            text="Some wire mesh providers offer training and educational resources to help customers understand the best practices for using wire mesh in their applications."
          />
        </div>
      </section>

      <section className="wiremesh summary">
        <p>
          Wire mesh solutions combine these benefits and features to offer
          comprehensive, reliable, and adaptable solutions for a wide range of
          industries and applications. Whether it's enhancing safety, improving
          efficiency, or achieving aesthetic goals, wire mesh solutions provide
          a valuable resource for diverse projects.
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
