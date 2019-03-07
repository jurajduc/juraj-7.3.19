import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchDocuments } from '../actions';
import { Pagination } from 'semantic-ui-react'

class ListView extends React.Component {
  componentDidMount() {
    this.props.fetchDocuments(1);
  }

  showDetailView = (id) => {
    this.props.history.push('/document/' + id);
  }

  renderList() {
  return this.props.documents.map( (document, index) => {
      return (
        <div className="item listItem" key={document.id} onClick={()=>{this.showDetailView(document.id)}}>
          <i className="large middle aligned" />
          <div className="content">
            <h4>#{document.id} {document.title}</h4>
            <div className="description">
              <p className="centered">{document.description}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  PaginationCompact = () => {
    if(this.props.pagination.pages > 1)
    return (
    <Pagination
      activePage={this.props.pagination.page}
      boundaryRange={0}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      siblingRange={1}
      totalPages={this.props.pagination.pages}
      onPageChange={this.paginateTo}
    />)
  }

  paginateTo =  (e, params ) => {
    this.props.fetchDocuments(params.activePage);
  }

  render() {
    if(this.props.documents === null) {
      return (
        <div className='centered'>Documents not found</div>
      )
    } else if (this.props.documents.length > 0) {
      return (
        <div>
          <h2 className="centered">Documents</h2>

            <div >{this.renderList()}</div>

            <div className="pagination">
              {this.PaginationCompact()}
            </div>
        </div>
      );
    } else{
      return (
        <div className='centered'>No documents yet</div>
      )
    }
    
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    documents: state.documents,
    pagination: state.pagination,
  };
};

export default withRouter(connect(
  mapStateToProps,
  { 
    fetchDocuments,
  }
)(ListView));