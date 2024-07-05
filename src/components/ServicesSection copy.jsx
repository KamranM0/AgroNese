function ServicesSection({ children, imageSrc }) {
  return (
    <div className="col-lg-12">
      <img src={imageSrc} alt={imageSrc} />
      {children}
    </div>
  );
}

export default ServicesSection;
