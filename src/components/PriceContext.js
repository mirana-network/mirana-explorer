import { createContext } from "react";


const PriceContext = createContext({'price': 0});
PriceContext.displayName = "MiranaPrice";

export default PriceContext;
