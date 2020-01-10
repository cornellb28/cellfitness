import React, {Component} from 'react';
import  PreviewCollection  from "../../components/preview-collection/preview-collection.comp";
import SHOP_DATA  from "./shop.data";

class Shop extends Component {
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        // Deconstruct the data to show on Shop Page
        const { collections } = this.state;
        return (
            <div className="shop-page">
            {collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }
}

export default Shop; 