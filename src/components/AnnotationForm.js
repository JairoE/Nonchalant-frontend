import React from 'react';
import { Form, TextArea , Button, Segment} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { submitAnnotation } from '../actions/actions.js'
import { bindActionCreators } from 'redux';


class AnnotationForm extends React.Component{
  addAnnotation = (event) => {
    event.preventDefault()
    this.props.dispatchSubmitAnnotation(event.target.children[0].value, this.props.songId)
  }

  render(){
    console.log(this.props)
    return(
      <Segment style={{top: `${this.props.annotationHeight-160}px`}}>
          <Form onSubmit={this.addAnnotation}>
            <TextArea placeholder="Add annotation here!" />
            <Button> Submit Annotation </Button>
          </Form>
      </Segment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return({
    dispatchSubmitAnnotation: bindActionCreators(submitAnnotation, dispatch)
  })
}

const mapStateToProps = state => {
  return {
    songId: state.song.songObj.id,
    annotationHeight: state.annotation.annotationHeight
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AnnotationForm)
