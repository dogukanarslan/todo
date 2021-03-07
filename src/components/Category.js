const Category = ({category}) => {
  return (
    <div>
      <button><i className="far fa-square"></i></button>
      <li>{category.type}</li>
    </div>
   );
}

export default Category;
