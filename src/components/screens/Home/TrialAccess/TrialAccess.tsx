import LiftCardsLayout from "../LiftCardsLayout";
import LiftCardsList from "../LiftCardsList";
import styles from "./TrialAccess.module.scss";
import { Trail } from "../../../../types/generated/graphqlScheme.ts";
import TrailCardsList from "../TrailCardsList";

interface TrialAccessProps {
  isLoading: boolean;
  trailAccess?: Trail[];
  handleClick: (id: string) => void;
}

const TrialAccess = ({
  handleClick,
  isLoading,
  trailAccess = [],
}: TrialAccessProps) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <p className={styles.title}>Trial Access List</p>
      <LiftCardsLayout className={styles.layout}>
        <TrailCardsList trailAccess={trailAccess} />
        <LiftCardsList handleClick={handleClick} />
      </LiftCardsLayout>
    </>
  );
};

export default TrialAccess;
