import React, { Component } from 'react';

class Article extends Component {
  state = { article: null };
  render() {
    return (
      <>
        <div>
          {/* {console.log('in Article')} */}
          {console.log(this.props)}
          {/* <p>In article</p> */}
        </div>
      </>
    );
  }
}

export default Article;
