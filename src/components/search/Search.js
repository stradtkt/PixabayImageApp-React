import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from './../results/ImageResults';

class Search extends Component {
    state = {
        searchedText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '12712369-205bcb8bafb315dc58e9e64b2',
        images: []
    };
    onTextChange = (e) => {
        this.setState({[e.target.name]: e.target.value}, () => {
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchedText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                .then(res => this.setState({images: res.data.hits}))
                .catch(err => console.log(err));
        });
    };
    onAmountChange = (e, index, value) => this.setState({amount: value});
    render() {
        return (
            <div>
                <TextField name="searchedText" value={this.state.searchedText} onChange={this.onTextChange} floatingLabelText="Search For Images" fullWidth={true}/>
                <br/>
                <SelectField floatingLabelText="Amount" name="amount" value={this.state.amount} onChange={this.onAmountChange}>
                    <MenuItem value={5} primaryText="5"/>
                    <MenuItem value={10} primaryText="10"/>
                    <MenuItem value={15} primaryText="15"/>
                    <MenuItem value={30} primaryText="30"/>
                    <MenuItem value={50} primaryText="50"/>
                </SelectField>
                <br/>
                {this.state.images.length > 0 ? (<ImageResults images={this.state.images}/>) : null}
            </div>
        )
    }
}

export default Search;
