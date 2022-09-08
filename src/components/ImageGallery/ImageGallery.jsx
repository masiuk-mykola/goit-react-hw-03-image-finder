import { Component } from 'react';
import { fetchPhotos } from 'services/ImagesAPI';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    images: [],
  };
  // componentDidMount() {
  //   fetchPhotos(this.props.onFetch).then(response =>
  //     this.setState({ images: [...response.hits] })
  //   );
  // }

  componentDidUpdate(prevProps, _) {
    if (prevProps.onFetch !== this.props.onFetch) {
      fetchPhotos(this.props.onFetch).then(response =>
        this.setState({ images: [...response.hits] })
      );
    }
  }
  render() {
    const { images } = this.state;
    return (
      <ul>
        {/* {images.length < 0 && */}
        {images.map(item => {
          return <ImageGalleryItem key={item.id} item={item} />;
        })}
        {/* } */}
      </ul>
    );
  }
}
