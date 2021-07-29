import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE

  const { onOpen, isOpen, onClose } = useDisclosure();
  const [imgUrl, setImgUrl] = useState('');

  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE
  const viewImage = (url: string): void => {
    onOpen();
    setImgUrl(url);
  };

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid columns={3} spacing="40px">
        {cards.map(card => (
          <Card data={card} viewImage={() => viewImage(card.url)} />
        ))}
      </SimpleGrid>
      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imgUrl} />
    </>
  );
}
