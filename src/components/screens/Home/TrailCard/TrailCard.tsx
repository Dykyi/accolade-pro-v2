import styles from "./TrailCard.module.scss";

interface TrialCardProps {
  name: string;
  status: string | null | undefined;
}

const TrailCard = ({ name, status }: TrialCardProps) => (
  <div className={styles.cardWrapper}>
    <div>{name}</div>
    <div>{status}</div>
  </div>
);

export default TrailCard;
