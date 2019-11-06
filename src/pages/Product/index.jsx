import React, { Component } from 'react';
import axios from 'axios';

import Loading from '../../components/Loading';

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            data: {}, 
            isLoading: true,
        }
    }

    componentWillMount() { // é chamado quando irá renderizar
        console.log('chamei o componentWillMount')
    }

    componentDidMount() { // é chamado após renderizar a página
        axios.get(`https://api.mercadolibre.com/items/${this.state.id}?attributes=title,price,initial_quantity,pictures,condition`)
            .then((data) => {
                console.log(data);
                this.setState({ 
                    data: Response.data,
                    isLoading: false,
                });

            });
    }

    render() {
        console.log(this.state);
        return (<main>
            <Loading isLoading={ this.state.isLoading }/>
        </main>);
    }
}

export default Product;