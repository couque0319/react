const items = ["Apple", "Banana", "Cherry"];
function ItemList() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>     //key를 안적으면 에러뜸
      ))}
    </ul>
  );
}
export default ItemList;