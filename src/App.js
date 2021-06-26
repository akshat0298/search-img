  
import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      photos: [],
      searchField: ''
    };
  }


  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
    if(this.state.searchField && this.state.searchField.length > 1) {
      if(this.state.searchField.length % 2 === 0){
       this.componentDidMount()
     }
   }
  };
    componentDidMount() {
    fetch('https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=7fafbe43ad20e974cfe756a3316f4fe5&text=${searchField}&format=json&nojsoncallback=1&per_page=10')
      .then(response => response.json())
      .then(photos => this.setState({ photos: photos.photos.photo }));
  }

  render() {
    const { photos, searchField } = this.state;
    // const filteredPhotos = photos.filter(photo =>
    //   photo.title.toLowerCase().includes(searchField.toLowerCase())
    // );

    return (
      <InfiniteScroll
        dataLength={photos.length} //This is important field to render the next data
        next={'https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=7fafbe43ad20e974cfe756a3316f4fe5&text=${searchField}&format=json&nojsoncallback=1&per_page=10'}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }>
        {<div className='App'>
                  <h1>Find Photos</h1>
                  <SearchBox onSearchChange={this.onSearchChange} />
                  <CardList photos={photos} /> 
                </div>}
        </InfiniteScroll>
    );
  }
}

export default App;
