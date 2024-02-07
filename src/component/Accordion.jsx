import { useState } from "react";
import{ChevronDownIcon}from '@heroicons/react/24/outline'

const data = [
  {
    id: 1,
    title: "Accordion One",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestias asperiores dolorem, beatae eius distinctio quis labore officia, numquam libero autem iste dolores id unde expedita excepturi? Accusamus, commodi harum",
  },
  {
    id: 2,
    title: "Accordion Two",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestias asperiores dolorem, beatae eius distinctio quis labore officia, numquam libero autem iste dolores id unde expedita excepturi? Accusamus, commodi harum",
  },
  {
    id: 3,
    title: "Accordion Three",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestias asperiores dolorem, beatae eius distinctio quis labore officia, numquam libero autem iste dolores id unde expedita excepturi? Accusamus, commodi harum",
  },
];
const Accordion = ({}) => {
  return (
    <div className="accardion">
      {data.map((item) => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Accordion;

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`accordion-item ${isOpen && "accordion__expanded"}`}>
      <div className="accordion-item__header" onClick={()=>setIsOpen(!isOpen)}>
       <div> {item.title}</div>
       <ChevronDownIcon className="accordion-item__chevron"/>
      </div>
      <div className="accordion-item__content">{item.text}</div>
    </div>
  );
};
