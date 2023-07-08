import React from "react";
import ProductsInfos from "../elements/ProductsInfos";

const Products = () => {
  return (
    <section id="AboutUs" className="space-y-16 container mx-auto px-4">
      <ProductsInfos
        id="01"
        title="Captivating Home Views"
        description="Immerse in Serne Scenic Beauty - Experience captivating home views
            that soothe the soul and inspire tranquility."
        image="/asstes/images/img3.jpg"
      />
      <ProductsInfos
        id="02"
        title="Contemporary Bliss"
        description="Immerse in modern luxury with our exquisite range of upscale amenities, defining the pinnacle of contemporary lifestyle."
        image="/asstes/images/img4.jpg"
      />
      <ProductsInfos
        id="03"
        title="Prime Locations"
        description="Explore prime locations adorned with convenience and value, placing you at the heart of desirable neighbothoods."
        image="/asstes/images/img6.jpg"
      />
    </section>
  );
};

export default Products;
