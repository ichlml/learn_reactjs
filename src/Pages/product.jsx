import Cardproduct from "../component/Fragments/Cardproduct";

const Listprducts = [
  {
    id: 1,
    title: "Nike Air Maxaaa",
    images: "/images/shoes.jpg",
    price: "$100",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "Nike Air",
    images: "/images/shoes.jpg",
    price: "$200",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    title: "Nike Air Jordan",
    images: "/images/shoes.jpg",
    price: "$300",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      {Listprducts.map((item) => (
        <Cardproduct key={item.id}>
          <Cardproduct.Header images={item.images} />
          <Cardproduct.Body title={item.title}>{item.desc}</Cardproduct.Body>
          <Cardproduct.Footer price={item.price} />
        </Cardproduct>
      ))}
    </div>
  );
};

export default ProductPage;

// 135937749
