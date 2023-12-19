const DesktopBillboard = ({ heading, image, text, className }) => {
  return (
    <div className={className}>
      <div className="container">
        <div className="content">
          {" "}
          <h1>{heading}</h1>
          <p>{text}</p>
        </div>
        <div className="image">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DesktopBillboard;
