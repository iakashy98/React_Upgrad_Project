import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Markup } from 'interweave';
export default class Func extends Component {
    state = {
        username: '',
        data:[],
        isLoaded: false,
        image:[],
        description:[],
    };
    onChange = (event) => {
        this.setState({username: event.target.value});
    };
    handelSubmit = (event) => {

        const url=`https://api.coingecko.com/api/v3/coins/${this.state.username}`;
        fetch(url)
            . then(response=>response.json())
            .then(data=>this.setState({data,image:data.image,description:data.description}), event.preventDefault())
            .catch( e=>console.log("error",e));
           console.log(this.state.data);

    };
    render() {
        return (
            <div className="container-fluid">
                <h1>Crypto Wiki</h1>
                <form onSubmit={this.handelSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        </div>
                        <input type="text" value={this.username} onChange={this.onChange}
                               className="form-control"></input>
                        <button className="btn btn-success">Get info
                            about coin
                        </button>
                    </div>
                </form>
                <span>Search for a Coin</span>
                <div className="sidenav" >
                    <img src={this.state.image.large} height="200" alt={this.state.data.id} />
                    <span>Symbol: {this.state.data.symbol}<br/></span>
                    <span>Country of Origin: {this.state.data.country_origin}<br/></span>
                    <span>Date of appearance:{this.state.data.genesis_date}<br/></span>
                    <span>Market Cap rank: {this.state.data.market_cap_rank}<br/></span>
                    <span>Coin Geeko Rank: {this.state.data.coingecko_rank}<br/></span>
                    <span>Coin Gecko Score: {this.state.data.coingecko_score}<br/></span>
                    <span>Developer Score: {this.state.data.developer_score}<br/></span>
                    <span>Community Score: {this.state.data.community_score}<br/></span>
                    <span>Liquidity Score: {this.state.data.liquidity_score}<br/></span>
                    <span>Public Interest Score :{this.state.data.public_interest_score}<br/></span>
                </div>
                <div className="container-fluid">
                    <Markup content=
                    {this.state.description.en}
                    />

                </div>





            </div>
        );
    }
}
