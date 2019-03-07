import React from 'react';
import { connect } from 'react-redux';

class Loading extends React.Component{

    render() {

        const isLoading = this.props.loading;
        if(isLoading)
            return <div className="loading">
            this could have been a nice indicator for 
            <h3>loading ...</h3>
            </div>;
        else
            return null;
      }

}

const mapStateToProps = state => {
    return { loading: state.loading };
  };

export default connect(
    mapStateToProps,
    { 
    //   fetchPostsAndUsers,
    //   fetchPosts,
    }
  )(Loading);