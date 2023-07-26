import LiftCard from "../LiftCard";
import styles from "./LiftCardsList.module.scss";
import useLifts from "../../../../hooks/useLifts.ts";
import { GET_ALL_LIFTS } from "../../../../queries/getAllLifts.ts";
import { Lift } from "../../../../types/generated/graphqlScheme.ts";

interface LiftCardsListProps {
  filter?: string;
  handleClick: (id: string) => void;
}

const LiftCardsList = ({ handleClick, filter }: LiftCardsListProps) => {
  const { loading, error, filtered } = useLifts({
    query: GET_ALL_LIFTS,
    filter: filter,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <p>Error : {error.message}</p>;
  }

  return (
    <div className={styles.list}>
      {filtered?.map(({ name, elevationGain, status, id }: Lift) => (
        <LiftCard
          key={id}
          id={id}
          name={name}
          status={status}
          elevationGain={elevationGain}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
export default LiftCardsList;
