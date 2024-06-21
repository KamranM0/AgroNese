function ServicesSection({ children, imageSrc }) {
  return (
    <div>
      <img src={imageSrc} alt={imageSrc} />
      {children}
    </div>
  );
}

export default ServicesSection;
