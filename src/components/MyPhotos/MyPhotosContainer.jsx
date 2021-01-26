import React from 'react'
import MyPhotos from "./MyPhotos";
import {connect} from "react-redux";
import {getPhotos} from "../../redux/photos-reducer";

class MyPhotosContainer extends React.Component {
    componentDidMount() {
        this.props.getPhotos()
    }


    render() {
        return <MyPhotos photos={this.props.photos}/>
    }
}

let mapStateToProps = (state) => ({
    photos: state.photosPage.photos,

})

export default connect(mapStateToProps,{getPhotos})(MyPhotosContainer)