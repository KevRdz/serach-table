

const ProductCategoryRow = ({category}) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th colSpan="2">
              {category}
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ProductCategoryRow;