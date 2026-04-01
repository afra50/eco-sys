const Brands = () => {
  const brands = [
    { name: "Panasonic", logo: "/images/brands/panasonic.svg" },
    { name: "Daikin", logo: "/images/brands/daikin.svg" },
    { name: "Fronius", logo: "/images/brands/fronius.svg" },
    { name: "FoxESS", logo: "/images/brands/foxess.svg" },
    { name: "Mitsubishi", logo: "/images/brands/mitsubishi.svg" },
  ];

  return (
    <section className="brands">
      <div className="brands_container">
        <div className="brands_intro">
          <p className="brands_text">Zaufane marki</p>
          <div className="brands_line"></div>
        </div>
        <div className="brands_list">
          {brands.map((brand, index) => (
            <div key={index} className="brands_item">
              {/* Gdy będziesz miał logo, odkomentuj poniższe, a usuń span */}
              {/* <img src={brand.logo} alt={brand.name} title={brand.name} /> */}
              <span>{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
