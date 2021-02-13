import React from 'react'
import MyPhotos from "./MyPhotos";
import {connect} from "react-redux";
import {addPhoto, getPhotos, sendPhoto} from "../../redux/photos-reducer";

class MyPhotosContainer extends React.Component {
    componentDidMount() {
        this.props.getPhotos()
    }


    render() {
        return <MyPhotos photos={this.props.photos}
                         addPhoto={this.props.addPhoto}
                         sendPhoto={this.props.sendPhoto}
                         isFetching={this.props.isFetching}
        />
    }
}

let mapStateToProps = (state) => ({
    photos: state.photosPage.photos,
    isFetching: state.photosPage.isFetching
})

export default connect(mapStateToProps,{getPhotos, addPhoto, sendPhoto})(MyPhotosContainer)