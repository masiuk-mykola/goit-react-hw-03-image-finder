import { Img, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item }) => {
  return (
    <Item>
      <Img src={item.webformatURL} alt={item.tags} />
    </Item>
  );
};
