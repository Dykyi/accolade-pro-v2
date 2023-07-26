import styles from "../Home.module.scss";
import LiftForm from "../../../../forms/LiftForm";
import TrialAccess from "../TrialAccess";
import { Lift } from "../../../../types/generated/graphqlScheme.ts";

interface LiftModalContentProps {
  data: { Lift: Lift };
  isLoading: boolean;
  mutateLoading: boolean;
  lift: string;
  filter: string;
  handleCloseModal: () => void;
  handleOpenModal: (id: string) => void;
}

const LiftModalContent = ({
  data,
  isLoading,
  mutateLoading,
  lift,
  handleCloseModal,
  handleOpenModal,
}: LiftModalContentProps) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const { name, elevationGain, trailAccess, status } = data?.Lift || {};

  return (
    <>
      <div className={styles.liftInfo}>
        <div className={styles.liftName}>{name}</div>
        <div className={styles.liftElevation}>{elevationGain}</div>
      </div>
      <LiftForm
        lift={lift}
        defaultStatus={status}
        onClose={handleCloseModal}
        renderTrialAccess={
          <TrialAccess
            isLoading={mutateLoading}
            trailAccess={trailAccess}
            handleClick={handleOpenModal}
          />
        }
      />
    </>
  );
};

export default LiftModalContent;
