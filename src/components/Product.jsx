export default function Product({ items }) {
  return items.map(item => {
    return (
      <div key={item.id}>
        <h2>{item.name}</h2>
        <img src={item.imgUrl} alt="Tacos With Lime" width="640" />
        <p>Price: {item.price} credits</p>
      </div>
    );
  });
}
