

const ProductRow = ({product}) => {
  const name = product.stocked ? product.name :
    <span style={{color: "red"}}>
      {product.name}
    </span>

  return (
    <div>
      <tr>
        <td>{name}</td>
        <td>{ProductRow.price}</td>
      </tr>
    </div>
  );
}

export default ProductRow;
