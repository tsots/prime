import DesktopBillboard from "@/components/Billboard/DesktopBillboard";
import MobileBillboard from "@/components/Billboard/MobileBillboard";

export const metadata = {
  title: "Utilities",
  description:
    "Systematic control, optimization, and administration of essential services such as electricity, water, gas, and telecommunications within residential, commercial, or industrial settings",
  keywords: [
    "Solar, Solar Solutions, Inverter, Inverters, Utilities, Utilities Management",
  ],
  authors: "Tsotetsi Mosala",
};

const page = () => {
  return (
    <>
      <DesktopBillboard
        className="utilities desktop-billboard billboard"
        heading="Utilities Management"
        text="Utilities management refers to the strategic and systematic control, optimization, and administration of essential services such as electricity, water, gas, and telecommunications within residential, commercial, or industrial settings. It encompasses the monitoring of resource consumption, cost management, maintenance, and sustainability efforts to ensure efficient and reliable delivery of these vital services. The goal of utilities management is to streamline operations, minimize wastage, reduce costs, enhance sustainability, and improve the overall efficiency and quality of utility services for end-users."
      />

      <MobileBillboard
        className="utilities mobile-billboard billboard"
        heading="Utilities Management"
        text="Utilities management refers to the strategic and systematic control, optimization, and administration of essential services such as electricity, water, gas, and telecommunications within residential, commercial, or industrial settings. It encompasses the monitoring of resource consumption, cost management, maintenance, and sustainability efforts to ensure efficient and reliable delivery of these vital services. The goal of utilities management is to streamline operations, minimize wastage, reduce costs, enhance sustainability, and improve the overall efficiency and quality of utility services for end-users."
      />

      <section className="utilities benefits">
        <div className="section-intro">
          <h2 className="section-intro__title">Benefits</h2>
        </div>

        <div className="section-cards">
          <Card
            heading="Cost Savings"
            text="One of the primary advantages of partnering with a utilities management company is the potential for significant cost savings. These companies employ experts who can identify inefficiencies, reduce wastage, and negotiate better rates with utility providers, ultimately lowering your utility bills."
          />

          <Card
            heading="Efficiency Enhancement"
            text="Utilities management companies use advanced technology and data analytics to monitor and control resource consumption in real-time. This leads to more efficient use of utilities, reducing both costs and environmental impact."
          />

          <Card
            heading="Streamlined Operations"
            text="With all your utilities being managed from a single platform, you can streamline your operations and simplify administrative tasks. This centralization makes it easier to track usage, pay bills, and manage contracts."
          />

          <Card
            heading="Proactive Maintenance"
            text="Utilities management companies often offer maintenance services to ensure that your utility systems operate smoothly. They can detect issues before they become major problems, minimizing downtime and repair costs."
          />

          <Card
            heading="Sustainability Initiatives"
            text="Many utilities management companies prioritize sustainability. They can help you reduce your carbon footprint by identifying eco-friendly solutions, optimizing resource consumption, and integrating renewable energy sources where applicable."
          />

          <Card
            heading="Compliance and Reporting"
            text="These companies ensure that your utility-related processes comply with regulations and standards. They provide comprehensive reports and documentation, which can be essential for audits and regulatory compliance."
          />

          <Card
            heading="Data-Driven Insights"
            text="By collecting and analyzing data on your utility usage, these companies provide valuable insights into your consumption patterns. This information empowers you to make informed decisions about resource allocation and future investments."
          />
        </div>
      </section>

      <section className="utilities features">
        <div className="section-intro">
          <h2 className="section-intro__title">Features</h2>
        </div>
        <div className="utilities section-cards">
          <Card
            heading="Real-time Monitoring"
            text="Advanced monitoring systems track your utility usage in real-time, allowing for immediate response to anomalies or spikes in consumption."
          />

          <Card
            heading="Automated Billing"
            text="Utilities management companies often automate the billing process, ensuring that payments are made on time and accurately."
          />

          <Card
            heading="Energy Audits"
            text="Comprehensive energy audits are conducted to identify areas where energy can be conserved and costs reduced."
          />

          <Card
            heading="Utility Procurement"
            text="These companies negotiate with utility providers to secure the best rates and terms for your organization."
          />

          <Card
            heading="IoT Integration"
            text="Integration with Internet of Things (IoT) devices enables remote control and management of various utility systems."
          />

          <Card
            heading="Customized Solutions"
            text="Tailored solutions to meet your specific needs, whether you're a homeowner, property manager, or a large industrial facility."
          />

          <Card
            heading="24/7 Support"
            text="Most utilities management companies offer round-the-clock support to address emergencies and concerns promptly."
          />

          <Card
            heading="Reporting and Analytics"
            text="Detailed reports and analytics provide insights into your utility consumption patterns, allowing for data-driven decision-making."
          />

          <Card
            heading="Sustainability Initiatives"
            text="Implementation of eco-friendly solutions, such as energy-efficient lighting and renewable energy integration, to reduce your environmental impact."
          />

          <Card
            heading="Maintenance Services"
            text="Regular maintenance and upkeep of utility systems to ensure they remain efficient and reliable."
          />
        </div>
      </section>

      {/* <section className="utilities summary">
        <p>
          Wire mesh solutions combine these benefits and features to offer
          comprehensive, reliable, and adaptable solutions for a wide range of
          industries and applications. Whether it's enhancing safety, improving
          efficiency, or achieving aesthetic goals, wire mesh solutions provide
          a valuable resource for diverse projects.
        </p>
      </section> */}
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
