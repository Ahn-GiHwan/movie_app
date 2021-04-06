function ItemList({ item }) {
  return (
    <div>
      {item.length === 0 ? <div>기달...</div> : item.map((item, i) => {
        return (
          <div key={i}>
            <img src={item.image_link} alt={item.name} />
            <span>이름 : {item.name}</span><br />
            <span><a href={item.product_link} target='_black'>사러가기</a></span>
          </div>
        )
      })}
    </div>
  );
}

export default ItemList;