const MobileBillboard = ({ heading, image, text, className }) => {
  return (
    <div className={className}>
      <h1>{heading}</h1>
      <div className="image">{/* <img src={image} alt="" /> */}</div>
      <p>{text}</p>
    </div>
  );
};

export default MobileBillboard;
