import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

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
const Accordion = () => {
  const [open, setOpen] = useState(null);
  const openHandler = (id) => {
    setOpen(id === open ? null : id);
  };

  return (
    <div className="accardion">
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          onOpen={openHandler}
          open={open}
        >
          {item.text}
        </AccordionItem>
      ))}
      <AccordionItem
        id={4}
        title={"Another Accordion"}
        onOpen={openHandler}
        open={open}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          dolores deleniti alias distinctio nemo provident! Consectetur eligendi
          reiciendis saepe nostrum id ab. Sequi veniam dolor mollitia. Ad
          voluptas laudantium earum?
        </p>
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
        <a>Click ME</a>
      </AccordionItem>
    </div>
  );
};

export default Accordion;

const AccordionItem = ({ id, title, open, onOpen, children }) => {
  const isOpen = id === open;
  return (
    <div className={`accordion-item ${isOpen && "accordion__expanded"}`}>
      <div className="accordion-item__header" onClick={() => onOpen(id)}>
        <div> {title}</div>
        <ChevronDownIcon className="accordion-item__chevron" />
      </div>
      <div className="accordion-item__content">{children}</div>
    </div>
  );
};
