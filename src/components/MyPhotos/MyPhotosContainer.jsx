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
        />
    }
}

let mapStateToProps = (state) => ({
    photos: state.photosPage.photos,
    albumId: state.photosPage.albumId,
    id: state.photosPage.id,
    thumbnailUrl: state.photosPage.thumbnailUrl,
    title: state.photosPage.title,
    url: state.photosPage.url,
    newText: state.photosPage.newText

})

export default connect(mapStateToProps,{getPhotos, addPhoto, sendPhoto})(MyPhotosContainer)