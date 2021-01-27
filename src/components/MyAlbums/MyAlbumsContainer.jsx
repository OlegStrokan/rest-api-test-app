import React from 'react'
import MyAlbums from "./MyAlbums";
import {connect} from "react-redux";
import {addAlbum, getAlbums, sendAlbum} from "../../redux/albums-reducer";

class MyAlbumsContainer extends React.Component {
    componentDidMount() {
        this.props.getAlbums()
    }


    render() {
        return <MyAlbums albums={this.props.albums}
                         addAlbum={this.props.addAlbum}
                         sendAlbum={this.props.sendAlbum}
        />
    }
}

let mapStateToProps = (state) => ({
    albums: state.albumsPage.albums,

})

export default connect(mapStateToProps,{getAlbums, sendAlbum, addAlbum})(MyAlbumsContainer)