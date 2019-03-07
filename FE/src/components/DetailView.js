import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteDocument, fetchDocument } from '../actions';

class DetailView extends React.Component {

    componentDidMount() {
        this.props.fetchDocument(this.props.match.params.documentId)
    }

    deleteDocument = async (id) => {
        await this.props.deleteDocument(id);
        this.props.history.push('/documents/');
    }

    render() {
        if (this.props.document) {
            return (
                <div>
                    <h2>#{this.props.document.id} {this.props.document.title}</h2>
                    <p className="centered">{this.props.document.description}</p>
                    <div className="form">
                        <a className='download-button' href={this.props.document.file} rel="noopener noreferrer" target="_blank" download>Download document</a>
                        <button className='delete-button' onClick={()=>{this.deleteDocument(this.props.document.id)}} >Delete document</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='centered'>Document not found</div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        document: state.document,
    };
  };

export default withRouter(connect(
    mapStateToProps,
    { 
        fetchDocument,
        deleteDocument,
      
    }
  )(DetailView));