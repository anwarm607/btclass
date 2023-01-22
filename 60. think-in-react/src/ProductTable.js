const ProductCategoryRow = (props) => {
  return (
    <tr>
      <th colSpan="2">{props.name}</th>
    </tr>
  );
};

const ProductRow = (props) => {
  return props.data.map((it) => {
    return (
      <tr>
        <td>{it.name}</td>
        <td>{it.price}</td>
      </tr>
    );
  });
};

const ProductTable = (props) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductCategoryRow name="Sporting Goods" />
          <ProductRow data={props.sportingGoodArr} />
          <ProductCategoryRow name="Electronics" />
          <ProductRow data={props.electronicsArr} />
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
