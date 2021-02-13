import React from 'react'
import MyAlbums from "./MyAlbums";
import {connect} from "react-redux";
import {addAlbum, getAlbums, sendAlbum} from "../../redux/albums-reducer";
import {authRedirect} from "../../Hoc/Redirect";

class MyAlbumsContainer extends React.Component {
    componentDidMount() {
        this.props.getAlbums()
    }

    render() {
        return <MyAlbums albums={this.props.albums}
                         addAlbum={this.props.addAlbum}
                         sendAlbum={this.props.sendAlbum}
                         isFetching={this.props.isFetching}
        />
    }
}

let mapStateToProps = (state) => ({
    albums: state.albumsPage.albums,
    isFetching: state.albumsPage.isFetching
})

let AuthAlbums = authRedirect(MyAlbumsContainer)

export default connect(mapStateToProps,{getAlbums, sendAlbum, addAlbum})(AuthAlbums)