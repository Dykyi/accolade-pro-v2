import { LiftStatus } from "../../../../types/generated/graphqlScheme.ts";
import { Maybe } from "graphql/jsutils/Maybe";
import styles from "./LiftCard.module.scss";
import { ReactComponent as EditIcon } from "../../../../assets/icons/svg/edit.svg";

interface LiftCardProps {
  id: string;
  name: string;
  status?: Maybe<LiftStatus> | undefined;
  elevationGain: number;
  handleClick: (id: string) => void;
}

const LiftCard = ({
  id,
  name,
  status,
  elevationGain,
  handleClick,
}: LiftCardProps) => (
  <div className={styles.cardWrapper}>
    <div className={styles.info}>
      <span>{name}</span>
      <span>{elevationGain}</span>
    </div>
    <p className={styles.status}>{status}</p>
    <EditIcon className={styles.editIcon} onClick={() => handleClick(id)} />
  </div>
);

export default LiftCard;
