import {Col,Row} from "react-bootstrap"
import storeItems from '../data/items.json' 
import StoreItems from "../components/StoreItems"
export function Store() {
  return (
    <>
    <div>Store</div>
    <Row md={2} xs={1} lg={3} className="g-3">
       {storeItems.map(item=>(
         <Col key={item.id}>
            {/* {JSON.stringify(item)} */}
            <StoreItems {...item}/>
         </Col>
       ))}
    </Row>
    </>
  )
}
