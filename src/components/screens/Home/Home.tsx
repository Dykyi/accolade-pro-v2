import { useState } from "react";
import PageHeader from "../../_common/PageHaeder";
import Select from "../../_common/Select";
import LiftCardsLayout from "./LiftCardsLayout";
import LiftCardsList from "./LiftCardsList";
import { LiftStatus } from "../../../types/generated/graphqlScheme.ts";
import styles from "./Home.module.scss";
import Modal from "../../_common/Modal";
import { GET_LIFT_BY_ID } from "../../../queries/getLiftById.ts";
import useLifts from "../../../hooks/useLifts.ts";
import LiftModalContent from "./LiftModalContent";
import { SingleValue } from "react-select";

export interface Option {
  label: string;
  value: string;
}

const Home = () => {
  const [filter, setFilter] = useState<string>("ALL");
  const [lift, setLift] = useState<string | LiftStatus>("");

  const modalIsOpen = !!lift;
  const { data, loading, mutateLoading } = useLifts({
    query: GET_LIFT_BY_ID,
    options: { variables: { id: lift } },
  });

  const handleChangeFilter = (option: SingleValue<Option>) => {
    if (option?.value) {
      setFilter(option.value);
    }
  };

  const handleOpenModal = (id: string) => setLift(id);

  const handleCloseModal = () => setLift("");

  return (
    <div className={styles.wrapper}>
      <PageHeader
        title="Lift list"
        renderSelect={
          <Select
            label="Filter per status"
            handleChange={handleChangeFilter}
            value={filter}
          />
        }
      />
      <LiftCardsLayout>
        <LiftCardsList filter={filter} handleClick={handleOpenModal} />
      </LiftCardsLayout>
      <Modal isOpen={modalIsOpen} handleClose={handleCloseModal}>
        <LiftModalContent
          data={data}
          isLoading={loading}
          mutateLoading={mutateLoading}
          lift={lift}
          filter={filter}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
        />
      </Modal>
    </div>
  );
};

export default Home;
