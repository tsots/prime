export const metadata = {
  title: "Contact",
  description:
    "Contact us today to embark on a journey towards a greener, more sustainable world.",
  keywords: [
    "Solar, Solar Solutions, Inverter, Inverters, Utilities, Utilities Management",
  ],
  authors: "Tsotetsi Mosala",
};

const page = () => {
  return (
    <>
      <div className="container contact-Us">
        <ul className="address">
          <h3>Head Office Address</h3>
          <li>Growthpoint Business Park</li>
          <li>Unit 4</li>
          <li>162 Tonetti Street</li>
          <li>Halfway House, Midrand</li>
          <li>South Africa 1685</li>
        </ul>

        <ul className="contacts">
          <h3>Contact Numbers</h3>
          <li>Tel: +27 12 772 9729</li>
          <li>Accounts : 086 126 6362</li>
          <li>Sales & Support: +27 12 772 9729</li>
          <li>
            EMail :
            <span>
              <a href="mailto:info@bonema.co.za">info@bonema.co.za</a>
            </span>
          </li>
        </ul>

        <div className="styles__Form-sc-18vggdz-0 bjSZcv">
          <h3>Contact Form</h3>
          <form autocomplete="off">
            <div className="input-group">
              <label for="name">Name:</label>
              <input
                className="no-outline"
                type="text"
                name="name"
                id=""
                placeholder="Your Name"
              />
            </div>
            <div className="input-group">
              <label for="email">Email Address</label>
              <input
                className="no-outline"
                type="email"
                name="email"
                id=""
                placeholder="Your E-Mail Address"
              />
            </div>
            <div className="input-group">
              <label for="number">Contact Number</label>
              <input
                className="no-outline"
                type="tel"
                name="number"
                id=""
                placeholder="Contact Number"
              />
            </div>
            <div className="input-group">
              <label for="message">Message</label>
              <textarea
                className="no-outline"
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Your Message"
              ></textarea>
            </div>
            <input type="submit" />
          </form>
        </div>
        <div className="map">
          <div className="container">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="100%"
                  height="100%"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=162 tonetti street&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
                <a href="https://2yu.co">2yu</a>
                <br />
                <a href="https://embedgooglemap.2yu.co/">
                  html embed google map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
