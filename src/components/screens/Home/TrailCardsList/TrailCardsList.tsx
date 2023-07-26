import styles from "./TrailCardsList.module.scss";
import { Trail } from "../../../../types/generated/graphqlScheme.ts";
import TrailCard from "../TrailCard";

interface TrailCardsListProps {
  trailAccess: Trail[];
}

const TrailCardsList = ({ trailAccess }: TrailCardsListProps) => {
  return (
    <div className={styles.list}>
      {trailAccess.map((item) => (
        <TrailCard key={item.id} name={item.name} status={item.status} />
      ))}
    </div>
  );
};

export default TrailCardsList;
