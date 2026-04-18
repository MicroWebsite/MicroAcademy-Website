import { motion } from "framer-motion";
import { LifeAtAcedemyImage } from "@/app/types/lifeAtAcedemy";
import {
  cells,
  containerVariants,
  itemVariants,
} from "@/app/utils/helper/lifeAtAcedemyConfig";
import LifeAtAcedemyCard from "./LifeAtAcedemyCard";

type LifeAtAcedemyGridProps = {
  images: LifeAtAcedemyImage[];
  onImageSelect: (image: LifeAtAcedemyImage) => void;
};

export default function LifeAtAcedemyGrid({
  images,
  onImageSelect,
}: LifeAtAcedemyGridProps) {
  return (
    <motion.div
      style={{
        maxWidth: "1152px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "220px 220px 220px",
        gap: "10px",
      }}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {images.map((image, index) => (
        <motion.div
          key={`${image.src}-${index}`}
          variants={itemVariants}
          style={{
            gridColumn: cells[index].gridColumn,
            gridRow: cells[index].gridRow,
          }}
        >
          <LifeAtAcedemyCard
            image={image}
            index={index}
            onClick={() => onImageSelect(image)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
