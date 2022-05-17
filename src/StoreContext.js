import React from "react";
import store from "./redux/redux-store";

const StoreContext = React.createContext(null);

export const Provider = ({ store, children }) => {
    return <StoreContext.Provider value={store}>
                {children}
            </StoreContext.Provider>
}

export default StoreContext;
