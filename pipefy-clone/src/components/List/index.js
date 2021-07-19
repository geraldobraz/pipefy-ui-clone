import React, { useRef, useContext } from 'react';
import { Container } from './styles';
import { MdAdd } from 'react-icons/md';
import Card from '../Card';
import { useDrop, useDrag } from 'react-dnd';
import BoardContext from '../Board/context';

const List = ({ data, index: listIndex }) => {
  const ref = useRef();
  
  const { move, lists } = useContext(BoardContext);
  
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;

      if (lists[targetListIndex].cards.length > 0) {
        return;
      }

      const targetIndex = 0;

      if (draggedIndex === 0 && draggedListIndex === targetListIndex) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  })
  
  dragRef(dropRef(ref));

  return (
    <Container done={data.done} ref={ref} isDragging={isDragging}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card
            key={card.id}
            data={card}
            index={index}
            listIndex={listIndex} 
          />
        ))}
      </ul>
    </Container>
  )
}

export default List;
