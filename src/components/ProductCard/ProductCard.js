import "./ProductCard.css";

export default function ProductCard() {
  return (
    <div className="productContainer">
      <div className="ProductImage">
        <img src="https://m.media-amazon.com/images/I/81G0cGr-J-L.jpg" height="276"/>
      </div>
      <div className="ProductDetail">
        <p style={{ fontSize: "40px", lineHeight: "0px" }}>
          Phillips Extra Beard
        </p>
        <p>
          description description description description description
          description description description
        </p>
        <div className="buyButton">At ₹ 999</div>
        <table>
          
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
