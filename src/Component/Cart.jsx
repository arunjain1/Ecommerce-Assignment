import React,{useState,useEffect,useContext} from 'react'
import NoresultImg from "../asset/nofav.jpg"
import CartItems from '../Utils/CartItems';
import "./Styling/Cart.css";
function Cart() {
    let [cartItems, setcartItems] = useState([]);
    const {setItems} = useContext(CartItems);
    const[total,setTotal] = useState(0);
    let initialItems;
    useEffect(function () {
        let itemStrArr = localStorage.getItem("cart") || "[]";
        let itemArr = JSON.parse(itemStrArr);
        initialItems = itemArr;
        itemUpdate(itemArr);
    }, []);
    useEffect(()=>{
       if(cartItems.length==0){
         setTotal(0);
         return;
       }
       calculateTotal();
    },[cartItems]);
    function calculateTotal(){
        let total =0;
        let totalItems;
        cartItems.map((itemObj)=>{
            total  = total + (Number(itemObj.price)*Number(itemObj.qty));
            totalItems += Number(itemObj.qty);
        })
        setTotal(total);
    }
    function updateCart(){
        let arr = [];
        cartItems.map((obj)=>{
            for(let i = 0;i<obj.qty;i++){
                let newObj = {...obj};
                delete newObj.qty;
                arr.push(newObj);
            }
        })
        setItems(arr);
        arr = JSON.stringify(arr);
        localStorage.setItem("cart",arr);
    }
    function itemUpdate(arr){
      let mymap =  new Map();
      arr.map((obj)=>{
        if(mymap.has(obj.id)){
            let prevObj = mymap.get(obj.id);
            prevObj.qty = Number(prevObj.qty) +1;
        }
        else{
            let newObj = {...obj};
            newObj.qty = 1;
            mymap.set(obj.id,newObj);
        }
      })
      let newarr = []
      mymap.forEach((value,key)=>{
        newarr.push(value);
      })
      setcartItems([...newarr])
    }
    function removeItem(id){
        let prevStrArray = localStorage.getItem("cart") || "[]";
        let prevArray = JSON.parse(prevStrArray);
        prevArray = prevArray.filter((itemObj) => {
            return itemObj.id != id;
        })
        cartItems = cartItems.filter((itemObj) => {
            return itemObj.id != id;
        })
        setcartItems([...cartItems]);
        setItems([...prevArray]);
        prevArray = JSON.stringify(prevArray);
        localStorage.setItem("cart", prevArray)
    }
    function callback(itemObj,idx) {
        return (
            <tr key = {itemObj.id}>
                <td>
                  <div class="tbl_data">
                    <img src={itemObj.thumbnail} className="poster_img"
    
                        style={{ height: "10rem" }}
                    ></img>
                  </div>
                </td>
                <td className='posterName'>
                <div className="itemName">{itemObj.title}</div>
                <div className="action">
                    <button className='delete' onClick={()=>{
                        removeItem(itemObj.id)
                    }}>delete</button>
                    <div className="qty_cont">
                        <div className="qty">Qty</div>
                        <input className='qty_num' type='number' min="1" value={itemObj.qty}
                        onChange={(e)=>{
                            cartItems[idx].qty = Number(e.target.value);
                            setcartItems([...cartItems]);
                            updateCart();
                        }}
                        onKeyDown={(e)=>{
                            e.preventDefault();
                        }}></input>
                    </div>
                </div>
                </td>
                <td>
                  {itemObj.price}
                </td>
            </tr>
        )
    }
  return (
    <div>
        {cartItems.length==0?<img className='no_img'src = {NoresultImg}/>:
        <table>
            <thead>
                <tr>
                    <th>Shopping Cart</th >
                    <th> 
                    </th>
                    <th>
                        Price
                    </th>
                </tr>

            </thead>
            <tbody>
                {
                cartItems.map(callback)}
                <tr>
                    <td></td>
                    <td className='total'>SubTotal</td>
                    <td className='total'>${total}</td>
                </tr>
            </tbody>
        </table>}
    </div>
  )
}



export default Cart