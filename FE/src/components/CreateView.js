import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addDocument } from '../actions';

class CreateView extends React.Component {

    handleSubmit = async (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const description = this.getMessage.value;
        const file = this.getFile.files[0];

        const data = {
            title,
            description,
            file
        }
        await this.props.addDocument(data);
        
        this.getTitle.value = '';
        this.getMessage.value = '';
        this.props.history.push('/documents/');
    }

    render() {
        return (
            <div>
                <h2>Add document</h2>

                <form className="form" onSubmit={this.handleSubmit} >
                    <input required type="text" ref={(input) => this.getTitle = input} placeholder="Document name" /><br /><br />
                    <textarea rows="5" ref={(input) => this.getMessage = input} cols="28" placeholder="Enter Post" /><br /><br />
                    <input required type="file" ref={(input) => this.getFile = input} accept="image/*,.pdf,.doc,.docx,.xls,.xlsx" />
                    <button className="add-button">Add document</button>
                </form>
            </div>
        )
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
      addDocument,
    }
  )(CreateView));