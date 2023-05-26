import "./style/breadCrumbs.scss";

export const BreadCrumbsMeli = (props) => {
  const { categories } = props;
  return (
    <div className='breadCrumbContainer'>
     
      {categories?.map((item, index) => (
        <span key={item+"breadcrumb"+index}>{item}{" > "}</span>
      ))}
    </div>
  );
};
