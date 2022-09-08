import { Button } from 'components/Button/Button';
import { Component } from 'react';
import { fetchPhotos } from 'services/ImagesAPI';
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 2,
  };

  componentDidUpdate(prevProps, _) {
    if (
      prevProps.searchQuery !== this.props.searchQuery &&
      this.props.searchQuery !== ''
    ) {
      fetchPhotos(this.props.searchQuery).then(response =>
        this.setState({ images: [...response.hits] })
      );
    }
  }
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    fetchPhotos(this.props.searchQuery, this.state.page).then(response =>
      this.setState(prevState => ({
        images: [...prevState.images, ...response.hits],
      }))
    );
  };

  render() {
    const { images } = this.state;
    const { searchQuery } = this.props;
    return (
      <>
        <Gallery>
          {images.map(item => {
            return <ImageGalleryItem key={item.id} item={item} />;
          })}
        </Gallery>
        {searchQuery !== '' && (
          <Button children={'Load more'} onClick={this.loadMore} />
        )}
      </>
    );
  }
}
