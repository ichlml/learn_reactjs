import Button_elements from "../Elements/Buttons/Index";
const Cardproduct = (props) => {
  const { children } = props;
  return (
    <div>
      <div className="w-full max-w-sm bg-gray-500 border border-gray-600 rounded-lg shadow mx-2 flex-col justify-between">
        {children}
      </div>
    </div>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className=" text-sm text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex items-center justify-between mb-3 px-5">
      <span className="text-3xl font-bold text-white">{price}</span>
      <Button_elements props="blue" colorText="white" text={"Add to cart"} />
    </div>
  );
};

const Header = (props) => {
  const { images } = props;
  return (
    <a href="">
      <img src={images} alt="contoh product" className="p-8 rounded-t-lg" />
    </a>
  );
};

Cardproduct.Header = Header;
Cardproduct.Body = Body;
Cardproduct.Footer = Footer;
export default Cardproduct;
